import { AdminRepository } from './service/admin.repository';
import { Module } from '@nestjs/common';

@Module({
  providers: [AdminRepository],
  exports: [AdminRepository],
})
export class AdminModule {}
