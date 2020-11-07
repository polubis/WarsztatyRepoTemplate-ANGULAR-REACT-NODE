"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
dotenv_1.default.config();
process.on("uncaughtException", (err) => {
    console.error(`
  --------------------
  Unhandled Exception:
  ${err.message}
  --------------------
  `);
});
process.on("unhandledRejection", (err) => {
    console.error(`
  --------------------
  Unhandled Rejection:
  ${err.message}
  --------------------
  `);
});
module.exports = new app_1.default().start();
//# sourceMappingURL=server.js.map