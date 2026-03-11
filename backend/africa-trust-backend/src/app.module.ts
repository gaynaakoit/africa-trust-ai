import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeepfakeAnalysisModule } from './modules/deepfake-analysis/deepfake-analysis.module';

@Module({
  imports: [DeepfakeAnalysisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
