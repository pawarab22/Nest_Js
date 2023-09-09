import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { Question } from './question';
import { QuestionController } from './question.controller';

@Module({
  providers: [QuestionService, Question],
  controllers: [QuestionController]
})
export class QuestionModule {}
