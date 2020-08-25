import { Role } from 'src/types/role';
import { PrismaService } from 'src/prisma/prisma.service';
import { RoleCreateInput } from 'src/imputs/RoleCreateInput';
import { FindOneRoleArgs } from 'src/args/FindOneRoleArgs';
export declare class RoleResolver {
    private prisma;
    constructor(prisma: PrismaService);
    roles(): Promise<Role[]>;
    role(args: FindOneRoleArgs): Promise<Role>;
    createRole(role: RoleCreateInput): Promise<Role>;
}
