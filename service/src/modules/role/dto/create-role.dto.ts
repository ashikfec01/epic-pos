import { ApiProperty } from "@nestjs/swagger";
import { Prisma } from "@prisma/client";

export class CreateRoleDto implements Prisma.RoleCreateInput {
  @ApiProperty()
  name?: string;
  @ApiProperty()
  description?: string;
  @ApiProperty()
  role: string;
}
