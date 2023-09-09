import { Controller } from '@nestjs/common';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  constructor(private questionService: QuestionService) {}

  // @Post()
  // const questions = await dataSource
  // .getRepository(Question)
  // .createQueryBuilder("question")
  // .leftJoinAndSelect("question.categories", "category")
  // .getMany()
}
