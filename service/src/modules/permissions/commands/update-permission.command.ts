import { ICommand } from "@nestjs/cqrs";
import { UpdatePermissionDto } from "../dto/update-permission.dto";

export class UpdatePermissionCommand implements ICommand {
  constructor(public readonly permission_id: string, public readonly dto: UpdatePermissionDto ) {}
}