
import { Field, Int, ObjectType, ID, InputType } from '@nestjs/graphql';
import { UserCreateManyWithoutRoleInput } from './UserCreateManyWithoutRoleInput';

@InputType({
    isAbstract: true,
    description: undefined,
  })
  export class RoleCreateInput {
    @Field(_type => String, {
      nullable: true,
      description: undefined
    })
    id?: string | undefined;
  
    @Field(_type => String, {
      nullable: false,
      description: undefined
    })
    name!: string;
  
    @Field(_type => UserCreateManyWithoutRoleInput, {
      nullable: true,
      description: undefined
    })
    users?: UserCreateManyWithoutRoleInput | undefined;
  }
  