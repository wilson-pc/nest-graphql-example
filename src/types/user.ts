import { ObjectType, Field } from "@nestjs/graphql";
import { Role } from "./role";

@ObjectType({
    isAbstract: true,
    description: undefined,
  })
  export class User {
    @Field(_type => String, {
      nullable: false,
      description: undefined,
    })
    id!: string;
  
    @Field(_type => Date, {
      nullable: false,
      description: undefined,
    })
    createdAt!: Date;
  
    @Field(_type => String, {
      nullable: false,
      description: undefined,
    })
    email!: string;
  
    @Field(_type => String, {
      nullable: false,
      description: undefined,
    })
    name!: string;
  
    @Field({ nullable: true })
    role?: Role | undefined;
  
    @Field(_type => String, {
      nullable: true,
      description: undefined,
    })
    roleId?: string | undefined;
  
    @Field(_type => String, {
      nullable: false,
      description: undefined,
    })
    password!: string;
  }