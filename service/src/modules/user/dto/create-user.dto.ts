import { ApiProperty } from "@nestjs/swagger";
import { Prisma } from "@prisma/client";
import {
  ArrayNotEmpty,
  IsArray,
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
export class CreateUserDto implements Prisma.UserCreateInput  {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  username: string;
  @ApiProperty()
  @IsString()
  password?: string;

  password_salt: string;
  password_hash_key: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @IsEmail({
    allow_utf8_local_part: false,
    allow_ip_domain: false
  })
  email: string;
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber()
  phone: string;
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  name: string;
}
