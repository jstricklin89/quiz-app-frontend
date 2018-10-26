class Category {
  constructor(category) {
    this.name = category.name;
    this.img = category.img;
    this.id = category.id;
    Category.all.push(this);
  }

  showCategory() {
    const categoryContainer = document.getElementById("category-id");
    const HTMLString = `<div class="card" style="width: 18rem;">
      <img id="card-img" class="card-img-top" src="${
        this.img
      }" alt="Card image cap" width=280px height=220px>
      <div class="card-body">
        <h5 class="card-title">${this.name}</h5>
        <button class="btn btn-primary quiz-btn" onClick="createFilteredQuestionsForCategory(event)" data-id="${
          this.id
        }">Play Quiz
        </button>
      </div>
    </div>`;
    categoryContainer.innerHTML += HTMLString;

    return `<p>This is the Category: ${this.name}</p>`;
  }
}

Category.all = [];
