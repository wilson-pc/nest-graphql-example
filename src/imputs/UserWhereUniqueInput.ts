import { InputType, Field } from "@nestjs/graphql";

@InputType({
    isAbstract: true,
    description: undefined,
  })
  export class UserWhereUniqueInput {
    @Field(_type => String, {
      nullable: true,
      description: undefined
    })
    id?: string | undefined;
  
    @Field(_type => String, {
      nullable: true,
      description: undefined
    })
    email?: string | undefined;
  }