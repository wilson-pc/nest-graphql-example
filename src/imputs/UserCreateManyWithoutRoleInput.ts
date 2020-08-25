import { InputType, Field } from "@nestjs/graphql";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserCreateWithoutRoleInput } from "./UserCreateWithoutRoleInput";

@InputType({
    isAbstract: true,
    description: undefined,
  })
  export class UserCreateManyWithoutRoleInput {
    @Field(_type => [UserCreateWithoutRoleInput], {
      nullable: true,
      description: undefined
    })
    create?: UserCreateWithoutRoleInput[] | undefined;
  
    @Field(_type => [UserWhereUniqueInput], {
      nullable: true,
      description: undefined
    })
    connect?: UserWhereUniqueInput[] | undefined;
  }
  