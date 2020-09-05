import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CarModule } from './car/car.module';

@Module({
  imports: [AuthModule, UsersModule, CarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
