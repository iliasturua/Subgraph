import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        return {
          type: 'postgres',
          schema: 'public',
          host: configService.get('DB_POSTGRES_HOST'),
          port: configService.get('DB_POSTGRES_PORT'),
          username: configService.get('DB_POSTGRES_USERNAME'),
          password: configService.get('DB_POSTGRES_PASSWORD'),
          database: configService.get('DB_POSTGRES_DATABASE'),
          //   namingStrategy: new SnakeNamingStrategy(),
          autoLoadEntities: true,
          synchronize: false,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
