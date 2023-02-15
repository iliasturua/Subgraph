import { Controller, Post } from '@nestjs/common';
import { Pair } from '../pair/pair.types';
import { SyncService } from './sync.service';
import { SynchronizedPairs } from './sync.types';

@Controller()
export class SyncController {
  constructor(private readonly graphService: SyncService) {}

  @Post('/synchronize')
  async synchronizePairs(): Promise<SynchronizedPairs> {
    const synchronizedPairs = await this.graphService.synchronizePairs();

    return synchronizedPairs;
  }
}
