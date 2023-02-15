import { PairEntity } from './pair.entity';
import { Pair } from './pair.types';

export const pairEntityToPair = (pairEntity: PairEntity): Pair => {
  return {
    id: pairEntity.id,
    token0: pairEntity.token0,
    token1: pairEntity.token1,
  };
};
