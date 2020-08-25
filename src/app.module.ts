import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { BaseScalar } from './scalars/uud.scalar';
import { PasswordScalar } from './scalars/password.scalar';
import { PrismaModule } from './prisma/prisma.module';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { AppResolver } from './app.resolver';


@Module({
  imports: [  GraphQLModule.forRoot({
    debug: true,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    playground: true,
    buildSchemaOptions:{
      scalarsMap: [{ type: String, scalar: BaseScalar }],
    }
  }), PrismaModule, RoleModule, UserModule],
  controllers: [AppController],
  providers: [AppService,PasswordScalar, AppResolver],
})
export class AppModule {}
