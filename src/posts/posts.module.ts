import { Module } from '@nestjs/common';
import { Posts } from './posts';
import { PostsService } from './posts.service';
import { Post } from './post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsController } from './posts.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  controllers: [PostsController],
  providers: [Posts, PostsService],
})
export class PostsModule {}