import { Test, TestingModule } from '@nestjs/testing';
import { Catagory } from './catagory';

describe('Catagory', () => {
  let provider: Catagory;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Catagory],
    }).compile();

    provider = module.get<Catagory>(Catagory);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
