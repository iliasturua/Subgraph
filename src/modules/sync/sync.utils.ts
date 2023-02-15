import { Pair } from '../pair/pair.types';
import * as _ from 'lodash';

export const diffPairs = (
  newData: Pair[],
  storedData: Pair[],
): [Pair[], Pair[]] => {

  const addedItems = _.differenceBy(newData, storedData, 'id');
  const deletedItems = _.differenceBy(storedData, newData, 'id');

  return [addedItems, deletedItems];
};