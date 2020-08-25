"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const uud_scalar_1 = require("./scalars/uud.scalar");
const fs_1 = require("fs");
const cat_1 = require("./types/cat");
const createCats_1 = require("./imputs/createCats");
let AppResolver = class AppResolver {
    multi(value) {
        fs_1.writeFileSync('stack-abuse-logo-out.webp', value);
        console.log(value);
        return "q     ";
    }
    catOne(info) {
        console.log(info);
        let ddd = info.operation.selectionSet.selections[0].selectionSet.selections.map(field => field.name.value);
        console.log(ddd);
        let cat = { id: 1, name: "aojo", lastName: "Galo", password: "passwore", country: { id: 1, name: "Bolivia", Continent: "Latino" } };
        return cat;
    }
    catCreate(cat) {
        let cats = { id: 1, name: cat.name, lastName: cat.lastName, password: cat.password };
        return cats;
    }
};
__decorate([
    graphql_1.Query(returns => String),
    __param(0, graphql_1.Args('value', { type: () => uud_scalar_1.BaseScalar })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Buffer]),
    __metadata("design:returntype", String)
], AppResolver.prototype, "multi", null);
__decorate([
    graphql_1.Query(returns => cat_1.Cat),
    __param(0, graphql_1.Info()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", cat_1.Cat)
], AppResolver.prototype, "catOne", null);
__decorate([
    graphql_1.Mutation(returns => cat_1.Cat),
    __param(0, graphql_1.Args('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createCats_1.CatDto]),
    __metadata("design:returntype", cat_1.Cat)
], AppResolver.prototype, "catCreate", null);
AppResolver = __decorate([
    graphql_1.Resolver('App')
], AppResolver);
exports.AppResolver = AppResolver;
//# sourceMappingURL=app.resolver.js.map