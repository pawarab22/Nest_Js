import { Test, TestingModule } from '@nestjs/testing';
import { Question } from './question';

describe('Question', () => {
  let provider: Question;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Question],
    }).compile();

    provider = module.get<Question>(Question);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
