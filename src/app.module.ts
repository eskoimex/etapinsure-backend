import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MovieController } from './movie/movie.controller';
import { MovieService } from './movie/movie.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({ 
       isGlobal: true
    }), 
    PrismaModule
   ],
   controllers: [MovieController],
   providers: [MovieService],
})

export class AppModule {}
