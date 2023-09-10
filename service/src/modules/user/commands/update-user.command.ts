import { PartialType } from "@nestjs/swagger";
import { CreateUserCommand } from "./create-user.command";

export class UpdateUserCommand extends PartialType(CreateUserCommand) { }