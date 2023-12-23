class TaskList {
  constructor() {
    this.categories = [];
  }

  addCategory(category) {
    this.categories.push(category);
  }

  deleteCategory(name) {
    this.categories = this.categories.filter(
      (category) => category.name !== name,
    );
  }
}

export default TaskList;
