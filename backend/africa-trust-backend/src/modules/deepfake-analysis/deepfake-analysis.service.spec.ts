import { Test, TestingModule } from '@nestjs/testing';
import { DeepfakeAnalysisService } from './deepfake-analysis.service';

describe('DeepfakeAnalysisService', () => {
  let service: DeepfakeAnalysisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeepfakeAnalysisService],
    }).compile();

    service = module.get<DeepfakeAnalysisService>(DeepfakeAnalysisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
