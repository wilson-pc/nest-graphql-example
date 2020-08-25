"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseScalar = void 0;
const graphql_1 = require("graphql");
exports.BaseScalar = new graphql_1.GraphQLScalarType({
    name: "Base",
    description: 'Convert string to uud',
    parseValue(value) {
        let buff = new Buffer(value, 'base64');
        let text = buff.toString('ascii');
        return text;
    },
    serialize(value) {
        return value;
    },
    parseLiteral(ast) {
        if (ast.kind === graphql_1.Kind.STRING) {
            let buff = new Buffer(ast.value, 'base64');
            return buff;
        }
        return null;
    }
});
//# sourceMappingURL=uud.scalar.js.map