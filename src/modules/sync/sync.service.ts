import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { AxiosService } from 'src/providers/axios/axios.service';
import { ExternalGraphService } from 'src/providers/external-graph/external-graph.service';
import { PairRepo } from '../pair/pair.repo';
import { Pair } from '../pair/pair.types';
import { pairEntityToPair } from '../pair/pair.utils';
import { SynchronizedPairs } from './sync.types';
import { diffPairs } from './sync.utils';

@Injectable()
export class SyncService {
  constructor(
    private axios: AxiosService,
    private externalGraphService: ExternalGraphService,
    private pairRepo: PairRepo,
    private readonly logger: Logger,
  ) {}

  @Cron(CronExpression.EVERY_30_MINUTES)
  async synchronizePairs(): Promise<SynchronizedPairs> {
    const url = this.externalGraphService.getUrl();
    const query = this.externalGraphService.getQuery();

    try {
      const { data } = await this.axios.post<{
        data: { pairs: Pair[] };
      }>(url, {
        query,
      });

      const storedData = (await this.pairRepo.list()).map(pairEntityToPair);

      const [pairsToInsert, pairsToDelete] = diffPairs(data.pairs, storedData);

      if (pairsToInsert.length) {
        await this.pairRepo.createMany(pairsToInsert);
      }

      if (pairsToDelete.length) {
        await this.pairRepo.deleteMany(pairsToDelete);
      }

      this.logger.log({ inserted: pairsToInsert, deleted: pairsToDelete });

      return { inserted: pairsToInsert, deleted: pairsToDelete };
    } catch (error) {
      throw error;
    }
  }
}
