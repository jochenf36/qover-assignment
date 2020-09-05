import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({ imports: [AuthModule], controllers: [CarController] })
export class CarModule {}
