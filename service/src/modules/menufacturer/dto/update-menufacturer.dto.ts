import { PartialType } from '@nestjs/mapped-types';
import { CreateMenufacturerDto } from './create-menufacturer.dto';

export class UpdateMenufacturerDto extends PartialType(CreateMenufacturerDto) {}
