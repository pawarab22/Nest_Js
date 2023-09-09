import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UsersController } from './users.controller';
import { Users } from './users';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from 'src/user-schema/user-schema';

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema])],
  controllers: [UsersController],
  providers: [Users, UsersService],
  exports: [TypeOrmModule],
})
export class UsersModule {
  constructor(private readonly configService: ConfigService) {
    console.log('Databse Port ' + configService.get<number>('PORT'));
    console.log('User Logged IN ' + configService.get<boolean>('LOGGING'));
  }
}
