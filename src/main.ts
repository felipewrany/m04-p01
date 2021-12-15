import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import * as helmet from 'helmet';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Documentação do Projeto 01-Módulo 04')
    .setDescription(
      'Esse é o projeto 01 do Módulo 04 da Blue, um catálogo de filmes que relaciona participantes e gêneros de cada filme.',
    )
    .addTag('Filmes')
    .addTag('Generos')
    .addTag('Participantes')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
