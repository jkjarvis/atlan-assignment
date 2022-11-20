import { Test, TestingModule } from '@nestjs/testing';
import { CollectFormService } from './collect-form.service';

describe('CollectFormService', () => {
  let service: CollectFormService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollectFormService],
    }).compile();

    service = module.get<CollectFormService>(CollectFormService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
