class Category {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addTask(task) {
    const taskExist = this.tasks.some((t) => t.title === task.title);
    if (!taskExist) {
      this.tasks.push(task);
    }
  }

  deleteTask(title) {
    this.tasks = this.tasks.filter((task) => task.title !== title);
  }
}

export default Category;
