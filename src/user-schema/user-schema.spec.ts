import { Test, TestingModule } from '@nestjs/testing';
import { UserSchema } from './user-schema';

describe('UserSchema', () => {
  let provider: UserSchema;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserSchema],
    }).compile();

    provider = module.get<UserSchema>(UserSchema);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
