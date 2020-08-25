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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const NestedStringFilter_1 = require("./NestedStringFilter");
let StringFilter = class StringFilter {
};
__decorate([
    graphql_1.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], StringFilter.prototype, "equals", void 0);
__decorate([
    graphql_1.Field(_type => [String], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], StringFilter.prototype, "in", void 0);
__decorate([
    graphql_1.Field(_type => [String], {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", Array)
], StringFilter.prototype, "notIn", void 0);
__decorate([
    graphql_1.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], StringFilter.prototype, "lt", void 0);
__decorate([
    graphql_1.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], StringFilter.prototype, "lte", void 0);
__decorate([
    graphql_1.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], StringFilter.prototype, "gt", void 0);
__decorate([
    graphql_1.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], StringFilter.prototype, "gte", void 0);
__decorate([
    graphql_1.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], StringFilter.prototype, "contains", void 0);
__decorate([
    graphql_1.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], StringFilter.prototype, "startsWith", void 0);
__decorate([
    graphql_1.Field(_type => String, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", String)
], StringFilter.prototype, "endsWith", void 0);
__decorate([
    graphql_1.Field(_type => NestedStringFilter_1.NestedStringFilter, {
        nullable: true,
        description: undefined
    }),
    __metadata("design:type", NestedStringFilter_1.NestedStringFilter)
], StringFilter.prototype, "not", void 0);
StringFilter = __decorate([
    graphql_1.InputType({
        isAbstract: true,
        description: undefined,
    })
], StringFilter);
exports.StringFilter = StringFilter;
//# sourceMappingURL=StringFilter.js.map