import { Module } from '@nestjs/common/decorators';
import { AxiosModule } from 'src/providers/axios/axios.module';
import { ExternalGraphModule } from 'src/providers/external-graph/external-graph.module';
import { PairModule } from '../pair/pair.module';
import { SyncController } from './sync.controller';
import { SyncService } from './sync.service';

@Module({
  imports: [AxiosModule, ExternalGraphModule, PairModule],
  providers: [SyncService],
  controllers: [SyncController],
})
export class SyncModule {}
