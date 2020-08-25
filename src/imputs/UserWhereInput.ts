import { Field, InputType } from "@nestjs/graphql";
import { StringNullableFilter } from "./StringNullableFilter";
import { StringFilter } from "./StringFilter";
import { DateTimeFilter } from "./DateTimeFilter";
import { RoleWhereInput } from "./RoleWhereInput";

@InputType({
    isAbstract: true,
    description: undefined,
  })
  export class UserWhereInput {
    @Field(_type => [UserWhereInput], {
      nullable: true,
      description: undefined
    })
    AND?: UserWhereInput[] | undefined;
  
    @Field(_type => [UserWhereInput], {
      nullable: true,
      description: undefined
    })
    OR?: UserWhereInput[] | undefined;
  
    @Field(_type => [UserWhereInput], {
      nullable: true,
      description: undefined
    })
    NOT?: UserWhereInput[] | undefined;
  
    @Field(_type => StringFilter, {
      nullable: true,
      description: undefined
    })
    id?: StringFilter | undefined;
  
    @Field(_type => DateTimeFilter, {
      nullable: true,
      description: undefined
    })
    createdAt?: DateTimeFilter | undefined;
  
    @Field(_type => StringFilter, {
      nullable: true,
      description: undefined
    })
    email?: StringFilter | undefined;
  
    @Field(_type => StringFilter, {
      nullable: true,
      description: undefined
    })
    name?: StringFilter | undefined;
  
    @Field(_type => RoleWhereInput, {
      nullable: true,
      description: undefined
    })
    role?: RoleWhereInput | undefined;
  
    @Field(_type => StringNullableFilter, {
      nullable: true,
      description: undefined
    })
    roleId?: StringNullableFilter | undefined;
  }
  