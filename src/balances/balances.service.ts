import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/category/entities/category.entity';
import { GenericResponse } from 'src/shared/models/response/generic.response';
import { mapper } from 'src/shared/profiles/main';
import { Repository } from 'typeorm';
import { BalanceDto } from './dto/balance.dto';
import { Balance } from './entity/balance.entity';

@Injectable()
export class BalancesService {

    constructor(
        @InjectRepository(Balance)
        private balanceRepo: Repository<Balance>
    ){}


    async BalancesByUser(userId:number) : Promise<GenericResponse<BalanceDto[]>>{

        const response = new GenericResponse<BalanceDto[]>();

        try{
            const listBalance = await this.balanceRepo.find({
                relations:{
                    category:true
                },
                where:{
                    UserId: userId
                }
            });

            

            console.log(listBalance);
            response.Code=200;
            response.Data=listBalance;
            response.Message= 'Correcto';
            response.ValidateResult = true;

        }catch(ex){
            response.Code=500;
            response.Data=ex.Message;
            response.Message= 'Error Getting List of  Balances';
            response.ValidateResult = false;
        } 

       

        return response;

    }

    async CreateBalance(balance: BalanceDto) : Promise<GenericResponse<string>>{

        const response = new GenericResponse<string>();
        
        try{
            const balanceMap = mapper.map(balance,Balance,BalanceDto);
            console.log(balanceMap);
            const balanceRes = this.balanceRepo.create(balanceMap);
            console.log(balanceRes);
            await this.balanceRepo.save(balanceRes);

            response.Code=201;
            response.Data='Creado correcto';
            response.Message= 'Correcto';
            response.ValidateResult = true;

        } catch(ex){
            response.Code=500;
            response.Data=ex;
            response.Message= 'Error Adding Balance';
            response.ValidateResult = false;
        }   
        
        return response;
    }



 
}
