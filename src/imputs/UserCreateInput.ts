import { InputType, Field } from "@nestjs/graphql";
import { PasswordScalar } from "src/scalars/password.scalar";
import { RoleCreateOneWithoutUsersInput } from "./RoleCreateOneWithoutUsersInput";

@InputType({
    isAbstract: true,
    description: undefined,
  })
  export class UserCreateInput {
    @Field(_type => String, {
      nullable: true,
      description: undefined
    })
    id?: string | undefined;
  
    @Field(_type => Date, {
      nullable: true,
      description: undefined
    })
    createdAt?: Date | undefined;
  
    @Field(_type => String, {
      nullable: false,
      description: undefined
    })
    email!: string;
  
    @Field(_type => String, {
      nullable: false,
      description: undefined
    })
    name!: string;
  
  
    @Field(_type => RoleCreateOneWithoutUsersInput, {
      nullable: true,
      description: undefined
    })
    role?: RoleCreateOneWithoutUsersInput | undefined;
  
    @Field(_type => PasswordScalar, {
      nullable: false,
      description: undefined,
    })
    password!: string;
  }
  