"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/classes/Course.ts
const File_1 = require("./File");
class Course {
    constructor(name, credit) {
        this.id = ++Course.count;
        this.name = name;
        this.credit = credit;
        this.appendToFile();
    }
    toJSON() {
        return { id: this.id, name: this.name, credit: this.credit };
    }
    toString() {
        return `${this.id},${this.name},${this.credit}`;
    }
    appendToFile() {
        File_1.default.append(this);
    }
}
Course.count = 0;
exports.default = Course;
