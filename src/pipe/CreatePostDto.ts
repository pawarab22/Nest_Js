import { IsEmail, IsString, IsInt } from 'class-validator';
export class CreatePostDto {
  
  @IsInt()
  Id: Number;
  
  @IsString()
  name: string;
  
  @IsEmail()
  email: string; 

  //   @IsNotEmpty()
  //   password: string;
}
