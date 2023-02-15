import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PairEntity } from './pair.entity';
import { Pair } from './pair.types';

@Injectable()
export class PairRepo {
  constructor(
    @InjectRepository(PairEntity)
    private repo: Repository<PairEntity>,
  ) {}

  public async list(): Promise<PairEntity[]> {
    return this.repo.find();
  }

  public async createMany(pairs: Pair[]) {
    await this.repo.insert(pairs);
  }

  public async deleteMany(pairs: Pair[]) {
    await this.repo.delete(pairs.map((pair) => pair.id));
  }
}
