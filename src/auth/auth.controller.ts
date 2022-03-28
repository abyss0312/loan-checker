import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto ,SignUpDto} from './dto/main';

@Controller('auth')
export class AuthController {

    constructor(private authService:AuthService){}

    @Post('login')
    Login(@Body() dto:AuthDto){
        console.log(dto);
        return this.authService.Login(dto);
    }

    @Post('signup')
    async SignUp(@Body() dto: SignUpDto){
        console.log(dto);
        return await this.authService.SignUp(dto);
    }
}
