import { ForbiddenException,Injectable, NotFoundException } from '@nestjs/common';
import { MovieEntity } from './entities/movie.entity';
import { CreateMovieInput } from './dto/create-movie.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MovieService {
  constructor(private prisma: PrismaService) {}


  async create(input: CreateMovieInput): Promise<MovieEntity> {
    return await this.prisma.movie.create({
        data:{
          ...input
        }
    })
  }

  async findAll(): Promise<MovieEntity[]> {
    let foundMovies = await this.prisma.movie.findMany();
    return foundMovies;
  }

  async findOne(id: number): Promise<MovieEntity> {
    let foundMovie = await this.prisma.movie.findFirst({ 
      where: { id: Number(id) }
    })
    
    if (!foundMovie) {
      throw new NotFoundException('Movie not found');
    }

    return foundMovie;

  }


  async findFilter(searchTerm: string): Promise<MovieEntity[]> {
    let foundMovie = await this.prisma.movie.findMany({ 
      where: {
        OR: [
          {
            title: searchTerm

        },
        {
          genre: searchTerm 
      },

        ],
        
      },

   })
    
    if (!foundMovie) {
      throw new NotFoundException('Movie not found');
    }

    return foundMovie;
  }

  // async findFilter(genre: string, title: string): Promise<MovieEntity[]> {
  //   let foundMovie = await this.prisma.movie.findMany({ 
  //     where: { genre : genre, title: title}
    
        
  //  })
    
  //   if (!foundMovie) {
  //     throw new NotFoundException('Movie not found');
  //   }

  //   return foundMovie;
  // }



  // async delete(id: string): Promise<MovieEntity> {
  //   return await this.prisma.movie.findByIdAndRemove(id);
  // }

  // async update(id: string, item: MovieEntity): Promise<MovieEntity> {
  //   return await this.prisma.movie.findByIdAndUpdate(id, item, { new: true });
  // }
  }

