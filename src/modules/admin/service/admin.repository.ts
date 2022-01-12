import { Admin } from './../model/admin.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminRepository {
  private readonly admins: Admin[];
  constructor() {
    this.admins = [{ id: 1, login: 'admin', password: 'admin' }];
  }
  async findById(id: number): Promise<Admin> | undefined {
    return this.admins.find((admin) => admin.id === id);
  }
  async findByLogin(login: string): Promise<Admin> | undefined {
    return this.admins.find((admin) => admin.login === login);
  }
}
