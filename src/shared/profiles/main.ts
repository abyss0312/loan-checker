import { CamelCaseNamingConvention, createMapper } from '@automapper/core';
import { classes } from '@automapper/classes';
import { SignUpDto } from 'src/auth/dto/signup.dto';
import { User } from 'src/user/entities/User.entity';
import { UserAuth } from 'src/auth/entities/auth.entity';
import { BalanceDto } from 'src/balances/dto/balance.dto';
import { Balance } from 'src/balances/entity/balance.entity';
import { CategoryDto } from 'src/category/dto/category.dto';
import { Category } from 'src/category/entities/category.entity';



export const mapper = createMapper({
    name: '',
    pluginInitializer: classes,
  });

  mapper.createMap(SignUpDto, User);
  mapper.createMap(SignUpDto,UserAuth);
  mapper.createMap(CategoryDto,Category);
  mapper.createMap(BalanceDto,Balance);
  mapper.createMap(Category,Category);
mapper.createMap(Balance,BalanceDto);