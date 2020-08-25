import { Scalar, CustomScalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';
const bcrypt = require('bcrypt');
const saltRounds = 10;

@Scalar('Password')
export class PasswordScalar implements CustomScalar<string, String> {
  description = 'Texto hasheado con bcrypt';

  parseValue(value: string): string {
    return value// value from the client
  }

  serialize(value: string): string {
    return value; // value sent to the client
  }

  parseLiteral(ast: ValueNode): string {
    if (ast.kind === Kind.STRING) {
      return bcrypt.hashSync(ast.value, saltRounds); 
    }
    return null;
  }
}