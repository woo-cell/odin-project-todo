import Task from "./task.js";
import TaskList from "./tasklist.js";
import Category from "./category.js";

let taskList;
function initializeApp() {
  const taskListString = localStorage.getItem("taskList");
  if (taskListString) {
    taskList = JSON.parse(taskListString);
    // Convert the parsed object back to an instance of TaskList
    taskList = Object.assign(new TaskList(), taskList);
    // Convert the categories and tasks into instances of Category and Task classes
    taskList.categories = taskList.categories.map((category) => {
      const cat = Object.assign(new Category(category.name), category);
      cat.tasks = cat.tasks.map((task) => Object.assign(new Task(), task));
      return cat;
    });
  } else {
    // creating a tasklist and some tasks
    taskList = new TaskList();
    const workCategory = new Category("work");
    const studyCategory = new Category("study");
    const personalCategory = new Category("personal");
    taskList.addCategory(workCategory);
    taskList.addCategory(studyCategory);
    taskList.addCategory(personalCategory);

    // creating some task instances
    const task1 = new Task("Task 1", "Description of Task 1", "2023-01-01");
    const task2 = new Task("Task 2", "Description of Task 2", "2023-02-01");
    const task3 = new Task("Task 3", "Description of Task 3", "2023-03-01");
    workCategory.addTask(task1);
    workCategory.addTask(task2);
    studyCategory.addTask(task3);
  }
  return taskList;
}

function saveTaskListToLocalStorage() {
  const taskListString = JSON.stringify(taskList);
  localStorage.setItem("taskList", taskListString);
}

export { initializeApp, saveTaskListToLocalStorage };
