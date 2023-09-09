import { Module } from '@nestjs/common';
import { CatagoryService } from './catagory.service';
import { Catagory } from './catagory';
import { CatagoryController } from './catagory.controller';

@Module({
  providers: [CatagoryService, Catagory],
  controllers: [CatagoryController]
})
export class CatagoryModule {}
