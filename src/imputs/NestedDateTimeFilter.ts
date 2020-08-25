import { InputType, Field } from "@nestjs/graphql";

@InputType({
    isAbstract: true,
    description: undefined,
  })
  export class NestedDateTimeFilter {
    @Field(_type => Date, {
      nullable: true,
      description: undefined
    })
    equals?: Date | undefined;
  
    @Field(_type => [Date], {
      nullable: true,
      description: undefined
    })
    in?: Date[] | undefined;
  
    @Field(_type => [Date], {
      nullable: true,
      description: undefined
    })
    notIn?: Date[] | undefined;
  
    @Field(_type => Date, {
      nullable: true,
      description: undefined
    })
    lt?: Date | undefined;
  
    @Field(_type => Date, {
      nullable: true,
      description: undefined
    })
    lte?: Date | undefined;
  
    @Field(_type => Date, {
      nullable: true,
      description: undefined
    })
    gt?: Date | undefined;
  
    @Field(_type => Date, {
      nullable: true,
      description: undefined
    })
    gte?: Date | undefined;
  
    @Field(_type => NestedDateTimeFilter, {
      nullable: true,
      description: undefined
    })
    not?: NestedDateTimeFilter | undefined;
  }