import { InputType, Field } from "@nestjs/graphql";
import { RoleCreateWithoutUsersInput } from "./RoleCreateWithoutUsersInput";
import { RoleWhereUniqueInput } from "./RoleWhereUniqueInput";

@InputType({
    isAbstract: true,
    description: undefined,
  })
  export class RoleCreateOneWithoutUsersInput {
    @Field(_type => RoleCreateWithoutUsersInput, {
      nullable: true,
      description: undefined
    })
    create?: RoleCreateWithoutUsersInput | undefined;
  
    @Field(_type => RoleWhereUniqueInput, {
      nullable: true,
      description: undefined
    })
    connect?: RoleWhereUniqueInput | undefined;
  }
  
  