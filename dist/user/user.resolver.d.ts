import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'src/types/user';
import { UserCreateInput } from 'src/imputs/UserCreateInput';
import { FindManyUserArgs } from 'src/args/FindManyUserArgs';
import { FindOneUserArgs } from 'src/args/FindOneUserArgs';
export declare class UserResolver {
    private prisma;
    constructor(prisma: PrismaService);
    user(args: FindOneUserArgs, info: any): Promise<User>;
    users(args: FindManyUserArgs, info: any): Promise<User[]>;
    createUser(user: UserCreateInput, info: any): Promise<User>;
}
