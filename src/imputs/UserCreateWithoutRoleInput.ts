import { InputType, Field } from "@nestjs/graphql";
import { PasswordScalar } from "src/scalars/password.scalar";


@InputType({
    isAbstract: true,
    description: undefined,
  })
  export class UserCreateWithoutRoleInput {
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
  
    @Field(_type => PasswordScalar, {
      nullable: false,
      description: undefined,
    })
    password!: string;
  
  }