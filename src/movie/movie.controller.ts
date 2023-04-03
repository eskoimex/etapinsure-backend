import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { CreateMovieInput } from './dto/create-movie.dto';
import { MovieService } from './movie.service';
import { MovieEntity } from './entities/movie.entity';

@Controller('api/v1/')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post('add_movie')
  create(@Body() CreateMovieInput: CreateMovieInput): Promise<MovieEntity> {
    return this.movieService.create(CreateMovieInput);
  }

  @Get('movies')
  findAll(): Promise<MovieEntity[]> {
    return this.movieService.findAll();
  }

  @Get('movie/:id')
  findOne(@Param('id') id): Promise<MovieEntity> {
    return this.movieService.findOne(id);
  }


  @Get('movie')
  findFilter(@Query('searchTerm') searchTerm ):Promise<MovieEntity[]> {
    return this.movieService.findFilter(searchTerm);
  }


}
