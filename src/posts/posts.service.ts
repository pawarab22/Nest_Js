import { Injectable } from '@nestjs/common';
import { DataSource, EntityManager, Repository } from 'typeorm';
import {
  InjectDataSource,
  InjectEntityManager,
  InjectRepository,
} from '@nestjs/typeorm';
import { Post } from './post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
    // @InjectRepository(Post) private getRepository: Repository<Post>,
    @InjectEntityManager() private postManager: EntityManager,
    @InjectDataSource() private dataSource: DataSource,
  ) {}

  //   async
  create(createPostDto: CreatePostDto) {
    // const Insert =
    this.dataSource
      .createQueryBuilder()
      .insert()
      .into(Post)
      .values([{ title: 'abhi' }, { title: 'gya' }])
      .execute();
    // return Insert;

    const newPost = this.postRepository.create(createPostDto);
    return this.postRepository.save(newPost);
  }

  async findAll() {
    await this.dataSource.createQueryBuilder(Post, 'post').getMany();

    // const get = await this.dataSource.
    // .getRepository(Post).
    // createQueryBuilder('post')
    //   .where('post.title = :title', { title: 'goblin' })
    //   .andWhere('post.title = :title', { title: 'abhi' });
    // return get;

    // const count = await this.dataSource
    //   .createQueryBuilder(Post, 'post')
    //   .where('post.id = :id', { id: 1 })
    //   .getCount();
    // return count;

    const posts = this.postRepository.find();
    return posts;
  }
  //   async findAll(){
  //     const count = this.dataSource
  //     .getRepository(Post)
  //     .createQueryBuilder("post")
  //     .where(post.id= '1')
  //     .getCount();
  //     return count;
  //   }

  async findOne(id: number) {
    // const user = await this.dataSource
    //   .createQueryBuilder()
    //   .select('post')
    //   .from(Post, 'post')
    //   .where('post.id = :id', { id: 1 })
    //   .getOne();
    // return user;

    // 1

    const postWithRepository = await this.postRepository.findOneBy({ id });

    // const updat = await this.dataSource
    //   .createQueryBuilder()
    //   .update(Post)
    //   .set({ title: 'xyz' })
    //   .where('id = :id', { id: 4 })
    //   .execute();
    // return updat;

    // 2
    const postWithRepositoryQueryBuilder = await this.postRepository
      .createQueryBuilder('post')
      .where('post.id= :postId', { postId: id })
      .getOne();

    // 3
    const postWithEntityManager = await this.postManager
      .createQueryBuilder(Post, 'post')
      .where('post.id= :postId', { postId: id })
      .getOne();

    // 4
    const postWithDatasource = await this.dataSource
      .createQueryBuilder()
      .select('post')
      .from(Post, 'post')
      .where('post.id= :postId', { postId: id })
      .getOne();

    // const insert = await this.dataSource
    //   .createQueryBuilder()
    //   .insert()
    //   .into(Post)
    //   .values([{ title: 'bool' }])
    //   .execute();

    return {
      postWithRepository,
      postWithRepositoryQueryBuilder,
      postWithEntityManager,
      postWithDatasource,
      //   insert,
    };
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.postRepository.findOneBy({ id });
    post.title = updatePostDto.title;
    const updatedPost = this.postRepository.save(post);
    return updatedPost;
  }

  async remove(id: number) {
    // const del = await this.dataSource
    //   .createQueryBuilder()
    //   .delete()
    //   .from(Post)
    //   .where('id = :id', { id: 8 })
    //   .execute();

    // return del;

    const post = await this.postRepository.findOneBy({ id });
    const removedPost = this.postRepository.remove(post);
    return removedPost;
  }
}
