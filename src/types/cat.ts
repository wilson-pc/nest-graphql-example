import { Field, Int, ObjectType, ID } from '@nestjs/graphql';
import { PasswordScalar } from 'src/scalars/password.scalar';
import { Country } from './country';


@ObjectType()
export class Cat {
  @Field(type => ID)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  lastName?: string;
  
  @Field(type=>PasswordScalar,{ nullable: true })
  password?: string;
  
  @Field({ nullable: true })
  country?:Country;

}