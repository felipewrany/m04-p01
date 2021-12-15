import { Module } from '@nestjs/common';
import { GenerosService } from './generos.service';
import { GeneroController } from './generos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [GeneroController],
  providers: [GenerosService],
})
export class GenerosModule {}
