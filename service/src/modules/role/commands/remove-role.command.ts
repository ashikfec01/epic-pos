import { ICommand } from "@nestjs/cqrs";

export class RemoveRoleCommand implements ICommand{
  constructor(public readonly roleId: string) {}
}