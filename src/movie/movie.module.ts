
import { Global, Module } from '@nestjs/common';
import { MovieService } from './movie.service';

@Global()
@Module({
  providers: [MovieService],
  exports: [MovieService],
})
export class MovieModule {}