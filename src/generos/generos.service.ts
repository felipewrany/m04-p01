import { Injectable } from '@nestjs/common';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Genero, Prisma } from '@prisma/client';

@Injectable()
export class GenerosService {
  constructor(private prisma:PrismaService) {}

  async create(data: Prisma.GeneroCreateInput): Promise<Genero> {
    return await this.prisma.genero.create({ data });
  }

  async findAll(): Promise<Genero[]> {
    return await this.prisma.genero.findMany();
  }

  async findOne(id: number): Promise<Genero> {
    return await this.prisma.genero.findUnique({ where: {id}});
  }

  async update(id: number, data: UpdateGeneroDto): Promise<Genero>  {
    return await this.prisma.genero.update({ data, where: {id}});
  }

  async remove(id: number): Promise<Genero>  {
    return await this.prisma.genero.delete({ where: {id}});
  }
}