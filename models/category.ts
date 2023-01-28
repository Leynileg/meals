import { Category as CategoryInterface } from "@typings/categories";

class Category implements CategoryInterface {
  id: string;
  title: string;
  color: string;

  constructor(id: string, title: string, color: string) {
    this.id = id;
    this.title = title;
    this.color = color;
  }
}

export { Category };
