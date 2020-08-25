import { CustomScalar } from '@nestjs/graphql';
import { ValueNode } from 'graphql';
export declare class PasswordScalar implements CustomScalar<string, String> {
    description: string;
    parseValue(value: string): string;
    serialize(value: string): string;
    parseLiteral(ast: ValueNode): string;
}
