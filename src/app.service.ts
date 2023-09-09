import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  getAll(): Promise<User[]> {
    return this.userRepository.find(); // select * from User;
  }

  // users = await DataSource.getRepository(User).createQueryBuilder().select('user.id', 'id')
  //   .addSelect('user.firstname')
  //   .getMany();
  //     let repo = this.userRepository;

  //   firstUser = await this.repo(User)
  //     .createQueryBuilder('user')
  //     .where('user.id = :id', { id: 1 })
  //     .getOne();
  // console.log(firstUser);

  // const user = await this.userRepository(User)
  //   .createQueryBuilder('user')
  //   .where('user.id = :id', { id: 1 })
  //   .getOne();

  // async getOneById(id: number): Promise<User> {
  //   try {
  //     const user = await this.userRepository.findOneOrFail(id);
  //     console.log(user);
  //     return user;
  //   } catch (err) {
  //     //handle error;
  //     throw err;
  //   }
  // }

  createUser(firstName: string): Promise<User> {
    const newUser = this.userRepository.create({ firstName }); // const newUser = new User(); newUser.name=name;
    return this.userRepository.save(newUser);
  }

  // async updateUser(id: number, firstName: string): Promise<User> {
  //   const user = await this.getOneById(id);
  //   user.firstName = firstName;
  //   return this.userRepository.save(user);
  // }

  // async deleteUser(id: number): Promise<User> {
  //   const newUser = await this.getOneById(id);
  //   return this.userRepository.remove(newUser);
  // }

  // customQuery() any {
  //   return this.userRepository.createQueryBuilder('user').select('firstname');
  // }

  getHello(): string {
    return 'Hello World!';
  }
}
