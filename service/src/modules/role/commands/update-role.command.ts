import { ICommand } from "@nestjs/cqrs";
import { UpdateRoleDto } from "../dto/update-role.dto";

export class UpdateRoleCommand implements ICommand {
  constructor(public readonly roleId:string,public readonly  role: UpdateRoleDto){}
}