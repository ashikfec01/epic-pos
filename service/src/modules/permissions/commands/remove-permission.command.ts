import { ICommand } from "@nestjs/cqrs";

export class RemovePermissionCommand implements ICommand {
  constructor(public readonly permission_id: string ) {}
}