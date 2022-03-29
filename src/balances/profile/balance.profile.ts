import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import type { Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { Balance } from '../entity/balance.entity';
import { BalanceDto } from '../dto/balance.dto';

@Injectable()
export class BalanceProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper) => {
      mapper.createMap(Balance, BalanceDto);
    };
  }
}