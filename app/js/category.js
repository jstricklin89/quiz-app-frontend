class Category {
  constructor(category) {
    this.name = category.name;
    Category.all.push(this);
  }

  showCategory() {
    return `<p>This is the Category: ${this.name}</p>`;
  }
}

Category.all = [];
