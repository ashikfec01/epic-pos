import { Injectable, Logger, Scope } from "@nestjs/common";
import { CommandBus, EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { UserCreatedEvent } from "./user-created.event";
import { OnEvent } from "@nestjs/event-emitter";
import { UserCreateRequestEvent } from "./user-create-request.event";
import { GetUserQueryEvent } from "./get-user-query.event";
import { PasswordHashCommand } from "../commands/password-hash.command";
import { CreateUserCommand } from "../commands/create-user.command";
import { CreateUserDto } from "../dto/create-user.dto";

@Injectable()
export class UserEventsHander {

  constructor(
    private readonly commandBus: CommandBus,
  ){}

  @OnEvent('user.created')
  handleUserCreateEvent(event: UserCreatedEvent) {
    console.table(event)
  }
  @OnEvent('user.create_request',{async: true})
  handleUserCreateRequest(event: UserCreateRequestEvent){
    console.table({'create_request':event})
  }

  @OnEvent('user.data')
  handleUserData(event: GetUserQueryEvent) {
    console.table({success: event})
  }
  @OnEvent('user.not_found',{async: true})
  async handleUserNotFound(event: GetUserQueryEvent) {
    console.log(event.response.user.password)
    const secrets= await this.commandBus.execute(new PasswordHashCommand(event.response.user.password));
    const data = this.signupPayload(event.response.user, secrets.password_salt, secrets.password_hash_key)
    const response = await this.commandBus.execute(new CreateUserCommand(data));
    console.table(response)
  }
  @OnEvent('user.error')
  handleUserQueryError(event: GetUserQueryEvent) {
    console.table({'error': event})
  }

  signupPayload (createUser, salt: string, hash: string){
    return {
      username: createUser.username,
      password_salt: salt,
      password_hash_key: hash,
      email: createUser.email,
      phone: createUser.phone,
      name: createUser.name
    }
  }

}