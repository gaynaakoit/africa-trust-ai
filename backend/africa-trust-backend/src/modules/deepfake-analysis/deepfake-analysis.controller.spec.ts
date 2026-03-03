import { Test, TestingModule } from '@nestjs/testing';
import { DeepfakeAnalysisController } from './deepfake-analysis.controller';

describe('DeepfakeAnalysisController', () => {
  let controller: DeepfakeAnalysisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeepfakeAnalysisController],
    }).compile();

    controller = module.get<DeepfakeAnalysisController>(DeepfakeAnalysisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
