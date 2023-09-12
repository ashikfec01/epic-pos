import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto implements Prisma.CategoryCreateInput {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  description: string;
}