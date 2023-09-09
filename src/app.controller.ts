import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
// import { createConnection } from 'typeorm';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // async getHello(): Promise<User> {
    // return this.appService.createUser('abhishek');
    // const user = await this.appService.createUser('abhishek');
    // return this.appService.updateUser(user.id,"abdvd");
  // }

  // createConnection().then (async connection => {
  //   const user= connection.createQueryBuilder().select('user').from(User,'user').where("user.id = :id", { id:1 }).getOne();
  // })

}
