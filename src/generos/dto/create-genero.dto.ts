/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGeneroDto {
  @ApiProperty({
    example: 'Terror',
    description: `O nome do gênero de filme`,
  })
    @IsNotEmpty()
    @IsString()
    nome: string;
  }
