import { InputType, Field } from "@nestjs/graphql";


@InputType({
    isAbstract: true,
    description: undefined,
  })
  export class RoleWhereUniqueInput {
    @Field(_type => String, {
      nullable: true,
      description: undefined
    })
    id?: string | undefined;
  
    @Field(_type => String, {
      nullable: true,
      description: undefined
    })
    name?: string | undefined;
  }
  