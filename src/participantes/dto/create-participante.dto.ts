/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateParticipanteDto {
  @ApiProperty({
    example: 'Steven Spielberg',
    description: `O nome do participante do filme`,
  })
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty({
    example: 'spielberg.jpg',
    description: `Uma imagem do integrante`,
  })
  @IsNotEmpty()
  @IsString()
  imagem: string;

  @ApiProperty({
    example: '05/03/1974',
    description: `A data de nascimento do integrante`,
  })
  @IsNotEmpty()
  @IsString()
  data_nascimento: string;

  @ApiProperty({
    example: 'Diretor',
    description: `A função que o integrante desenpenhou no filme`,
  })
  @IsNotEmpty()
  @IsString()
  ator_staff: string;
}
