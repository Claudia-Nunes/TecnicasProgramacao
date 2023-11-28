"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = require("fs-extra");
const async_mutex_1 = require("async-mutex");
class File {
    static append(course) {
        return __awaiter(this, void 0, void 0, function* () {
            const release = yield this.writeMutex.acquire();
            try {
                let texto = yield fs_extra_1.default.readFile(this.filename, "utf8");
                texto += course.toString() + "\r\n";
                yield fs_extra_1.default.writeFile(this.filename, texto, "utf8");
            }
            catch (e) {
                throw new Error(e.message);
            }
            finally {
                release();
            }
        });
    }
}
File.filename = "./src/classes/dados.txt";
File.writeMutex = new async_mutex_1.Mutex();
exports.default = File;
