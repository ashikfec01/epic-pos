import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './infrastructure/database/database.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { UserModule } from './modules/user/user.module';
import { RoleModule } from './modules/role/role.module';
import { RackModule } from './modules/rack/rack.module';
import { AppGlobalModule } from './app-global.module';
import { CategoryModule } from './modules/category/category.module';

@Module({
  imports: [
    AppGlobalModule, 
    CqrsModule,
    EventEmitterModule.forRoot(), 
    UserModule,
    RoleModule,
    RackModule,
    CategoryModule
  ],
  // controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
