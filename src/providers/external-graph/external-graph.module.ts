import { Module } from '@nestjs/common';
import { ExternalGraphService } from './external-graph.service';

@Module({
  providers: [ExternalGraphService],
  exports: [ExternalGraphService],
})
export class ExternalGraphModule {}
