import { CarsModule } from './cars/cars.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [CarsModule],
})
export class ComponentsModule { }