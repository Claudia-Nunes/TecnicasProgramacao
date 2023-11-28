// src/classes/Course.ts
import File from './File';
import { CourseProps } from './Types';

export default class Course {
  private static count: number = 0;
  id: number;
  name: string;
  credit: number;

  constructor(name: string, credit: number) {
    this.id = ++Course.count;
    this.name = name;
    this.credit = credit;
    this.appendToFile();
  }

  toJSON(): CourseProps {
    return { id: this.id, name: this.name, credit: this.credit };
  }

  toString(): string {
    return `${this.id},${this.name},${this.credit}`;
  }

  private appendToFile() {
    File.append(this);
  }
}
