import { Injectable } from '@nestjs/common';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Filme } from '@prisma/client';
import {CreateFilmeDto} from './dto/create-filme.dto';

@Injectable()
export class FilmesService {
  constructor(private prisma:PrismaService) {}

  async create(CreateFilmeDto:CreateFilmeDto): Promise<Filme> {
    return await this.prisma.filme.create({
      data:{ ...CreateFilmeDto}
    });
  }

  async findAll(): Promise<Filme[]> {
    return await this.prisma.filme.findMany();
  }

  async findOne(id: number): Promise<Filme> {
    return await this.prisma.filme.findUnique({ where: {id}});
  }

  async update(id: number, data: UpdateFilmeDto): Promise<Filme>  {
    return await this.prisma.filme.update({ data, where: {id}});
  }

  async remove(id: number): Promise<Filme>  {
    return await this.prisma.filme.delete({ where: {id}});
  }
}
