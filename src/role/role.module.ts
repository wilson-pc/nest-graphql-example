import { Module } from '@nestjs/common';
import { RoleResolver } from './role/role.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  providers: [RoleResolver]
})
export class RoleModule {
  constructor(){

  }
}
