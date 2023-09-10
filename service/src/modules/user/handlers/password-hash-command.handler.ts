import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { PasswordHashCommand } from "../commands/password-hash.command";
import { Injectable } from "@nestjs/common";
import { EventEmitter2 } from "@nestjs/event-emitter";
import * as bcrypt from 'bcrypt';
@Injectable()
@CommandHandler(PasswordHashCommand)
export class PasswordHashCommnadHandler implements ICommandHandler<PasswordHashCommand> {
  constructor(
    private readonly eventEmitter: EventEmitter2,
  ) { } 
  async execute(command: PasswordHashCommand): Promise<any> {
    console.table(command.password)
    const saltOrRounds = 10;
    const salt = await bcrypt.genSalt(saltOrRounds);
    const password = command.password;
    const hash = await bcrypt.hash(password, salt);
    const response = {
      password_salt: salt,
      password_hash_key: hash
    }
    console.table(response)
    return response;
  }
}
