import { ConsoleLogger, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAuth } from './entities/auth.entity';
import { AuthDto,SignUpDto } from './dto/main';
import { Repository } from 'typeorm';
import { GenericResponse } from '../shared/models/response/generic.response';
import { mapper } from 'src/shared/profiles/main';
import { User } from 'src/user/entities/User.entity';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as argon from'argon2';



@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(UserAuth)
        private authRepository: Repository<UserAuth>,

        @InjectRepository(User)
        private userRepository: Repository<User>,

        private config : ConfigService,
        private jwt: JwtService

    ) {}

    async Login(request:AuthDto): Promise<GenericResponse<string>>{

        const response = new GenericResponse<string>();
        try{

        
            const authRes = await this.authRepository.findOne({
                where:{
                    Username: request.Username
                }
            });
            console.log(authRes);

            if(!authRes) {
                response.Code=404;
                response.Data= '';
                response.Message= 'Usuario No Existe';
                response.ValidateResult = false;

                return response;
            };

            const pass = await argon.verify(authRes.Password,request.Password);

            if(!pass) {
                response.Code=404;
                response.Data= '';
                response.Message= 'password  Incorrect';
                response.ValidateResult = false;

                return response;
            };

            const token = 'bearer ' + await this.signToken(authRes.id,authRes.Username);

            response.Code=200;
            response.Data=token;
            response.Message= 'Sign in';
            response.ValidateResult = true;
            
        }catch(ex){
            response.Code=500;
            response.Data=ex;
            response.Message= 'Error Loging up';
            response.ValidateResult = false;
        }  

        return response;
    }
   

    async SignUp(request: SignUpDto): Promise<GenericResponse<string>>{

        
        const response = new GenericResponse<string>();
        const date = new Date;
        const hash = await argon.hash(request.Password);

        try{
            let auth = {
                Username: request.Username,
                Password: hash
                
            } as UserAuth;
            auth.isActive = true;
            auth.CreatedDate= date.toLocaleString();

            const authRes = this.authRepository.create(auth);
            await this.authRepository.save(authRes);

            let user = mapper.map(request,User,SignUpDto);
            user.UserAuthId = authRes.id;

            const userRes = this.userRepository.create(user);
            await this.userRepository.save(userRes);

           

            response.Code=201;
            response.Data='';
            response.Message= 'Added';
            response.ValidateResult = true;

        }
        catch(ex){
            response.Code=500;
            response.Data=ex;
            response.Message= 'Error Signing up';
            response.ValidateResult = false;
        }   
        
        return response;
    }

    async signToken(id:number, username:string): Promise<string>{

        const payload = {
            sub: id,
            username
        }
        console.log(this.config.get('SECRET_KEY'));

        return this.jwt.signAsync(payload, {
            expiresIn: '110m',
            secret: this.config.get('SECRET_KEY')
        })
    }
}
