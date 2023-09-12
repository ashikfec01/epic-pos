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
import { BrandModule } from './modules/brand/brand.module';
import { SupplierModule } from './modules/supplier/supplier.module';

@Module({
  imports: [
    AppGlobalModule, 
    CqrsModule,
    EventEmitterModule.forRoot(), 
    UserModule,
    RoleModule,
    RackModule,
    CategoryModule,
    BrandModule,
    SupplierModule
  ],
  // controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
