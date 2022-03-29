import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule}  from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { BalancesModule } from './balances/balances.module';
import { CategoryController } from './category/category.controller';
import { CategoryModule } from './category/category.module';




@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 23306,
      username: 'root',
      password: 'testloannest',
      database: 'loan_checker_db',
      synchronize: true,
      autoLoadEntities: true,
    }),
    ConfigModule.forRoot({
      isGlobal:true
    }),
    AuthModule,
    UserModule,
    BalancesModule,
    CategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
