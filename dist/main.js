"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const body_parser_1 = require("body-parser");
const express_1 = require("express");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.useStaticAssets(path_1.join(__dirname, '..', 'public'));
    app.setBaseViewsDir(path_1.join(__dirname, '..', 'views'));
    app.setViewEngine('hbs');
    app.use(body_parser_1.json({ limit: '50mb' }));
    app.use(express_1.urlencoded({ limit: '50mb' }));
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map