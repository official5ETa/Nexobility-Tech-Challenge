import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { ApiModule } from './modules/api/api.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DatabaseModule, ApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
