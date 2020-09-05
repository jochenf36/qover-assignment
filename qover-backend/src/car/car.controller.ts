import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('car')
export class CarController {
  @UseGuards(JwtAuthGuard)
  @Get('calculatePrice')
  getProfile(@Request() req) {
    return req.user;
  }
}
