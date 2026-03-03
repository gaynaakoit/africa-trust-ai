import { Module } from '@nestjs/common';
import { DeepfakeAnalysisController } from './deepfake-analysis.controller';
import { DeepfakeAnalysisService } from './deepfake-analysis.service';

@Module({
  controllers: [DeepfakeAnalysisController],
  providers: [DeepfakeAnalysisService]
})
export class DeepfakeAnalysisModule {}
