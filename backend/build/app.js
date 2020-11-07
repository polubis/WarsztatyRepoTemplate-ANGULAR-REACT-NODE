"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
class App {
    createApp() {
        const app = express_1.default();
        app.set("port", process.env.PORT || 8080);
        app.use(body_parser_1.default.json());
        app.use(body_parser_1.default.urlencoded({ extended: true }));
        app.use(cors_1.default({
            origin: process.env.origin || "http://localhost:4200",
        }));
        // app.use("/api/controllerpath", exampleController);
        // ADD ROUTING HERE
        app.use((error, req, res, next) => {
            // ADD YOUR CUSTOM MIDDLEWARE
        });
        return app;
    }
    createServer(app) {
        return app.listen(app.get("port"), async () => {
            console.log(`Service running at port ${app.get("port")} in ${app.get("env")} mode`);
            console.log("Date: ", new Date().toDateString());
        });
    }
    async start() {
        const app = this.createApp();
        const server = this.createServer(app);
        return Promise.resolve(server);
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map