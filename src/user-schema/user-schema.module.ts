import { Module } from '@nestjs/common';
import { UserSchemaService } from './user-schema.service';

@Module({
  providers: [UserSchemaService],
})
export class UserSchemaModule {}
