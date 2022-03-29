import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/category/entities/category.entity';
import { BalancesController } from './balances.controller';
import { BalancesService } from './balances.service';
import { Balance } from './entity/balance.entity';
import { BalanceProfile } from './profile/balance.profile';

@Module({
  imports:[TypeOrmModule.forFeature([Balance,Category])],
  controllers: [BalancesController],
  providers: [BalancesService]
})
export class BalancesModule {}
