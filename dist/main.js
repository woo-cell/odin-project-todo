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
        const task = new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Task(`${taskTitle.value}`,`${taskDescription.value}`,`${taskDueDate.value}`);
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
        taskDueDate.textContent = task.dueDate;
    
        const editTaskBtn = document.createElement("button");
        editTaskBtn.classList.add("edit-task-btn");
        editTaskBtn.textContent = "Edit task";
    
        const deleteTaskBtn = document.createElement("button");
        deleteTaskBtn.classList.add("delete-task-btn");
        deleteTaskBtn.textContent = "Delete task";
        deleteTaskBtn.addEventListener("click",deleteTaskButtonClickHandler);
    
        card.appendChild(taskTitle);
        card.appendChild(taskDescription);
        card.appendChild(taskDueDate);
        card.appendChild(editTaskBtn);
        card.appendChild(deleteTaskBtn);
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNoREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05rRDtBQUNsRDtBQUNBLHFCQUFxQiwrQ0FBUTtBQUM3Qix5QkFBeUIsK0NBQVE7QUFDakMsMEJBQTBCLCtDQUFRO0FBQ2xDLDZCQUE2QiwrQ0FBUTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMkNBQUk7QUFDdEIsa0JBQWtCLDJDQUFJO0FBQ3RCLGtCQUFrQiwyQ0FBSTtBQUN0QixrQkFBa0IsMkNBQUk7QUFDdEIsa0JBQWtCLDJDQUFJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxFQUFFLGFBQWE7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLCtDQUFRLElBQUksZUFBZTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw4Q0FBOEM7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMkNBQUksSUFBSSxnQkFBZ0IsS0FBSyxzQkFBc0IsS0FBSyxrQkFBa0I7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUYXNrTGlzdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRDYXRlZ29yeShjYXRlZ29yeSkge1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVDYXRlZ29yeShuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gdGhpcy5jYXRlZ29yaWVzLmZpbHRlcigoY2F0ZWdvcnkpID0+IGNhdGVnb3J5Lm5hbWUgIT09IG5hbWUpOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jbGFzcyBDYXRlZ29yeSB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUYXNrKHRhc2spIHtcclxuICAgICAgICBjb25zdCB0YXNrRXhpc3QgPSB0aGlzLnRhc2tzLnNvbWUoKHQpID0+IHQudGl0bGUgPT09IHRhc2sudGl0bGUpO1xyXG4gICAgICAgIGlmICghdGFza0V4aXN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTsgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVGFzayh0aXRsZSkge1xyXG4gICAgICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay50aXRsZSAhPT0gdGl0bGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBUYXNrIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVUYXNrU3RhdHVzKCkge1xyXG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gIXRoaXMuY29tcGxldGVkO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7VGFza0xpc3QsQ2F0ZWdvcnksVGFza30iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7VGFza0xpc3QsQ2F0ZWdvcnksVGFza30gZnJvbSBcIi4vbG9naWMuanNcIjtcclxuXHJcbmNvbnN0IHRhc2tMaXN0ID0gbmV3IFRhc2tMaXN0KCk7XHJcbmNvbnN0IHdvcmtDYXRlZ29yeSA9IG5ldyBDYXRlZ29yeShcIndvcmtcIik7XHJcbmNvbnN0IHN0dWR5Q2F0ZWdvcnkgPSBuZXcgQ2F0ZWdvcnkoXCJzdHVkeVwiKTtcclxuY29uc3QgcGVyc29uYWxDYXRlZ29yeSA9IG5ldyBDYXRlZ29yeShcInBlcnNvbmFsXCIpO1xyXG50YXNrTGlzdC5hZGRDYXRlZ29yeSh3b3JrQ2F0ZWdvcnkpO1xyXG50YXNrTGlzdC5hZGRDYXRlZ29yeShzdHVkeUNhdGVnb3J5KTtcclxudGFza0xpc3QuYWRkQ2F0ZWdvcnkocGVyc29uYWxDYXRlZ29yeSk7XHJcblxyXG5cclxuLy8gY3JlYXRpbmcgc29tZSB0YXNrIGluc3RhbmNlc1xyXG5jb25zdCB0YXNrMSA9IG5ldyBUYXNrKFwiVGFzayAxXCIsIFwiRGVzY3JpcHRpb24gb2YgVGFzayAxXCIsIFwiMjAyMy0wMS0wMVwiKTtcclxuY29uc3QgdGFzazIgPSBuZXcgVGFzayhcIlRhc2sgMlwiLCBcIkRlc2NyaXB0aW9uIG9mIFRhc2sgMlwiLCBcIjIwMjMtMDItMDFcIik7XHJcbmNvbnN0IHRhc2szID0gbmV3IFRhc2soXCJUYXNrIDNcIiwgXCJEZXNjcmlwdGlvbiBvZiBUYXNrIDNcIiwgXCIyMDIzLTAzLTAxXCIpO1xyXG5jb25zdCB0YXNrNCA9IG5ldyBUYXNrKFwiVGFzayA0XCIsIFwiRGVzY3JpcHRpb24gb2YgVGFzayA0XCIsIFwiMjAyMy0wNC0wMVwiKTtcclxuY29uc3QgdGFzazUgPSBuZXcgVGFzayhcIlRhc2sgNVwiLCBcIkRlc2NyaXB0aW9uIG9mIFRhc2sgNVwiLCBcIjIwMjMtMDUtMDFcIik7XHJcbndvcmtDYXRlZ29yeS5hZGRUYXNrKHRhc2sxKTtcclxud29ya0NhdGVnb3J5LmFkZFRhc2sodGFzazIpO1xyXG5cclxuXHJcbi8vcmV0cmlldmUgdGhlIGNvbnRlbnQgZWxlbWVudFxyXG5jb25zdCBjb250ZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcclxuXHJcblxyXG4vLy8vIGNhdGVnb3JpZXMgVUlcclxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xyXG5jb25zdCBoZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbmhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJUTyBETyBBUFBcIjtcclxuaGVhZGVyRWxlbWVudC5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XHJcbmNvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKGhlYWRlckVsZW1lbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XHJcbiAgICBjb25zdCBmb290ZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuICAgIGNvbnN0IGZvb3RlclBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgZm9vdGVyUGFyYS5pbm5lckhUTUwgPSBgJmNvcHk7ICR7Y3VycmVudFllYXJ9IFdvby1DZWxsYDtcclxuICAgIGZvb3RlckVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9vdGVyUGFyYSk7XHJcbiAgICBjb250ZW50RWxlbWVudC5hcHBlbmRDaGlsZChmb290ZXJFbGVtZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcclxuICAgIGNvbnN0IG1haW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XHJcbiAgICBtYWluRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVDYXRlZ29yeUNvbnRhaW5lcigpKTtcclxuICAgIG1haW5FbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tDb250YWluZXIoKSk7XHJcbiAgICBjb250ZW50RWxlbWVudC5hcHBlbmRDaGlsZChtYWluRWxlbWVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3J5Q29udGFpbmVyKCkge1xyXG4gICAgY29uc3QgY2F0ZWdvcnlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2F0ZWdvcnlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5LWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IGNhdGVnb3J5UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY2F0ZWdvcnlQYXJhLnRleHRDb250ZW50ID0gXCJZb3VyIGNhdGVnb3JpZXNcIjtcclxuICAgIGNvbnN0IGNhdGVnb3J5TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIGNhdGVnb3J5Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhdGVnb3J5UGFyYSk7XHJcbiAgICBjYXRlZ29yeUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXRlZ29yeUxpc3QpO1xyXG4gICAgcmV0dXJuIGNhdGVnb3J5Q29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrQ29udGFpbmVyKCkge1xyXG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lclwiKTtcclxuICAgIHJldHVybiB0YXNrQ29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDYXRlZ29yeUJ1dHRvbigpIHtcclxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhdGVnb3J5LWNvbnRhaW5lciA+IHVsXCIpO1xyXG4gICAgY29uc3QgYWRkQ2F0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGFkZENhdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLWNhdGVnb3J5XCIpO1xyXG4gICAgYWRkQ2F0QnRuLnRleHRDb250ZW50ID0gXCJBRERcIjtcclxuICAgIGxpc3QuYXBwZW5kQ2hpbGQoYWRkQ2F0QnRuKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ2F0ZWdvcnlUb0NhdGVnb3J5TGlzdChjYXRlZ29yeSkge1xyXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2F0ZWdvcnktY29udGFpbmVyID4gdWxcIik7XHJcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGxpc3RJdGVtLmlubmVySFRNTCA9IGA8YSBocmVmPVwiI1wiIGNsYXNzPVwibGlua1wiPiR7Y2F0ZWdvcnkubmFtZX08L2E+PGJ1dHRvbiBjbGFzcz1cImRlbGV0ZS1jYXQtYnRuXCI+ZGVsZXRlPC9idXR0b24+YDtcclxuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xyXG5cclxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byB0aGUgbmV3IGNhdGVnb3J5IGxpbmtcclxuICAgIGNvbnN0IGxpbmsgPSBsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKFwiLmxpbmtcIik7XHJcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGFza0xpc3QuY2F0ZWdvcmllcy5maW5kSW5kZXgoKGNhdGVnb3J5KSA9PiBjYXRlZ29yeS5uYW1lID09PSBlLnRhcmdldC50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgc2hvd0NvcnJlc3BvbmRpbmdUYXNrcyh0YXNrTGlzdC5jYXRlZ29yaWVzW2luZGV4XSk7XHJcbiAgICAgICAgY29uc3QgZWwgPSBlLnRhcmdldDtcclxuICAgICAgICBhY3RpdmF0ZUNsYXNzKGVsKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRlbGV0ZUJ0bkV2ZW50TGlzdGVuZXIoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWN0aXZhdGVDbGFzcyhlbCkge1xyXG4gICAgY29uc3Qgc2libGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpbmtcIik7XHJcbiAgICBzaWJsaW5ncy5mb3JFYWNoKHNpYmxpbmcgPT4gc2libGluZy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLWxpbmtcIikpO1xyXG4gICAgZWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1saW5rXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplQ2F0ZWdvcmllcygpIHtcclxuICAgIGFkZENhdGVnb3J5QnV0dG9uKCk7XHJcbiAgICBhZGRDYXRlZ29yeVRvQ2F0ZWdvcnlMaXN0KHdvcmtDYXRlZ29yeSk7XHJcbiAgICBhZGRDYXRlZ29yeVRvQ2F0ZWdvcnlMaXN0KHN0dWR5Q2F0ZWdvcnkpO1xyXG4gICAgYWRkQ2F0ZWdvcnlUb0NhdGVnb3J5TGlzdChwZXJzb25hbENhdGVnb3J5KTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVUYXNrQ29udGFpbmVyKCkge1xyXG4gICAgY29uc3QgdGFza0NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGFpbmVyXCIpO1xyXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdGV4dC50ZXh0Q29udGVudCA9IFwiQ2xpY2sgb24gYSBjYXRlZ29yeSB0byBzaG93IHRoZSBhc3NvY2lhdGVkIHRhc2tzXCI7XHJcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0XCIpO1xyXG4gICAgdGFza0NvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVTY3JlZW4oKSB7XHJcbiAgICBjcmVhdGVIZWFkZXIoKTtcclxuICAgIGNyZWF0ZU1haW4oKTtcclxuICAgIGluaXRpYWxpemVDYXRlZ29yaWVzKCk7XHJcbiAgICBjcmVhdGVGb290ZXIoKTtcclxuICAgIGluaXRpYWxpemVUYXNrQ29udGFpbmVyKCk7XHJcblxyXG59XHJcblxyXG5pbml0aWFsaXplU2NyZWVuKCk7XHJcblxyXG4vLyBjYXRlZ29yaWVzIGV2ZW50IGxpc3RlbmVyXHJcbmNvbnN0IGFkZENhdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWNhdGVnb3J5XCIpO1xyXG5jb25zdCBhZGRDYXREaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1jYXQtZGlhbG9nXCIpO1xyXG5jb25zdCBjYXRUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2F0LXRpdGxlXCIpO1xyXG5jb25zdCBjbG9zZUNhdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtYWRkLWNhdC1kaWFsb2dcIik7XHJcbmNvbnN0IGFkZENhdFRvTGlzdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLWNhdC1idG4tZGlhbG9nXCIpO1xyXG5cclxuXHJcbmFkZENhdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgYWRkQ2F0RGlhbG9nLnNob3dNb2RhbCgpO1xyXG59KTtcclxuXHJcbmNsb3NlQ2F0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBhZGRDYXREaWFsb2cuY2xvc2UoKTtcclxuICAgIGNhdFRpdGxlLnZhbHVlID0gXCJcIjtcclxufSk7XHJcblxyXG5hZGRDYXRUb0xpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBjYXQgPSBuZXcgQ2F0ZWdvcnkoYCR7Y2F0VGl0bGUudmFsdWV9YCk7XHJcbiAgICBpZiAoY2F0VGl0bGUudmFsdWUpIHtcclxuICAgICAgICBhZGRDYXRlZ29yeVRvQ2F0ZWdvcnlMaXN0KGNhdCk7XHJcbiAgICAgICAgdGFza0xpc3QuYWRkQ2F0ZWdvcnkoY2F0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrTGlzdCk7XHJcbiAgICAgICAgYWRkQ2F0RGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgY2F0VGl0bGUudmFsdWUgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxufSk7XHJcblxyXG5cclxuZnVuY3Rpb24gZGVsZXRlQnRuRXZlbnRMaXN0ZW5lcigpIHtcclxuICAgIGNvbnN0IGRlbGV0ZUNhdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlLWNhdC1idG5cIik7XHJcbiAgICBkZWxldGVDYXRCdG4uZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBidG5BcnIgPSBBcnJheS5mcm9tKGRlbGV0ZUNhdEJ0bik7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gYnRuQXJyLmluZGV4T2YoZS50YXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgLy8gcmV0cmlldmUgYWxsIGxpbmtzXHJcbiAgICAgICAgICAgIGNvbnN0IGFzc29jaWF0ZWRMaW5rID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5maXJzdENoaWxkO1xyXG4gICAgICAgICAgICAvLyByZWZyZXNoIHRhc2stY29udGFpbmVyIG9ubHkgaWYgdGhlIGRlbGV0ZWQgbGluayBpcyBhY3RpdmVcclxuICAgICAgICAgICAgaWYgKGFzc29jaWF0ZWRMaW5rLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1saW5rXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVDYXRFbGVtZW50KGUpXHJcbiAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBpbml0aWFsaXplVGFza0NvbnRhaW5lcigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlQ2F0RWxlbWVudChlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc29sZS5sb2codGFza0xpc3QpO1xyXG5cclxuZnVuY3Rpb24gZGVsZXRlQ2F0RWxlbWVudChlKSB7XHJcbiAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgdGFza0xpc3QuZGVsZXRlQ2F0ZWdvcnkoYCR7ZS50YXJnZXQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLnRleHRDb250ZW50fWApO1xyXG4gICAgY29uc29sZS5sb2codGFza0xpc3QpO1xyXG59XHJcblxyXG4vLyByZWZyZXNoIHRoZSB0YXNrLWNvbnRhaW5lciBzZWN0aW9uIHdoZW4gY2xpY2tpbmcgb24gYSBjYXRlZ29yeVxyXG5jb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lclwiKTtcclxuZnVuY3Rpb24gc2hvd0NvcnJlc3BvbmRpbmdUYXNrcyhjYXRlZ29yeSkge1xyXG4gICAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgY3JlYXRlVGFza3NIZWFkaW5nKGNhdGVnb3J5KTtcclxuICAgIGNyZWF0ZUFkZFRhc2tFbGVtZW50KCk7XHJcbiAgICBjcmVhdGVUYXNrQ2FyZHNDb250YWluZXJzKCk7XHJcbiAgICBjcmVhdGVUYXNrQ2FyZHMoY2F0ZWdvcnkpO1xyXG4gICAgdGFza0V2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrc0hlYWRpbmcoY2F0ZWdvcnkpIHtcclxuICAgIGNvbnN0IGNhdEhlYWRpbmdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGNhdEhlYWRpbmdUaXRsZS5jbGFzc0xpc3QuYWRkKFwiY2F0LWhlYWRpbmdcIik7XHJcbiAgICBjYXRIZWFkaW5nVGl0bGUudGV4dENvbnRlbnQgPSBjYXRlZ29yeS5uYW1lO1xyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXRIZWFkaW5nVGl0bGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBZGRUYXNrRWxlbWVudCgpIHtcclxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stYnRuXCIpO1xyXG4gICAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9IFwiQWRkIE5ldyBUYXNrXCI7XHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrQ2FyZHNDb250YWluZXJzKCkge1xyXG4gICAgY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FyZHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stY2FyZC1jb250YWluZXJcIik7XHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRzQ29udGFpbmVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFza0NhcmRzKGNhdGVnb3J5KSB7XHJcbiAgICBjYXRlZ29yeS50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgYWRkVGFza0NhcmQodGFzayk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gdGFza3MgZXZlbnRzIGxpc3RlbmVyc1xyXG5mdW5jdGlvbiB0YXNrRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBjb25zdCBhZGRUYXNrRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1kaWFsb2dcIik7XHJcbiAgICBjb25zdCBhZGROZXdUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1idG5cIik7XHJcbiAgICBjb25zdCBjbG9zZUFkZFRhc2tEaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLWFkZC10YXNrLWRpYWxvZ1wiKTtcclxuICAgIGNvbnN0IGFkZFRhc2tCdG5EaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrLWJ0bi1kaWFsb2dcIik7XHJcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stdGl0bGVcIik7XHJcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGVzY3JpcHRpb25cIik7XHJcbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kdWUtZGF0ZVwiKTtcclxuXHJcbiAgICAvLyBhZGQgbmV3IHRhc2sgZXZlbnQgbGlzdGVuZXJcclxuICAgIGFkZE5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBhZGRUYXNrRGlhbG9nLnNob3dNb2RhbCgpO1xyXG4gICAgICAgIHRhc2tUaXRsZS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcclxuICAgICAgICB0YXNrRHVlRGF0ZS52YWx1ZSA9IFwiXCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjbG9zZSBcImFkZCBuZXcgdGFza1wiIGRpYWxvZ1xyXG4gICAgY2xvc2VBZGRUYXNrRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgYWRkVGFza0RpYWxvZy5jbG9zZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYWRkIG5ldyB0YXNrIGRpYWxvZ1xyXG4gICAgYWRkVGFza0J0bkRpYWxvZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKGAke3Rhc2tUaXRsZS52YWx1ZX1gLGAke3Rhc2tEZXNjcmlwdGlvbi52YWx1ZX1gLGAke3Rhc2tEdWVEYXRlLnZhbHVlfWApO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXQtaGVhZGluZ1wiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aXRsZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGl0bGUudGV4dENvbnRlbnQpOyAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0YXNrTGlzdC5jYXRlZ29yaWVzLmZpbmRJbmRleCgoY2F0ZWdvcnkpID0+IGNhdGVnb3J5Lm5hbWUgPT09IHRpdGxlLnRleHRDb250ZW50KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XHJcbiAgICAgICAgY29uc3QgY2F0ID0gdGFza0xpc3QuY2F0ZWdvcmllc1tpbmRleF07XHJcbiAgICAgICAgY2F0LmFkZFRhc2sodGFzayk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY2F0KTtcclxuICAgICAgICBhZGRUYXNrQ2FyZCh0YXNrKTtcclxuICAgICAgICBhZGRUYXNrRGlhbG9nLmNsb3NlKCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVGFza0NhcmQodGFzaykge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNhcmQtY29udGFpbmVyXCIpO1xyXG4gICAgY29uc3QgZXhpc3RpbmdUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZFwiKTtcclxuXHJcbiAgICAvL2NoZWNrIGlmIHRoZSB0YXNrIGFscmVhZHkgZXhpc3RzXHJcbiAgICBjb25zdCB0YXNrRXhpc3RzID0gQXJyYXkuZnJvbShleGlzdGluZ1Rhc2tzKS5zb21lKChleGlzdGluZ1Rhc2spID0+IHtcclxuICAgICAgICByZXR1cm4gdGFzay50aXRsZSA9PT0gZXhpc3RpbmdUYXNrLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay10aXRsZVwiKS50ZXh0Q29udGVudDtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGFkZCB0aGUgY2FyZCBpZiB0aGUgdGFrcyBkb2Vzbid0IGV4aXN0IHlldFxyXG4gICAgaWYgKCF0YXNrRXhpc3RzKSB7XHJcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXRpdGxlXCIpO1xyXG4gICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlc2NyaXB0aW9uXCIpO1xyXG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICB0YXNrRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwidGFzay1kdWUtZGF0ZVwiKTtcclxuICAgICAgICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGVkaXRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBlZGl0VGFza0J0bi5jbGFzc0xpc3QuYWRkKFwiZWRpdC10YXNrLWJ0blwiKTtcclxuICAgICAgICBlZGl0VGFza0J0bi50ZXh0Q29udGVudCA9IFwiRWRpdCB0YXNrXCI7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBkZWxldGVUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBkZWxldGVUYXNrQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtdGFzay1idG5cIik7XHJcbiAgICAgICAgZGVsZXRlVGFza0J0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlIHRhc2tcIjtcclxuICAgICAgICBkZWxldGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGRlbGV0ZVRhc2tCdXR0b25DbGlja0hhbmRsZXIpO1xyXG4gICAgXHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGVkaXRUYXNrQnRuKTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2tCdG4pO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiAgICAvLyBkZWxldGUgdGFzayBidXR0b24gbGlzdGVuZXJcclxuZnVuY3Rpb24gZGVsZXRlVGFza0J1dHRvbkNsaWNrSGFuZGxlcihlKSB7XHJcbiAgICBjb25zdCBjYXROYW1lID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC50ZXh0Q29udGVudC50cmltKCk7XHJcbiAgICBjb25zdCB0YXNrTmFtZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC50ZXh0Q29udGVudC50cmltKClcclxuICAgIGNvbnN0IGNhdEluZGV4ID0gdGFza0xpc3QuY2F0ZWdvcmllcy5maW5kSW5kZXgoKGNhdCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBjYXQubmFtZS50cmltKCkgPT09IGNhdE5hbWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0YXNrTmFtZSk7XHJcbiAgICB0YXNrTGlzdC5jYXRlZ29yaWVzW2NhdEluZGV4XS5kZWxldGVUYXNrKHRhc2tOYW1lKTtcclxuICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICBjb25zb2xlLmxvZyh0YXNrTGlzdCk7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=