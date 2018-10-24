class Category {
  constructor(category) {
    this.name = category.name;
    this.img = category.img;
    Category.all.push(this);
  }

  showCategory() {
    let cardBody = document.getElementById("card-body");
    cardBody.innerText = category.name;
    return `<p>This is the Category: ${this.name}</p>`;
  }
}

Category.all = [];
