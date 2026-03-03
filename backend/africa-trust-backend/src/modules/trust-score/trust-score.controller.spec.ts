import { Test, TestingModule } from '@nestjs/testing';
import { TrustScoreController } from './trust-score.controller';

describe('TrustScoreController', () => {
  let controller: TrustScoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrustScoreController],
    }).compile();

    controller = module.get<TrustScoreController>(TrustScoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
