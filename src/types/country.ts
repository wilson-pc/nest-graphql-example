import { Field, Int, ObjectType, ID } from '@nestjs/graphql';
import { PasswordScalar } from 'src/scalars/password.scalar';


@ObjectType()
export class Country {
  @Field(type => ID)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  Continent?: string;
  

}