import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PairEntity } from './pair.entity';
import { PairRepo } from './pair.repo';

@Module({
  imports: [TypeOrmModule.forFeature([PairEntity])],
  providers: [PairRepo],
  exports: [PairRepo],
})
export class PairModule {}
