import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UserEntityModule } from './user.entity/user.entity.module';
import { UsersHttpModuleModule } from './users-http.module/users-http.module.module';
import { PhotoModule } from './photo/photo.module';
import { Photo } from './photo.entity/photo.entity';
import { UserSchemaModule } from './user-schema/user-schema.module';
import { User } from './user.entity/user.entity';
import { PostsModule } from './posts/posts.module';
import { ProfileModule } from './profile/profile.module';
import { Profile } from './Profile/profile.entity';
import { CatagoryModule } from './catagory/catagory.module';
import { QuestionModule } from './question/question.module';
import { Post } from './posts/post.entity';
@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'postgres',
      entities: [User, Photo, Profile, Post],
      synchronize: false,
      logging: true,
    }),
    TypeOrmModule.forFeature([User]),
    UserEntityModule,
    UsersHttpModuleModule,
    PhotoModule,
    UserSchemaModule,
    PostsModule,
    ProfileModule,
    CatagoryModule,
    QuestionModule,
  ],
  controllers: [AppController],
  providers: [AppService, Photo],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
