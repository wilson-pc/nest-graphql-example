import { Resolver, Query, Int, Args, Mutation, Info } from '@nestjs/graphql';
import { BaseScalar } from 'src/scalars/uud.scalar';
import { writeFileSync } from 'fs';
import { Cat } from 'src/types/cat';
import { CatDto } from 'src/imputs/createCats';

@Resolver('App')
export class AppResolver {
   @Query(returns => String)
   multi(@Args('value', { type: () => BaseScalar }) value: Buffer): string {
      writeFileSync('stack-abuse-logo-out.webp', value);
      console.log(value);
      return "q     ";

    
   }
   @Query(returns => Cat)
   catOne(@Info() info): Cat{
      console.log(info);
      let ddd=info.operation.selectionSet.selections[0].selectionSet.selections.map(field => field.name.value);
      console.log(ddd);
      let cat: Cat = { id: 1, name: "aojo", lastName: "Galo",password:"passwore",country:{id:1,name:"Bolivia",Continent:"Latino"} }
      return cat;
   }
   
   @Mutation(returns => Cat)
   catCreate (@Args('data') cat: CatDto): Cat{
      let cats: Cat = { id: 1, name:cat.name, lastName: cat.lastName,password:cat.password }
      return cats;
   }
}
