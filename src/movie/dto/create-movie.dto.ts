import {
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';


export class CreateMovieInput {

  @IsString()
  title: string;

  @IsString()
  genre: string;

  @IsString()
  @IsOptional()
  description: string;

}