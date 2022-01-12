import { AuthService } from './auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private auth: AuthService) {
    super({
      usernameField: 'login',
    });
  }
  async validate(login: string, password: string) {
    const admin = await this.auth.validateAdmin(login, password);
    if (!admin) {
      throw new UnauthorizedException();
    }
    return admin;
  }
}
