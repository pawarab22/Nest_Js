import { Module } from '@nestjs/common';
import { Profile } from '../Profile/profile.entity';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Profile])],
  providers: [Profile, ProfileService],
  controllers: [ProfileController],
  exports: [TypeOrmModule],
})
export class ProfileModule {}
