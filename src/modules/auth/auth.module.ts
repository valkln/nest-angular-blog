import { AuthController } from './controller/auth.controller';
import { LocalStrategy } from './service/local.strategy';
import { AdminModule } from './../admin/admin.module';
import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
  imports: [AdminModule, PassportModule],
})
export class AuthModule {}
