import { InputType, Field } from "@nestjs/graphql";
import { UserWhereInput } from "./UserWhereInput";

@InputType({
    isAbstract: true,
    description: undefined,
  })
  export class UserListRelationFilter {
    @Field(_type => UserWhereInput, {
      nullable: true,
      description: undefined
    })
    every?: UserWhereInput | undefined;
  
    @Field(_type => UserWhereInput, {
      nullable: true,
      description: undefined
    })
    some?: UserWhereInput | undefined;
  
    @Field(_type => UserWhereInput, {
      nullable: true,
      description: undefined
    })
    none?: UserWhereInput | undefined;
  }
  