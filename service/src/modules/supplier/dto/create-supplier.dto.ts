import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class CreateSupplierDto implements Prisma.SupplierCreateInput {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  address: string;
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  phone: string;
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  contact_person_name: string;
}
