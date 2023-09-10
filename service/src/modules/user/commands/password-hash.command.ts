import { ICommand } from "@nestjs/cqrs";

export class PasswordHashCommand implements ICommand {
  constructor(public readonly password: string){}
}