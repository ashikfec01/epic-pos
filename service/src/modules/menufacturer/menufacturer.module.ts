import { Module } from '@nestjs/common';
import { MenufacturerService } from './menufacturer.service';
import { MenufacturerController } from './menufacturer.controller';

@Module({
  controllers: [MenufacturerController],
  providers: [MenufacturerService],
})
export class MenufacturerModule {}
