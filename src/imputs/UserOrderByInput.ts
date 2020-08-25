import { InputType, Field } from "@nestjs/graphql";
import { SortOrder } from "src/enums/SortOrder";

@InputType({
    isAbstract: true,
    description: undefined,
  })
  export class UserOrderByInput {
   
    @Field(_type => SortOrder, {
      nullable: true,
      description: undefined
    })
    createdAt?: keyof typeof SortOrder | undefined;
  
    @Field(_type => SortOrder, {
      nullable: true,
      description: undefined
    })
    email?: keyof typeof SortOrder | undefined;
  
    @Field(_type => SortOrder, {
      nullable: true,
      description: undefined
    })
    name?: keyof typeof SortOrder | undefined;
  
  }
  