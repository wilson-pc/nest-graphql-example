import { Resolver, Query, Mutation, Args,Info } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'src/types/user';
import { UserCreateInput } from 'src/imputs/UserCreateInput';
import { FindManyUserArgs } from 'src/args/FindManyUserArgs';
import { FindOneUserArgs } from 'src/args/FindOneUserArgs';

@Resolver('User')
export class UserResolver {
    constructor(private prisma: PrismaService) {
    }
    @Query(returns => User, {
        nullable: false,
        description: undefined
    })
    async user(@Args() args: FindOneUserArgs,@Info() info): Promise<User> {
        let fields =info.operation.selectionSet.selections[0].selectionSet.selections.map(field => field.name.value);
        if(fields.includes("role")){
            let query:any=args;
            query.include={ role: true } as any;
         return await this.prisma.user.findOne(query) as any;
        }else{
         return await this.prisma.user.findOne(args);
        }
    }

    @Query(returns => [User], {
        nullable: false,
        description: undefined
    })
    async users(@Args() args: FindManyUserArgs,@Info() info): Promise<User[]> {
        let fields =info.operation.selectionSet.selections[0].selectionSet.selections.map(field => field.name.value);
       if(fields.includes("role")){
           let query:any=args;
           query.include={ role: true } as any;
        return await this.prisma.user.findMany(query) as any;
       }else{
        return await this.prisma.user.findMany(args);
       }
    }

    @Mutation(returns => User, {
        nullable: false,
        description: undefined
    })
    async createUser(@Args("data") user: UserCreateInput,@Info() info): Promise<User> {
        let fields =info.operation.selectionSet.selections[0].selectionSet.selections.map(field => field.name.value);
        if(fields.includes("role")){
            return this.prisma.user.create({ data: user,include:{role:true} });
        }else{
            return this.prisma.user.create({ data: user });
        }

        
    }
}
