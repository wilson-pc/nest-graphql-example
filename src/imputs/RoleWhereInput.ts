import { InputType, Field } from "@nestjs/graphql";
import { StringFilter } from "./StringFilter";
import { UserListRelationFilter } from "./UserListRelationFilter";

@InputType({
    isAbstract: true,
    description: undefined,
  })
  export class RoleWhereInput {
    @Field(_type => [RoleWhereInput], {
      nullable: true,
      description: undefined
    })
    AND?: RoleWhereInput[] | undefined;
  
    @Field(_type => [RoleWhereInput], {
      nullable: true,
      description: undefined
    })
    OR?: RoleWhereInput[] | undefined;
  
    @Field(_type => [RoleWhereInput], {
      nullable: true,
      description: undefined
    })
    NOT?: RoleWhereInput[] | undefined;
  
    @Field(_type => StringFilter, {
      nullable: true,
      description: undefined
    })
    id?: StringFilter | undefined;
  
    @Field(_type => StringFilter, {
      nullable: true,
      description: undefined
    })
    name?: StringFilter | undefined;
  
    @Field(_type => UserListRelationFilter, {
      nullable: true,
      description: undefined
    })
    users?: UserListRelationFilter | undefined;
  }
  