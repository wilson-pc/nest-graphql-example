import { Scalar, CustomScalar } from '@nestjs/graphql';
import { Kind, ValueNode, GraphQLScalarType } from 'graphql';

export const BaseScalar = new GraphQLScalarType({
    name:"Base",
  description : 'Convert string to uud',

  parseValue(value) {
    let buff = new Buffer(value, 'base64');
    let text = buff.toString('ascii');
    return  text// value from the client
  },

  serialize(value: Buffer): Buffer {
    return value // value sent to the client
  },
  parseLiteral(ast): Buffer {
    if (ast.kind === Kind.STRING) {
        let buff = new Buffer(ast.value, 'base64');
      return buff
    }
    return null;
  }
})