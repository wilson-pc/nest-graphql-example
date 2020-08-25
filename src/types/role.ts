import { ObjectType, Field } from "@nestjs/graphql";
import { User } from "./user";

@ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Role {
  @Field(type => String)
  id: string;

  @Field(type => String,{ nullable: true })
  name?: string;


  users?: User[] | undefined;
}