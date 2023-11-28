import File from './File';
import { CourseProps } from './Types';

export default class Course {
  id: number;
  name: string;
  credit: number;

  constructor({ name, credit }: CourseProps) {
    this.id = -1; // Inicialize com um valor padrão
    this.name = name;
    this.credit = credit;
    this.appendToFile();
  }

  toJSON() {
    return { id: this.id, name: this.name, credit: this.credit };
  }

  private appendToFile() {
    File.append(this);
  }
}




