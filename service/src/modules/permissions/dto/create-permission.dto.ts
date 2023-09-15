import { PartialType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";
import { Prisma } from "@prisma/client";
import { IsEmpty, IsString } from "class-validator";

export class CreatePermissionDto implements Prisma.PermissionCreateInput {
  @ApiProperty()
  @IsString()
  @IsEmpty()
  feature: string;
  @ApiProperty()
  @IsString()
  @IsEmpty()
  permission_name: string;
}
