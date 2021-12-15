/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateFilmeDto {
  @ApiProperty({
    example: 'Piratas do Caribe',
    description: `O nome do filme.`,
  })
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty({
    example: 'piratas.jpg',
    description: `O poster do filme.`,
  })
  @IsNotEmpty()
  @IsString()
  imagem: string;

  @ApiProperty({
    example: '2003',
    description: `O ano que o filme foi lançado, com 4 dígitos. `,
  })
  @IsNotEmpty()
  @IsString()
  data_lancamento: number;

  @ApiProperty({
    example: '135',
    description: `O tempo de duração do filme em minutos`,
  })
  @IsNotEmpty()
  @IsInt()
  tempo_duracao: number;
   
  @IsNotEmpty()
  @IsInt()
  generoid: number;

  @IsNotEmpty()
  @IsInt()
  participanteid: number;
}