import { AggregateRoot } from "@nestjs/cqrs";
import { UserCreatedEvent } from "../events/user-created.event";

export class UserModel extends AggregateRoot {
  constructor(private id: string) {
    super();
    this.autoCommit = true;
  }
  addUser() {
    this.apply(new UserCreatedEvent(this.id));
  }
}