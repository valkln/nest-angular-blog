import { Admin } from './../../admin/model/admin.entity';
import { Connection, Repository } from 'typeorm';
import { Controller, Post, Request, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../service/auth.service';

@Controller('auth')
export class AuthController {
  private adminRepo: Repository<Admin>;
  constructor(private auth: AuthService, private connection: Connection) {
    this.adminRepo = this.connection.getRepository(Admin);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.auth.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('refresh')
  async refresh(@Request() req) {
    const admin = await this.adminRepo.findOne(req.user.id);
    return this.auth.login(admin);
  }
}
