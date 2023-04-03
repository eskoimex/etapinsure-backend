import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

import { Movie } from '@prisma/client';

export class MovieEntity implements Movie {
  
  @IsNumber()
  id: number;

  @IsString()
  title: string;

  @IsString()
  genre: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  createdAt: Date;

  @IsString()
  updatedAt: Date;
}