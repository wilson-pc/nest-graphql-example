import { Resolver, Args, Mutation, Query, Info } from '@nestjs/graphql';
import { RoleCreateArgs } from 'src/args/RoleCreateArgs';
import { Role } from 'src/types/role';
import { PrismaService } from 'src/prisma/prisma.service';
import { RoleCreateInput } from 'src/imputs/RoleCreateInput';
import { FindOneRoleArgs } from 'src/args/FindOneRoleArgs';


@Resolver('Role')
export class RoleResolver {
    constructor(private prisma: PrismaService) {
    }

    @Query(returns => [Role], {
        nullable: false,
        description: undefined
    })
    async roles(): Promise<Role[]> {
        return this.prisma.role.findMany();
    }


    @Query(returns => Role, {
        nullable: false,
        description: undefined
    })
    async role(@Args() args: FindOneRoleArgs): Promise<Role> {
        return this.prisma.role.findOne(args);
    }


    @Mutation(returns => Role, {
        nullable: false,
        description: undefined
    })
    async createRole(@Args("data") role: RoleCreateInput): Promise<Role> {

        return this.prisma.role.create({ data: role });
    }
}
