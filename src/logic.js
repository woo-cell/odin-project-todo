class TaskList {
    constructor() {
        this.categories = [];
    }

    addCategory(category) {
        this.categories.push(category);
    }

    deleteCategory(name) {
        this.categories = this.categories.filter((category) => category.name !== name);        
    }

}

class Category {
    constructor(name){
        this.name = name;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    deleteTask(title) {
        this.tasks = this.tasks.filter((task) => task.title !== title);
    }
}

class Task {
    constructor(title,description,dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.completed = false;
    }

    toggleTaskStatus() {
        this.completed = !this.completed;
    }
}



export {TaskList,Category,Task}