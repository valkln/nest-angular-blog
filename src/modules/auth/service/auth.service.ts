import { Admin } from '../../admin/model/admin.entity';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Connection, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private adminRepo: Repository<Admin>;
  constructor(private jwtService: JwtService, private connection: Connection) {
    this.adminRepo = this.connection.getRepository(Admin);
  }
  async validateAdmin(login: string, pass: string): Promise<Admin> {
    const admin: Admin = await this.adminRepo.findOne({ where: { login } });
    if (admin && (await bcrypt.compare(pass, admin.passwordHash))) {
      const { passwordHash, ...secureAdmin } = admin;
      return secureAdmin;
    }
    return null;
  }
  async login(admin: Admin) {
    const payload = { id: admin.id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
