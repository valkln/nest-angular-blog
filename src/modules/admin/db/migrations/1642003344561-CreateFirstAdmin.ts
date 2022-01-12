import { Admin } from './../../model/admin.entity';
import { MigrationInterface, QueryRunner, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

export class CreateFirstAdmin1642003344561 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const adminRep: Repository<Admin> =
      queryRunner.connection.getRepository(Admin);
    if (await adminRep.findOne({ where: { login: 'admin' } })) {
      return;
    }
    const admin: Admin = adminRep.create({
      login: 'admin',
      passwordHash: await bcrypt.hash('admin', 10),
      nickName: 'admin',
    });
    await adminRep.insert(admin);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const adminRep: Repository<Admin> =
      queryRunner.connection.getRepository(Admin);
    const admin: Admin = await adminRep.findOne({ where: { login: 'admin' } });
    if (!admin) {
      return;
    }
    await adminRep.remove(admin);
  }
}
