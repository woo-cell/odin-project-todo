/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Category: () => (/* binding */ Category),
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   TaskList: () => (/* binding */ TaskList)
/* harmony export */ });
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
        const taskExist = this.tasks.some((t) => t.title === task.title);
        if (!taskExist) {
            this.tasks.push(task);  
        }

    }

    deleteTask(title) {
        this.tasks = this.tasks.filter((task) => task.title !== title);
    }
}

class Task {
    constructor(title,description,dueDate,priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.completed = false;
        this.priority = priority;
    }
    
    toggleTaskStatus() {
        this.completed = !this.completed;
    }
}





/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");



const taskList = new _logic_js__WEBPACK_IMPORTED_MODULE_0__.TaskList();
const workCategory = new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Category("work");
const studyCategory = new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Category("study");
const personalCategory = new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Category("personal");
taskList.addCategory(workCategory);
taskList.addCategory(studyCategory);
taskList.addCategory(personalCategory);


// creating some task instances
const task1 = new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Task("Task 1", "Description of Task 1", "2023-01-01");
const task2 = new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Task("Task 2", "Description of Task 2", "2023-02-01");
const task3 = new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Task("Task 3", "Description of Task 3", "2023-03-01");
const task4 = new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Task("Task 4", "Description of Task 4", "2023-04-01");
const task5 = new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Task("Task 5", "Description of Task 5", "2023-05-01");
workCategory.addTask(task1);
workCategory.addTask(task2);


//retrieve the content element
const contentElement = document.querySelector(".content");


//// categories UI
function createHeader() {
const headerElement = document.createElement("header");
const headerTitle = document.createElement("h1");
headerTitle.textContent = "TO DO APP";
headerElement.appendChild(headerTitle);
contentElement.appendChild(headerElement);
}

function createFooter() {
    const footerElement = document.createElement("footer");
    const footerPara = document.createElement("p");
    const currentYear = new Date().getFullYear();
    footerPara.innerHTML = `&copy; ${currentYear} Woo-Cell`;
    footerElement.appendChild(footerPara);
    contentElement.appendChild(footerElement);
}

function createMain() {
    const mainElement = document.createElement("main");
    mainElement.appendChild(createCategoryContainer());
    mainElement.appendChild(createTaskContainer());
    contentElement.appendChild(mainElement);
}

function createCategoryContainer() {
    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("category-container");
    const categoryPara = document.createElement("p");
    categoryPara.textContent = "Your categories";
    const categoryList = document.createElement("ul");
    categoryContainer.appendChild(categoryPara);
    categoryContainer.appendChild(categoryList);
    return categoryContainer;
}

function createTaskContainer() {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");
    return taskContainer;
}

function addCategoryButton() {
    const list = document.querySelector(".category-container > ul");
    const addCatBtn = document.createElement("button");
    addCatBtn.classList.add("add-category");
    addCatBtn.textContent = "ADD";
    list.appendChild(addCatBtn);
}

function addCategoryToCategoryList(category) {
    const list = document.querySelector(".category-container > ul");
    const listItem = document.createElement("li");
    listItem.innerHTML = `<a href="#" class="link">${category.name}</a><button class="delete-cat-btn">delete</button>`;
    list.appendChild(listItem);

    // Add event listener to the new category link
    const link = listItem.querySelector(".link");
    link.addEventListener("click", (e) => {
        const index = taskList.categories.findIndex((category) => category.name === e.target.textContent);
        showCorrespondingTasks(taskList.categories[index]);
        const el = e.target;
        activateClass(el);
    });

    deleteBtnEventListener();
}

function activateClass(el) {
    const siblings = document.querySelectorAll(".link");
    siblings.forEach(sibling => sibling.classList.remove("active-link"));
    el.classList.add("active-link");
}

function initializeCategories() {
    addCategoryButton();
    addCategoryToCategoryList(workCategory);
    addCategoryToCategoryList(studyCategory);
    addCategoryToCategoryList(personalCategory);

}

function initializeTaskContainer() {
    const taskContainerElement = document.querySelector(".task-container");
    const text = document.createElement("p");
    text.textContent = "Click on a category to show the associated tasks";
    text.classList.add("text");
    taskContainerElement.appendChild(text);
}

function initializeScreen() {
    createHeader();
    createMain();
    initializeCategories();
    createFooter();
    initializeTaskContainer();

}

initializeScreen();

// categories event listener
const addCatBtn = document.querySelector(".add-category");
const addCatDialog = document.querySelector(".add-cat-dialog");
const catTitle = document.getElementById("cat-title");
const closeCatBtn = document.getElementById("close-add-cat-dialog");
const addCatToListBtn = document.getElementById("add-cat-btn-dialog");


addCatBtn.addEventListener("click", () => {
    addCatDialog.showModal();
});

closeCatBtn.addEventListener("click", () => {
    addCatDialog.close();
    catTitle.value = "";
});

addCatToListBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const cat = new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Category(`${catTitle.value}`);
    if (catTitle.value) {
        addCategoryToCategoryList(cat);
        taskList.addCategory(cat);
        console.log(taskList);
        addCatDialog.close();
        catTitle.value = "";
    }

});


function deleteBtnEventListener() {
    const deleteCatBtn = document.querySelectorAll(".delete-cat-btn");
    deleteCatBtn.forEach((button) => {
        button.addEventListener("click", (e) => {
            const btnArr = Array.from(deleteCatBtn);
            const index = btnArr.indexOf(e.target);

            // retrieve all links
            const associatedLink = e.target.parentElement.firstChild;
            // refresh task-container only if the deleted link is active
            if (associatedLink.classList.contains("active-link")) {
                deleteCatElement(e)
                taskContainer.innerHTML = "";
                initializeTaskContainer();
            } else {
                deleteCatElement(e)
            }
        });
    });
}

console.log(taskList);

function deleteCatElement(e) {
    e.target.parentElement.remove();
    taskList.deleteCategory(`${e.target.parentElement.firstChild.textContent}`);
    console.log(taskList);
}

// refresh the task-container section when clicking on a category
const taskContainer = document.querySelector(".task-container");
function showCorrespondingTasks(category) {
    taskContainer.innerHTML = "";
    createTasksHeading(category);
    createAddTaskElement();
    createTaskCardsContainers();
    createTaskCards(category);
    taskEventListeners();

}

function createTasksHeading(category) {
    const catHeadingTitle = document.createElement("h2");
    catHeadingTitle.classList.add("cat-heading");
    catHeadingTitle.textContent = category.name;
    taskContainer.appendChild(catHeadingTitle);
}

function createAddTaskElement() {
    const addTaskBtn = document.createElement("button");
    addTaskBtn.classList.add("add-task-btn");
    addTaskBtn.textContent = "Add New Task";
    taskContainer.appendChild(addTaskBtn);
}

function createTaskCardsContainers() {
    const cardsContainer = document.createElement("div");
    cardsContainer.classList.add("task-card-container");
    taskContainer.appendChild(cardsContainer);
}

function createTaskCards(category) {
    category.tasks.forEach((task) => {
        addTaskCard(task);
    });
}

// tasks events listeners
function taskEventListeners() {
    const addTaskDialog = document.querySelector(".add-task-dialog");
    const addNewTaskBtn = document.querySelector(".add-task-btn");
    const closeAddTaskDialog = document.getElementById("close-add-task-dialog");
    const addTaskBtnDialog = document.getElementById("add-task-btn-dialog");
    const taskTitle = document.getElementById("task-title");
    const taskDescription = document.getElementById("task-description");
    const taskDueDate = document.getElementById("task-due-date");
    const taskPriority = document.getElementById("task-priority");

    // add new task event listener
    addNewTaskBtn.addEventListener("click", () => {
        addTaskDialog.showModal();
        taskTitle.value = "";
        taskDescription.value = "";
        taskDueDate.value = "";
    });

    // close "add new task" dialog
    closeAddTaskDialog.addEventListener("click", () => {
        addTaskDialog.close();
    });

    // add new task dialog
    addTaskBtnDialog.addEventListener("click", (e) => {
        e.preventDefault();
        if (taskTitle.value && taskDueDate.value) {
            const task = new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Task(`${taskTitle.value}`,`${taskDescription.value}`,`${taskDueDate.value}`,`${taskPriority.value}`);
            const title = document.querySelector(".cat-heading");
            console.log(title);
            console.log(title.textContent);        
            const index = taskList.categories.findIndex((category) => category.name === title.textContent);
            console.log(index);
            const cat = taskList.categories[index];
            cat.addTask(task);
            console.log(cat);
            addTaskCard(task);
            addTaskDialog.close();
        }
    });
}

function addTaskCard(task) {
    const container = document.querySelector(".task-card-container");
    const existingTasks = document.querySelectorAll(".card");

    //check if the task already exists
    const taskExists = Array.from(existingTasks).some((existingTask) => {
        return task.title === existingTask.querySelector(".task-title").textContent;
    });

    // add the card if the taks doesn't exist yet
    if (!taskExists) {
        const card = document.createElement("div");
        card.classList.add("card");
        
        const taskTitle = document.createElement("h3");
        taskTitle.classList.add("task-title");
        taskTitle.textContent = task.title;
        
        const taskDescription = document.createElement("p");
        taskDescription.classList.add("task-description");
        taskDescription.textContent = task.description;
        
        const taskDueDate = document.createElement("p");
        taskDueDate.classList.add("task-due-date");
        taskDueDate.textContent = `Due Date: ${task.dueDate}`;

        const taskPriority = document.createElement("p");
        taskPriority.classList.add("task-priority");
        if (task.priority) {
            taskPriority.textContent = `Priority: ${task.priority}`;
        } else {
            taskPriority.textContent = `Priority: unset`;            
        }

    
        const editTaskBtn = document.createElement("button");
        editTaskBtn.classList.add("edit-task-btn");
        editTaskBtn.textContent = "Edit task";
        editTaskBtn.addEventListener("click",editTaskButtonClickHandler);

        const deleteTaskBtn = document.createElement("button");
        deleteTaskBtn.classList.add("delete-task-btn");
        deleteTaskBtn.textContent = "Delete task";
        deleteTaskBtn.addEventListener("click",deleteTaskButtonClickHandler);

        const taskDoneBtn = document.createElement("button");
        taskDoneBtn.classList.add("task-done-button");
        taskDoneBtn.textContent = "Task Done";
        taskDoneBtn.addEventListener("click",taskDoneButtonClickHandler);
    
        card.appendChild(taskTitle);
        card.appendChild(taskDescription);
        card.appendChild(taskDueDate);
        card.appendChild(taskPriority);
        card.appendChild(editTaskBtn);
        card.appendChild(deleteTaskBtn);
        card.appendChild(taskDoneBtn);
        container.appendChild(card);
    }

}

    // delete task button listener
function deleteTaskButtonClickHandler(e) {
    const catName = e.target.parentElement.parentElement.parentElement.firstChild.textContent.trim();
    const taskName = e.target.parentElement.firstChild.textContent.trim()
    const catIndex = taskList.categories.findIndex((cat) => {
        return cat.name.trim() === catName;
    });

    console.log(taskName);
    taskList.categories[catIndex].deleteTask(taskName);
    e.target.parentElement.remove();
    console.log(taskList);
}

    // edit button listener
function editTaskButtonClickHandler(e) {
    // retrieve edit dialog elements
    const addTaskDialog = document.querySelector(".e-task-dialog");
    const closeAddTaskDialog = document.getElementById("e-close-add-task-dialog");
    const addTaskBtnDialog = document.getElementById("e-add-task-btn-dialog");
    const taskTitle = document.getElementById("e-task-title");
    const taskDescription = document.getElementById("e-task-description");
    const taskDueDate = document.getElementById("e-task-due-date");
    const taskPriority = document.getElementById("e-task-priority");

    // retrieve current values of card
    const renderedTaskTitle = e.target.parentElement.firstChild.textContent.trim();
    const renderedTaskDescription = e.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent.trim();
    const renderedDueDate = e.target.previousElementSibling.previousElementSibling.textContent.trim().replace("Due Date: ", "");
    renderedDueDate.replaceAll("-", " ");
    const renderedPriority = e.target.previousElementSibling.textContent.trim().replace("Priority: ", "");
    console.log(renderedPriority);

    // show edit task modal onclick
    addTaskDialog.showModal();
    taskTitle.value = renderedTaskTitle;
    taskDescription.value = renderedTaskDescription;
    taskDueDate.value = renderedDueDate;
    if (renderedPriority !== "unset") {
        taskPriority.value = renderedPriority;
    } else {
        taskPriority.value = "low";
    }

    // close "edit task" dialog
    closeAddTaskDialog.addEventListener("click", () => {
        addTaskDialog.close();
    });

    // edit task button dialog
    addTaskBtnDialog.addEventListener("click", (e) => {
        e.preventDefault();
        if (taskTitle.value && taskDueDate.value) {
            // find the current category
            const title = document.querySelector(".cat-heading");     
            const index = taskList.categories.findIndex((category) => category.name === title.textContent);
            console.log(index);
            const cat = taskList.categories[index];
            // find the current task
            const taskIndex = cat.tasks.findIndex((task) => task.title === renderedTaskTitle);
            const task = cat.tasks[taskIndex];
            // set new values
            task.title = taskTitle.value;
            task.description = taskDescription.value;
            task.dueDate = taskDueDate.value;
            task.priority = taskPriority.value;           
            console.log(taskList);
            updateCard(task,renderedTaskTitle);
            addTaskDialog.close();
        }
    });
}

function updateCard(task,oldTitle) {

// find the card with the old title
const allCards = document.querySelectorAll(".card");
const cardArr= Array.from(allCards);
const index = cardArr.findIndex((card) => card.firstChild.textContent.trim() === oldTitle);
console.log(allCards[index]);
const currentCardContainer = allCards[index];

// update the title, the description, the duedate and the priority;
const title = currentCardContainer.querySelector(".task-title");
const description = currentCardContainer.querySelector(".task-description");
const dueDate = currentCardContainer.querySelector(".task-due-date");
const priority = currentCardContainer.querySelector(".task-priority");

title.textContent = task.title;
description.textContent = task.description;
dueDate.textContent = `Due Date: ${task.dueDate}`;
priority.textContent = `Priority: ${task.priority}`
}

function taskDoneButtonClickHandler(e) {
    // select current card
const currentCard = e.target.parentElement;
    // toggle class ".done" to the card (visual)
currentCard.classList.toggle("done");
    // select the corresponding task
        // finding the category
    const title = document.querySelector(".cat-heading");     
    const index = taskList.categories.findIndex((category) => category.name === title.textContent);
    console.log(index);
    const cat = taskList.categories[index];
        // finding the task
    const taskIndex = cat.tasks.findIndex((task) => task.title === e.target.parentElement.firstChild.textContent.trim());
    const task = cat.tasks[taskIndex];
    // toggle task status
    task.toggleTaskStatus();
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2pEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmtEO0FBQ2xEO0FBQ0E7QUFDQSxxQkFBcUIsK0NBQVE7QUFDN0IseUJBQXlCLCtDQUFRO0FBQ2pDLDBCQUEwQiwrQ0FBUTtBQUNsQyw2QkFBNkIsK0NBQVE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDJDQUFJO0FBQ3RCLGtCQUFrQiwyQ0FBSTtBQUN0QixrQkFBa0IsMkNBQUk7QUFDdEIsa0JBQWtCLDJDQUFJO0FBQ3RCLGtCQUFrQiwyQ0FBSTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsRUFBRSxhQUFhO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxjQUFjO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwrQ0FBUSxJQUFJLGVBQWU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsOENBQThDO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwyQ0FBSSxJQUFJLGdCQUFnQixLQUFLLHNCQUFzQixLQUFLLGtCQUFrQixLQUFLLG1CQUFtQjtBQUMvSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxhQUFhO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGNBQWM7QUFDbEUsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsYUFBYTtBQUNoRCxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUYXNrTGlzdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRDYXRlZ29yeShjYXRlZ29yeSkge1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVDYXRlZ29yeShuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gdGhpcy5jYXRlZ29yaWVzLmZpbHRlcigoY2F0ZWdvcnkpID0+IGNhdGVnb3J5Lm5hbWUgIT09IG5hbWUpOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jbGFzcyBDYXRlZ29yeSB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUYXNrKHRhc2spIHtcclxuICAgICAgICBjb25zdCB0YXNrRXhpc3QgPSB0aGlzLnRhc2tzLnNvbWUoKHQpID0+IHQudGl0bGUgPT09IHRhc2sudGl0bGUpO1xyXG4gICAgICAgIGlmICghdGFza0V4aXN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTsgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVGFzayh0aXRsZSkge1xyXG4gICAgICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay50aXRsZSAhPT0gdGl0bGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBUYXNrIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRvZ2dsZVRhc2tTdGF0dXMoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSAhdGhpcy5jb21wbGV0ZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IHtUYXNrTGlzdCxDYXRlZ29yeSxUYXNrfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtUYXNrTGlzdCxDYXRlZ29yeSxUYXNrfSBmcm9tIFwiLi9sb2dpYy5qc1wiO1xyXG5cclxuXHJcbmNvbnN0IHRhc2tMaXN0ID0gbmV3IFRhc2tMaXN0KCk7XHJcbmNvbnN0IHdvcmtDYXRlZ29yeSA9IG5ldyBDYXRlZ29yeShcIndvcmtcIik7XHJcbmNvbnN0IHN0dWR5Q2F0ZWdvcnkgPSBuZXcgQ2F0ZWdvcnkoXCJzdHVkeVwiKTtcclxuY29uc3QgcGVyc29uYWxDYXRlZ29yeSA9IG5ldyBDYXRlZ29yeShcInBlcnNvbmFsXCIpO1xyXG50YXNrTGlzdC5hZGRDYXRlZ29yeSh3b3JrQ2F0ZWdvcnkpO1xyXG50YXNrTGlzdC5hZGRDYXRlZ29yeShzdHVkeUNhdGVnb3J5KTtcclxudGFza0xpc3QuYWRkQ2F0ZWdvcnkocGVyc29uYWxDYXRlZ29yeSk7XHJcblxyXG5cclxuLy8gY3JlYXRpbmcgc29tZSB0YXNrIGluc3RhbmNlc1xyXG5jb25zdCB0YXNrMSA9IG5ldyBUYXNrKFwiVGFzayAxXCIsIFwiRGVzY3JpcHRpb24gb2YgVGFzayAxXCIsIFwiMjAyMy0wMS0wMVwiKTtcclxuY29uc3QgdGFzazIgPSBuZXcgVGFzayhcIlRhc2sgMlwiLCBcIkRlc2NyaXB0aW9uIG9mIFRhc2sgMlwiLCBcIjIwMjMtMDItMDFcIik7XHJcbmNvbnN0IHRhc2szID0gbmV3IFRhc2soXCJUYXNrIDNcIiwgXCJEZXNjcmlwdGlvbiBvZiBUYXNrIDNcIiwgXCIyMDIzLTAzLTAxXCIpO1xyXG5jb25zdCB0YXNrNCA9IG5ldyBUYXNrKFwiVGFzayA0XCIsIFwiRGVzY3JpcHRpb24gb2YgVGFzayA0XCIsIFwiMjAyMy0wNC0wMVwiKTtcclxuY29uc3QgdGFzazUgPSBuZXcgVGFzayhcIlRhc2sgNVwiLCBcIkRlc2NyaXB0aW9uIG9mIFRhc2sgNVwiLCBcIjIwMjMtMDUtMDFcIik7XHJcbndvcmtDYXRlZ29yeS5hZGRUYXNrKHRhc2sxKTtcclxud29ya0NhdGVnb3J5LmFkZFRhc2sodGFzazIpO1xyXG5cclxuXHJcbi8vcmV0cmlldmUgdGhlIGNvbnRlbnQgZWxlbWVudFxyXG5jb25zdCBjb250ZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcclxuXHJcblxyXG4vLy8vIGNhdGVnb3JpZXMgVUlcclxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xyXG5jb25zdCBoZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbmhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJUTyBETyBBUFBcIjtcclxuaGVhZGVyRWxlbWVudC5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XHJcbmNvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKGhlYWRlckVsZW1lbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XHJcbiAgICBjb25zdCBmb290ZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuICAgIGNvbnN0IGZvb3RlclBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgZm9vdGVyUGFyYS5pbm5lckhUTUwgPSBgJmNvcHk7ICR7Y3VycmVudFllYXJ9IFdvby1DZWxsYDtcclxuICAgIGZvb3RlckVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9vdGVyUGFyYSk7XHJcbiAgICBjb250ZW50RWxlbWVudC5hcHBlbmRDaGlsZChmb290ZXJFbGVtZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcclxuICAgIGNvbnN0IG1haW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XHJcbiAgICBtYWluRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVDYXRlZ29yeUNvbnRhaW5lcigpKTtcclxuICAgIG1haW5FbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tDb250YWluZXIoKSk7XHJcbiAgICBjb250ZW50RWxlbWVudC5hcHBlbmRDaGlsZChtYWluRWxlbWVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3J5Q29udGFpbmVyKCkge1xyXG4gICAgY29uc3QgY2F0ZWdvcnlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2F0ZWdvcnlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5LWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IGNhdGVnb3J5UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY2F0ZWdvcnlQYXJhLnRleHRDb250ZW50ID0gXCJZb3VyIGNhdGVnb3JpZXNcIjtcclxuICAgIGNvbnN0IGNhdGVnb3J5TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIGNhdGVnb3J5Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhdGVnb3J5UGFyYSk7XHJcbiAgICBjYXRlZ29yeUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXRlZ29yeUxpc3QpO1xyXG4gICAgcmV0dXJuIGNhdGVnb3J5Q29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrQ29udGFpbmVyKCkge1xyXG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lclwiKTtcclxuICAgIHJldHVybiB0YXNrQ29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDYXRlZ29yeUJ1dHRvbigpIHtcclxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhdGVnb3J5LWNvbnRhaW5lciA+IHVsXCIpO1xyXG4gICAgY29uc3QgYWRkQ2F0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGFkZENhdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLWNhdGVnb3J5XCIpO1xyXG4gICAgYWRkQ2F0QnRuLnRleHRDb250ZW50ID0gXCJBRERcIjtcclxuICAgIGxpc3QuYXBwZW5kQ2hpbGQoYWRkQ2F0QnRuKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ2F0ZWdvcnlUb0NhdGVnb3J5TGlzdChjYXRlZ29yeSkge1xyXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2F0ZWdvcnktY29udGFpbmVyID4gdWxcIik7XHJcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGxpc3RJdGVtLmlubmVySFRNTCA9IGA8YSBocmVmPVwiI1wiIGNsYXNzPVwibGlua1wiPiR7Y2F0ZWdvcnkubmFtZX08L2E+PGJ1dHRvbiBjbGFzcz1cImRlbGV0ZS1jYXQtYnRuXCI+ZGVsZXRlPC9idXR0b24+YDtcclxuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xyXG5cclxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byB0aGUgbmV3IGNhdGVnb3J5IGxpbmtcclxuICAgIGNvbnN0IGxpbmsgPSBsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKFwiLmxpbmtcIik7XHJcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGFza0xpc3QuY2F0ZWdvcmllcy5maW5kSW5kZXgoKGNhdGVnb3J5KSA9PiBjYXRlZ29yeS5uYW1lID09PSBlLnRhcmdldC50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgc2hvd0NvcnJlc3BvbmRpbmdUYXNrcyh0YXNrTGlzdC5jYXRlZ29yaWVzW2luZGV4XSk7XHJcbiAgICAgICAgY29uc3QgZWwgPSBlLnRhcmdldDtcclxuICAgICAgICBhY3RpdmF0ZUNsYXNzKGVsKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRlbGV0ZUJ0bkV2ZW50TGlzdGVuZXIoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWN0aXZhdGVDbGFzcyhlbCkge1xyXG4gICAgY29uc3Qgc2libGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpbmtcIik7XHJcbiAgICBzaWJsaW5ncy5mb3JFYWNoKHNpYmxpbmcgPT4gc2libGluZy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLWxpbmtcIikpO1xyXG4gICAgZWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1saW5rXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplQ2F0ZWdvcmllcygpIHtcclxuICAgIGFkZENhdGVnb3J5QnV0dG9uKCk7XHJcbiAgICBhZGRDYXRlZ29yeVRvQ2F0ZWdvcnlMaXN0KHdvcmtDYXRlZ29yeSk7XHJcbiAgICBhZGRDYXRlZ29yeVRvQ2F0ZWdvcnlMaXN0KHN0dWR5Q2F0ZWdvcnkpO1xyXG4gICAgYWRkQ2F0ZWdvcnlUb0NhdGVnb3J5TGlzdChwZXJzb25hbENhdGVnb3J5KTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVUYXNrQ29udGFpbmVyKCkge1xyXG4gICAgY29uc3QgdGFza0NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGFpbmVyXCIpO1xyXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdGV4dC50ZXh0Q29udGVudCA9IFwiQ2xpY2sgb24gYSBjYXRlZ29yeSB0byBzaG93IHRoZSBhc3NvY2lhdGVkIHRhc2tzXCI7XHJcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0XCIpO1xyXG4gICAgdGFza0NvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVTY3JlZW4oKSB7XHJcbiAgICBjcmVhdGVIZWFkZXIoKTtcclxuICAgIGNyZWF0ZU1haW4oKTtcclxuICAgIGluaXRpYWxpemVDYXRlZ29yaWVzKCk7XHJcbiAgICBjcmVhdGVGb290ZXIoKTtcclxuICAgIGluaXRpYWxpemVUYXNrQ29udGFpbmVyKCk7XHJcblxyXG59XHJcblxyXG5pbml0aWFsaXplU2NyZWVuKCk7XHJcblxyXG4vLyBjYXRlZ29yaWVzIGV2ZW50IGxpc3RlbmVyXHJcbmNvbnN0IGFkZENhdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWNhdGVnb3J5XCIpO1xyXG5jb25zdCBhZGRDYXREaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1jYXQtZGlhbG9nXCIpO1xyXG5jb25zdCBjYXRUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2F0LXRpdGxlXCIpO1xyXG5jb25zdCBjbG9zZUNhdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtYWRkLWNhdC1kaWFsb2dcIik7XHJcbmNvbnN0IGFkZENhdFRvTGlzdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLWNhdC1idG4tZGlhbG9nXCIpO1xyXG5cclxuXHJcbmFkZENhdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgYWRkQ2F0RGlhbG9nLnNob3dNb2RhbCgpO1xyXG59KTtcclxuXHJcbmNsb3NlQ2F0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBhZGRDYXREaWFsb2cuY2xvc2UoKTtcclxuICAgIGNhdFRpdGxlLnZhbHVlID0gXCJcIjtcclxufSk7XHJcblxyXG5hZGRDYXRUb0xpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBjYXQgPSBuZXcgQ2F0ZWdvcnkoYCR7Y2F0VGl0bGUudmFsdWV9YCk7XHJcbiAgICBpZiAoY2F0VGl0bGUudmFsdWUpIHtcclxuICAgICAgICBhZGRDYXRlZ29yeVRvQ2F0ZWdvcnlMaXN0KGNhdCk7XHJcbiAgICAgICAgdGFza0xpc3QuYWRkQ2F0ZWdvcnkoY2F0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrTGlzdCk7XHJcbiAgICAgICAgYWRkQ2F0RGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgY2F0VGl0bGUudmFsdWUgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxufSk7XHJcblxyXG5cclxuZnVuY3Rpb24gZGVsZXRlQnRuRXZlbnRMaXN0ZW5lcigpIHtcclxuICAgIGNvbnN0IGRlbGV0ZUNhdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlLWNhdC1idG5cIik7XHJcbiAgICBkZWxldGVDYXRCdG4uZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBidG5BcnIgPSBBcnJheS5mcm9tKGRlbGV0ZUNhdEJ0bik7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gYnRuQXJyLmluZGV4T2YoZS50YXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgLy8gcmV0cmlldmUgYWxsIGxpbmtzXHJcbiAgICAgICAgICAgIGNvbnN0IGFzc29jaWF0ZWRMaW5rID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5maXJzdENoaWxkO1xyXG4gICAgICAgICAgICAvLyByZWZyZXNoIHRhc2stY29udGFpbmVyIG9ubHkgaWYgdGhlIGRlbGV0ZWQgbGluayBpcyBhY3RpdmVcclxuICAgICAgICAgICAgaWYgKGFzc29jaWF0ZWRMaW5rLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1saW5rXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVDYXRFbGVtZW50KGUpXHJcbiAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBpbml0aWFsaXplVGFza0NvbnRhaW5lcigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlQ2F0RWxlbWVudChlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc29sZS5sb2codGFza0xpc3QpO1xyXG5cclxuZnVuY3Rpb24gZGVsZXRlQ2F0RWxlbWVudChlKSB7XHJcbiAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgdGFza0xpc3QuZGVsZXRlQ2F0ZWdvcnkoYCR7ZS50YXJnZXQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLnRleHRDb250ZW50fWApO1xyXG4gICAgY29uc29sZS5sb2codGFza0xpc3QpO1xyXG59XHJcblxyXG4vLyByZWZyZXNoIHRoZSB0YXNrLWNvbnRhaW5lciBzZWN0aW9uIHdoZW4gY2xpY2tpbmcgb24gYSBjYXRlZ29yeVxyXG5jb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lclwiKTtcclxuZnVuY3Rpb24gc2hvd0NvcnJlc3BvbmRpbmdUYXNrcyhjYXRlZ29yeSkge1xyXG4gICAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgY3JlYXRlVGFza3NIZWFkaW5nKGNhdGVnb3J5KTtcclxuICAgIGNyZWF0ZUFkZFRhc2tFbGVtZW50KCk7XHJcbiAgICBjcmVhdGVUYXNrQ2FyZHNDb250YWluZXJzKCk7XHJcbiAgICBjcmVhdGVUYXNrQ2FyZHMoY2F0ZWdvcnkpO1xyXG4gICAgdGFza0V2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrc0hlYWRpbmcoY2F0ZWdvcnkpIHtcclxuICAgIGNvbnN0IGNhdEhlYWRpbmdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGNhdEhlYWRpbmdUaXRsZS5jbGFzc0xpc3QuYWRkKFwiY2F0LWhlYWRpbmdcIik7XHJcbiAgICBjYXRIZWFkaW5nVGl0bGUudGV4dENvbnRlbnQgPSBjYXRlZ29yeS5uYW1lO1xyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXRIZWFkaW5nVGl0bGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBZGRUYXNrRWxlbWVudCgpIHtcclxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stYnRuXCIpO1xyXG4gICAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9IFwiQWRkIE5ldyBUYXNrXCI7XHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrQ2FyZHNDb250YWluZXJzKCkge1xyXG4gICAgY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FyZHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stY2FyZC1jb250YWluZXJcIik7XHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRzQ29udGFpbmVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFza0NhcmRzKGNhdGVnb3J5KSB7XHJcbiAgICBjYXRlZ29yeS50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgYWRkVGFza0NhcmQodGFzayk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gdGFza3MgZXZlbnRzIGxpc3RlbmVyc1xyXG5mdW5jdGlvbiB0YXNrRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBjb25zdCBhZGRUYXNrRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1kaWFsb2dcIik7XHJcbiAgICBjb25zdCBhZGROZXdUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1idG5cIik7XHJcbiAgICBjb25zdCBjbG9zZUFkZFRhc2tEaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLWFkZC10YXNrLWRpYWxvZ1wiKTtcclxuICAgIGNvbnN0IGFkZFRhc2tCdG5EaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrLWJ0bi1kaWFsb2dcIik7XHJcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stdGl0bGVcIik7XHJcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGVzY3JpcHRpb25cIik7XHJcbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kdWUtZGF0ZVwiKTtcclxuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1wcmlvcml0eVwiKTtcclxuXHJcbiAgICAvLyBhZGQgbmV3IHRhc2sgZXZlbnQgbGlzdGVuZXJcclxuICAgIGFkZE5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBhZGRUYXNrRGlhbG9nLnNob3dNb2RhbCgpO1xyXG4gICAgICAgIHRhc2tUaXRsZS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcclxuICAgICAgICB0YXNrRHVlRGF0ZS52YWx1ZSA9IFwiXCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjbG9zZSBcImFkZCBuZXcgdGFza1wiIGRpYWxvZ1xyXG4gICAgY2xvc2VBZGRUYXNrRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgYWRkVGFza0RpYWxvZy5jbG9zZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYWRkIG5ldyB0YXNrIGRpYWxvZ1xyXG4gICAgYWRkVGFza0J0bkRpYWxvZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKHRhc2tUaXRsZS52YWx1ZSAmJiB0YXNrRHVlRGF0ZS52YWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2soYCR7dGFza1RpdGxlLnZhbHVlfWAsYCR7dGFza0Rlc2NyaXB0aW9uLnZhbHVlfWAsYCR7dGFza0R1ZURhdGUudmFsdWV9YCxgJHt0YXNrUHJpb3JpdHkudmFsdWV9YCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXQtaGVhZGluZ1wiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGl0bGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aXRsZS50ZXh0Q29udGVudCk7ICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0YXNrTGlzdC5jYXRlZ29yaWVzLmZpbmRJbmRleCgoY2F0ZWdvcnkpID0+IGNhdGVnb3J5Lm5hbWUgPT09IHRpdGxlLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xyXG4gICAgICAgICAgICBjb25zdCBjYXQgPSB0YXNrTGlzdC5jYXRlZ29yaWVzW2luZGV4XTtcclxuICAgICAgICAgICAgY2F0LmFkZFRhc2sodGFzayk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhdCk7XHJcbiAgICAgICAgICAgIGFkZFRhc2tDYXJkKHRhc2spO1xyXG4gICAgICAgICAgICBhZGRUYXNrRGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRhc2tDYXJkKHRhc2spIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jYXJkLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IGV4aXN0aW5nVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRcIik7XHJcblxyXG4gICAgLy9jaGVjayBpZiB0aGUgdGFzayBhbHJlYWR5IGV4aXN0c1xyXG4gICAgY29uc3QgdGFza0V4aXN0cyA9IEFycmF5LmZyb20oZXhpc3RpbmdUYXNrcykuc29tZSgoZXhpc3RpbmdUYXNrKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRhc2sudGl0bGUgPT09IGV4aXN0aW5nVGFzay5xdWVyeVNlbGVjdG9yKFwiLnRhc2stdGl0bGVcIikudGV4dENvbnRlbnQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBhZGQgdGhlIGNhcmQgaWYgdGhlIHRha3MgZG9lc24ndCBleGlzdCB5ZXRcclxuICAgIGlmICghdGFza0V4aXN0cykge1xyXG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGFzay10aXRsZVwiKTtcclxuICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXNjcmlwdGlvblwiKTtcclxuICAgICAgICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgdGFza0R1ZURhdGUuY2xhc3NMaXN0LmFkZChcInRhc2stZHVlLWRhdGVcIik7XHJcbiAgICAgICAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSBgRHVlIERhdGU6ICR7dGFzay5kdWVEYXRlfWA7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidGFzay1wcmlvcml0eVwiKTtcclxuICAgICAgICBpZiAodGFzay5wcmlvcml0eSkge1xyXG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7dGFzay5wcmlvcml0eX1gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogdW5zZXRgOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICBcclxuICAgICAgICBjb25zdCBlZGl0VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgZWRpdFRhc2tCdG4uY2xhc3NMaXN0LmFkZChcImVkaXQtdGFzay1idG5cIik7XHJcbiAgICAgICAgZWRpdFRhc2tCdG4udGV4dENvbnRlbnQgPSBcIkVkaXQgdGFza1wiO1xyXG4gICAgICAgIGVkaXRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGVkaXRUYXNrQnV0dG9uQ2xpY2tIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGVsZXRlVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgZGVsZXRlVGFza0J0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXRhc2stYnRuXCIpO1xyXG4gICAgICAgIGRlbGV0ZVRhc2tCdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZSB0YXNrXCI7XHJcbiAgICAgICAgZGVsZXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixkZWxldGVUYXNrQnV0dG9uQ2xpY2tIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGFza0RvbmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHRhc2tEb25lQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRvbmUtYnV0dG9uXCIpO1xyXG4gICAgICAgIHRhc2tEb25lQnRuLnRleHRDb250ZW50ID0gXCJUYXNrIERvbmVcIjtcclxuICAgICAgICB0YXNrRG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0YXNrRG9uZUJ1dHRvbkNsaWNrSGFuZGxlcik7XHJcbiAgICBcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGVkaXRUYXNrQnRuKTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2tCdG4pO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQodGFza0RvbmVCdG4pO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiAgICAvLyBkZWxldGUgdGFzayBidXR0b24gbGlzdGVuZXJcclxuZnVuY3Rpb24gZGVsZXRlVGFza0J1dHRvbkNsaWNrSGFuZGxlcihlKSB7XHJcbiAgICBjb25zdCBjYXROYW1lID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC50ZXh0Q29udGVudC50cmltKCk7XHJcbiAgICBjb25zdCB0YXNrTmFtZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC50ZXh0Q29udGVudC50cmltKClcclxuICAgIGNvbnN0IGNhdEluZGV4ID0gdGFza0xpc3QuY2F0ZWdvcmllcy5maW5kSW5kZXgoKGNhdCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBjYXQubmFtZS50cmltKCkgPT09IGNhdE5hbWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0YXNrTmFtZSk7XHJcbiAgICB0YXNrTGlzdC5jYXRlZ29yaWVzW2NhdEluZGV4XS5kZWxldGVUYXNrKHRhc2tOYW1lKTtcclxuICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICBjb25zb2xlLmxvZyh0YXNrTGlzdCk7XHJcbn1cclxuXHJcbiAgICAvLyBlZGl0IGJ1dHRvbiBsaXN0ZW5lclxyXG5mdW5jdGlvbiBlZGl0VGFza0J1dHRvbkNsaWNrSGFuZGxlcihlKSB7XHJcbiAgICAvLyByZXRyaWV2ZSBlZGl0IGRpYWxvZyBlbGVtZW50c1xyXG4gICAgY29uc3QgYWRkVGFza0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZS10YXNrLWRpYWxvZ1wiKTtcclxuICAgIGNvbnN0IGNsb3NlQWRkVGFza0RpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZS1jbG9zZS1hZGQtdGFzay1kaWFsb2dcIik7XHJcbiAgICBjb25zdCBhZGRUYXNrQnRuRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlLWFkZC10YXNrLWJ0bi1kaWFsb2dcIik7XHJcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImUtdGFzay10aXRsZVwiKTtcclxuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZS10YXNrLWRlc2NyaXB0aW9uXCIpO1xyXG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImUtdGFzay1kdWUtZGF0ZVwiKTtcclxuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZS10YXNrLXByaW9yaXR5XCIpO1xyXG5cclxuICAgIC8vIHJldHJpZXZlIGN1cnJlbnQgdmFsdWVzIG9mIGNhcmRcclxuICAgIGNvbnN0IHJlbmRlcmVkVGFza1RpdGxlID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLnRleHRDb250ZW50LnRyaW0oKTtcclxuICAgIGNvbnN0IHJlbmRlcmVkVGFza0Rlc2NyaXB0aW9uID0gZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnByZXZpb3VzRWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQudHJpbSgpO1xyXG4gICAgY29uc3QgcmVuZGVyZWREdWVEYXRlID0gZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50LnRyaW0oKS5yZXBsYWNlKFwiRHVlIERhdGU6IFwiLCBcIlwiKTtcclxuICAgIHJlbmRlcmVkRHVlRGF0ZS5yZXBsYWNlQWxsKFwiLVwiLCBcIiBcIik7XHJcbiAgICBjb25zdCByZW5kZXJlZFByaW9yaXR5ID0gZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy50ZXh0Q29udGVudC50cmltKCkucmVwbGFjZShcIlByaW9yaXR5OiBcIiwgXCJcIik7XHJcbiAgICBjb25zb2xlLmxvZyhyZW5kZXJlZFByaW9yaXR5KTtcclxuXHJcbiAgICAvLyBzaG93IGVkaXQgdGFzayBtb2RhbCBvbmNsaWNrXHJcbiAgICBhZGRUYXNrRGlhbG9nLnNob3dNb2RhbCgpO1xyXG4gICAgdGFza1RpdGxlLnZhbHVlID0gcmVuZGVyZWRUYXNrVGl0bGU7XHJcbiAgICB0YXNrRGVzY3JpcHRpb24udmFsdWUgPSByZW5kZXJlZFRhc2tEZXNjcmlwdGlvbjtcclxuICAgIHRhc2tEdWVEYXRlLnZhbHVlID0gcmVuZGVyZWREdWVEYXRlO1xyXG4gICAgaWYgKHJlbmRlcmVkUHJpb3JpdHkgIT09IFwidW5zZXRcIikge1xyXG4gICAgICAgIHRhc2tQcmlvcml0eS52YWx1ZSA9IHJlbmRlcmVkUHJpb3JpdHk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhc2tQcmlvcml0eS52YWx1ZSA9IFwibG93XCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2xvc2UgXCJlZGl0IHRhc2tcIiBkaWFsb2dcclxuICAgIGNsb3NlQWRkVGFza0RpYWxvZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGFkZFRhc2tEaWFsb2cuY2xvc2UoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGVkaXQgdGFzayBidXR0b24gZGlhbG9nXHJcbiAgICBhZGRUYXNrQnRuRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAodGFza1RpdGxlLnZhbHVlICYmIHRhc2tEdWVEYXRlLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIC8vIGZpbmQgdGhlIGN1cnJlbnQgY2F0ZWdvcnlcclxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhdC1oZWFkaW5nXCIpOyAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGFza0xpc3QuY2F0ZWdvcmllcy5maW5kSW5kZXgoKGNhdGVnb3J5KSA9PiBjYXRlZ29yeS5uYW1lID09PSB0aXRsZS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICAgICAgICAgICAgY29uc3QgY2F0ID0gdGFza0xpc3QuY2F0ZWdvcmllc1tpbmRleF07XHJcbiAgICAgICAgICAgIC8vIGZpbmQgdGhlIGN1cnJlbnQgdGFza1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrSW5kZXggPSBjYXQudGFza3MuZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLnRpdGxlID09PSByZW5kZXJlZFRhc2tUaXRsZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBjYXQudGFza3NbdGFza0luZGV4XTtcclxuICAgICAgICAgICAgLy8gc2V0IG5ldyB2YWx1ZXNcclxuICAgICAgICAgICAgdGFzay50aXRsZSA9IHRhc2tUaXRsZS52YWx1ZTtcclxuICAgICAgICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IHRhc2tEZXNjcmlwdGlvbi52YWx1ZTtcclxuICAgICAgICAgICAgdGFzay5kdWVEYXRlID0gdGFza0R1ZURhdGUudmFsdWU7XHJcbiAgICAgICAgICAgIHRhc2sucHJpb3JpdHkgPSB0YXNrUHJpb3JpdHkudmFsdWU7ICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGFza0xpc3QpO1xyXG4gICAgICAgICAgICB1cGRhdGVDYXJkKHRhc2sscmVuZGVyZWRUYXNrVGl0bGUpO1xyXG4gICAgICAgICAgICBhZGRUYXNrRGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNhcmQodGFzayxvbGRUaXRsZSkge1xyXG5cclxuLy8gZmluZCB0aGUgY2FyZCB3aXRoIHRoZSBvbGQgdGl0bGVcclxuY29uc3QgYWxsQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRcIik7XHJcbmNvbnN0IGNhcmRBcnI9IEFycmF5LmZyb20oYWxsQ2FyZHMpO1xyXG5jb25zdCBpbmRleCA9IGNhcmRBcnIuZmluZEluZGV4KChjYXJkKSA9PiBjYXJkLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQudHJpbSgpID09PSBvbGRUaXRsZSk7XHJcbmNvbnNvbGUubG9nKGFsbENhcmRzW2luZGV4XSk7XHJcbmNvbnN0IGN1cnJlbnRDYXJkQ29udGFpbmVyID0gYWxsQ2FyZHNbaW5kZXhdO1xyXG5cclxuLy8gdXBkYXRlIHRoZSB0aXRsZSwgdGhlIGRlc2NyaXB0aW9uLCB0aGUgZHVlZGF0ZSBhbmQgdGhlIHByaW9yaXR5O1xyXG5jb25zdCB0aXRsZSA9IGN1cnJlbnRDYXJkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay10aXRsZVwiKTtcclxuY29uc3QgZGVzY3JpcHRpb24gPSBjdXJyZW50Q2FyZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGVzY3JpcHRpb25cIik7XHJcbmNvbnN0IGR1ZURhdGUgPSBjdXJyZW50Q2FyZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZHVlLWRhdGVcIik7XHJcbmNvbnN0IHByaW9yaXR5ID0gY3VycmVudENhcmRDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi50YXNrLXByaW9yaXR5XCIpO1xyXG5cclxudGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xyXG5kZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XHJcbmR1ZURhdGUudGV4dENvbnRlbnQgPSBgRHVlIERhdGU6ICR7dGFzay5kdWVEYXRlfWA7XHJcbnByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3Rhc2sucHJpb3JpdHl9YFxyXG59XHJcblxyXG5mdW5jdGlvbiB0YXNrRG9uZUJ1dHRvbkNsaWNrSGFuZGxlcihlKSB7XHJcbiAgICAvLyBzZWxlY3QgY3VycmVudCBjYXJkXHJcbmNvbnN0IGN1cnJlbnRDYXJkID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcclxuICAgIC8vIHRvZ2dsZSBjbGFzcyBcIi5kb25lXCIgdG8gdGhlIGNhcmQgKHZpc3VhbClcclxuY3VycmVudENhcmQuY2xhc3NMaXN0LnRvZ2dsZShcImRvbmVcIik7XHJcbiAgICAvLyBzZWxlY3QgdGhlIGNvcnJlc3BvbmRpbmcgdGFza1xyXG4gICAgICAgIC8vIGZpbmRpbmcgdGhlIGNhdGVnb3J5XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2F0LWhlYWRpbmdcIik7ICAgICBcclxuICAgIGNvbnN0IGluZGV4ID0gdGFza0xpc3QuY2F0ZWdvcmllcy5maW5kSW5kZXgoKGNhdGVnb3J5KSA9PiBjYXRlZ29yeS5uYW1lID09PSB0aXRsZS50ZXh0Q29udGVudCk7XHJcbiAgICBjb25zb2xlLmxvZyhpbmRleCk7XHJcbiAgICBjb25zdCBjYXQgPSB0YXNrTGlzdC5jYXRlZ29yaWVzW2luZGV4XTtcclxuICAgICAgICAvLyBmaW5kaW5nIHRoZSB0YXNrXHJcbiAgICBjb25zdCB0YXNrSW5kZXggPSBjYXQudGFza3MuZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLnRpdGxlID09PSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQudGV4dENvbnRlbnQudHJpbSgpKTtcclxuICAgIGNvbnN0IHRhc2sgPSBjYXQudGFza3NbdGFza0luZGV4XTtcclxuICAgIC8vIHRvZ2dsZSB0YXNrIHN0YXR1c1xyXG4gICAgdGFzay50b2dnbGVUYXNrU3RhdHVzKCk7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=