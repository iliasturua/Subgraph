import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule/dist';
import { SyncModule } from './modules/sync/sync.module';
import { DatabaseModule } from './providers/database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule.forRoot(),
    DatabaseModule,
    SyncModule,
  ],
})
export class AppModule {}
