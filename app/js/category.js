class Category {
  constructor(category) {
    this.name = category.name;
    this.img = category.img;
    this.id = category.id;
    Category.all.push(this);
  }

  showCategory() {
    const categoryContainer = document.getElementById("category-id");

    // const cardBody = document.querySelector("card-body");
    // const cardImg = document.getElementById("card-img");
    // const cardTitle = document.querySelector("card-title");
    const HTMLString = `<div class="card" style="width: 18rem;">
      <img id="card-img" class="card-img-top" src="${
        this.img
      }" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${this.name}</h5>
        <button class="btn btn-primary quiz-btn" onClick="createFilteredQuestionsForCategory(event)" data-id="${
          this.id
        }">Play Quiz
        </button>
      </div>
    </div>`;
    categoryContainer.innerHTML += HTMLString;
    //to render a category, you need to iterate over the category object and pull out the values: we need to display a title, image, and a button.

    return `<p>This is the Category: ${this.name}</p>`;
  }
}

Category.all = [];
