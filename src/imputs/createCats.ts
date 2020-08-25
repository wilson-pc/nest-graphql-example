import { InputType, Field } from '@nestjs/graphql';
import { PasswordScalar } from 'src/scalars/password.scalar';

@InputType()
export class CatDto {
  

    @Field({ nullable: true })
    name?: string;
  
    @Field({ nullable: true })
    lastName?: string;
    
    @Field(type=>PasswordScalar,{ nullable: true })
    password?: string;
}