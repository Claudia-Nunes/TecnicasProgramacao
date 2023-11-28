"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/classes/Student.ts
const Course_1 = require("./Course");
class Student {
    constructor({ name, courses }) {
        this.name = name;
        this.courses = courses.map(course => new Course_1.default(course.name, course.credit));
    }
    toJSON() {
        return {
            name: this.name,
            courses: this.courses.map(course => course.toJSON()),
        };
    }
}
exports.default = Student;
