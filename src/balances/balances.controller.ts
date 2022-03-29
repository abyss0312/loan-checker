import { MapInterceptor } from '@automapper/nestjs';
import { Body, Controller, Get, UseGuards, Post, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BalancesService } from './balances.service';
import { BalanceDto } from './dto/balance.dto';
import { Balance } from './entity/balance.entity';

@Controller('balances')
export class BalancesController {

    constructor(private balanceService: BalancesService){}

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    ListByUser(@Param('id') id:number){
        return this.balanceService.BalancesByUser(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async CreateBalance(@Body() balanceDto: BalanceDto){

        return await this.balanceService.CreateBalance(balanceDto);

    }
}
