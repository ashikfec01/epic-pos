import { PartialType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";
import { Prisma } from "@prisma/client";
import { IsDefined, IsNotEmpty, IsString } from "class-validator";
export class CreateProductDto implements Prisma.ProductCreateInput{
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  sku: string;
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
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  photo: string;
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  unit_price: string;
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  qty: string;
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  default_comission_percent: string;
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  status: string;
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  low_stock_qty: string;
}