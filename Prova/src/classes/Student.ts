// src/classes/Student.ts
import Course from './Course';
import { StudentProps, CourseProps } from './Types';  // Corrigindo os imports

export default class Student {
  name: string;
  courses: Course[];

  constructor({ name, courses }: StudentProps) {
    this.name = name;
    this.courses = courses.map(course => new Course(course));
  }

  toJSON() {
    return { name: this.name, courses: this.courses.map(course => course.toJSON()) };
  }
}
