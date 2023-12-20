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
    // listItem.innerHTML = `<a href="#" class="link">${category.name}</a><button class="delete-cat-btn">delete</button>`;
    // create cat link
    const catLink = document.createElement("a");
    catLink.setAttribute("href", "#");
    catLink.classList.add("link");
    catLink.textContent = `${category.name}`;
    // Add event listener to the new category link
    catLink.addEventListener("click", (e) => {
        e.stopPropagation();
        const index = taskList.categories.findIndex((category) => category.name === e.target.textContent);
        showCorrespondingTasks(taskList.categories[index]);
        const el = e.target;
        activateClass(el);
    });

    // create edit cat btn
    const catEditBtn = document.createElement("button");
    catEditBtn.classList.add("edit-cat-btn");
    catEditBtn.textContent = "Edit category";
    // add event listener to new edit cat btn
    catEditBtn.addEventListener("click", editCategoryEventHandler);


    // create delete cat btn
    const catDeletebtn = document.createElement("button");
    catDeletebtn.classList.add("delete-cat-btn");
    catDeletebtn.textContent = "Delete category";
    // add delete btn listener
    catDeletebtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const deleteCatBtn = document.querySelectorAll(".delete-cat-btn");
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
        console.log(taskList);
    });


    listItem.appendChild(catLink);
    listItem.appendChild(catEditBtn);
    listItem.appendChild(catDeletebtn);
    list.appendChild(listItem);



    // deleteBtnEventListener();
}

function editCategoryEventHandler(e) {
    e.stopPropagation();
    console.log("you clicked on edit");
    // retrieve all the inputs and buttons from modal
    const editModal = document.querySelector(".e-cat-dialog");
    const editCatTitle = document.getElementById("e-cat-title");
    const closeEditCatBtn = document.getElementById("close-e-cat-dialog");
    const saveChangesBtn = document.getElementById("e-cat-btn-dialog");
    
    // retrieve the link element
    const linkElement = e.target.parentElement.firstChild;

    // show the modal with current value as value
    const currentTitleValue = e.target.parentElement.firstChild.textContent.trim();
    editCatTitle.value = currentTitleValue;
    editModal.showModal();

    closeEditCatBtn.addEventListener("click", () => {
        editModal.close();
    });

    saveChangesBtn.addEventListener("click", saveChangesHandler);

    function saveChangesHandler(event) {
        event.preventDefault();
        event.stopPropagation();
        const newTitle = document.getElementById("e-cat-title");
        // add input value to tasklist
        const links = document.querySelectorAll(".link");
        const linkArr = Array.from(links);
        const index = linkArr.findIndex((link) => link.textContent.trim() === currentTitleValue);
        let ctgrName = taskList.categories[index].name;
        taskList.categories[index].name = newTitle.value;
        ctgrName = newTitle.value;
        console.log(ctgrName);
        console.log(taskList);
        // update the link accordingly
        linkElement.textContent = `${ctgrName}`;
        editModal.close();
        // refresh task container
        showCorrespondingTasks(taskList.categories[index]);


        // Remove the event listener after it's been executed
        saveChangesBtn.removeEventListener("click", saveChangesHandler);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2pEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmtEO0FBQ2xEO0FBQ0E7QUFDQSxxQkFBcUIsK0NBQVE7QUFDN0IseUJBQXlCLCtDQUFRO0FBQ2pDLDBCQUEwQiwrQ0FBUTtBQUNsQyw2QkFBNkIsK0NBQVE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDJDQUFJO0FBQ3RCLGtCQUFrQiwyQ0FBSTtBQUN0QixrQkFBa0IsMkNBQUk7QUFDdEIsa0JBQWtCLDJDQUFJO0FBQ3RCLGtCQUFrQiwyQ0FBSTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsRUFBRSxhQUFhO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxjQUFjO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFNBQVM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsK0NBQVEsSUFBSSxlQUFlO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDhDQUE4QztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDJDQUFJLElBQUksZ0JBQWdCLEtBQUssc0JBQXNCLEtBQUssa0JBQWtCLEtBQUssbUJBQW1CO0FBQy9IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGFBQWE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsY0FBYztBQUNsRSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxhQUFhO0FBQ2hELG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUYXNrTGlzdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRDYXRlZ29yeShjYXRlZ29yeSkge1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVDYXRlZ29yeShuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gdGhpcy5jYXRlZ29yaWVzLmZpbHRlcigoY2F0ZWdvcnkpID0+IGNhdGVnb3J5Lm5hbWUgIT09IG5hbWUpOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jbGFzcyBDYXRlZ29yeSB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUYXNrKHRhc2spIHtcclxuICAgICAgICBjb25zdCB0YXNrRXhpc3QgPSB0aGlzLnRhc2tzLnNvbWUoKHQpID0+IHQudGl0bGUgPT09IHRhc2sudGl0bGUpO1xyXG4gICAgICAgIGlmICghdGFza0V4aXN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTsgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVGFzayh0aXRsZSkge1xyXG4gICAgICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay50aXRsZSAhPT0gdGl0bGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBUYXNrIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRvZ2dsZVRhc2tTdGF0dXMoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSAhdGhpcy5jb21wbGV0ZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IHtUYXNrTGlzdCxDYXRlZ29yeSxUYXNrfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtUYXNrTGlzdCxDYXRlZ29yeSxUYXNrfSBmcm9tIFwiLi9sb2dpYy5qc1wiO1xyXG5cclxuXHJcbmNvbnN0IHRhc2tMaXN0ID0gbmV3IFRhc2tMaXN0KCk7XHJcbmNvbnN0IHdvcmtDYXRlZ29yeSA9IG5ldyBDYXRlZ29yeShcIndvcmtcIik7XHJcbmNvbnN0IHN0dWR5Q2F0ZWdvcnkgPSBuZXcgQ2F0ZWdvcnkoXCJzdHVkeVwiKTtcclxuY29uc3QgcGVyc29uYWxDYXRlZ29yeSA9IG5ldyBDYXRlZ29yeShcInBlcnNvbmFsXCIpO1xyXG50YXNrTGlzdC5hZGRDYXRlZ29yeSh3b3JrQ2F0ZWdvcnkpO1xyXG50YXNrTGlzdC5hZGRDYXRlZ29yeShzdHVkeUNhdGVnb3J5KTtcclxudGFza0xpc3QuYWRkQ2F0ZWdvcnkocGVyc29uYWxDYXRlZ29yeSk7XHJcblxyXG5cclxuLy8gY3JlYXRpbmcgc29tZSB0YXNrIGluc3RhbmNlc1xyXG5jb25zdCB0YXNrMSA9IG5ldyBUYXNrKFwiVGFzayAxXCIsIFwiRGVzY3JpcHRpb24gb2YgVGFzayAxXCIsIFwiMjAyMy0wMS0wMVwiKTtcclxuY29uc3QgdGFzazIgPSBuZXcgVGFzayhcIlRhc2sgMlwiLCBcIkRlc2NyaXB0aW9uIG9mIFRhc2sgMlwiLCBcIjIwMjMtMDItMDFcIik7XHJcbmNvbnN0IHRhc2szID0gbmV3IFRhc2soXCJUYXNrIDNcIiwgXCJEZXNjcmlwdGlvbiBvZiBUYXNrIDNcIiwgXCIyMDIzLTAzLTAxXCIpO1xyXG5jb25zdCB0YXNrNCA9IG5ldyBUYXNrKFwiVGFzayA0XCIsIFwiRGVzY3JpcHRpb24gb2YgVGFzayA0XCIsIFwiMjAyMy0wNC0wMVwiKTtcclxuY29uc3QgdGFzazUgPSBuZXcgVGFzayhcIlRhc2sgNVwiLCBcIkRlc2NyaXB0aW9uIG9mIFRhc2sgNVwiLCBcIjIwMjMtMDUtMDFcIik7XHJcbndvcmtDYXRlZ29yeS5hZGRUYXNrKHRhc2sxKTtcclxud29ya0NhdGVnb3J5LmFkZFRhc2sodGFzazIpO1xyXG5cclxuXHJcbi8vcmV0cmlldmUgdGhlIGNvbnRlbnQgZWxlbWVudFxyXG5jb25zdCBjb250ZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcclxuXHJcblxyXG4vLy8vIGNhdGVnb3JpZXMgVUlcclxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xyXG5jb25zdCBoZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbmhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJUTyBETyBBUFBcIjtcclxuaGVhZGVyRWxlbWVudC5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XHJcbmNvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKGhlYWRlckVsZW1lbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XHJcbiAgICBjb25zdCBmb290ZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuICAgIGNvbnN0IGZvb3RlclBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgZm9vdGVyUGFyYS5pbm5lckhUTUwgPSBgJmNvcHk7ICR7Y3VycmVudFllYXJ9IFdvby1DZWxsYDtcclxuICAgIGZvb3RlckVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9vdGVyUGFyYSk7XHJcbiAgICBjb250ZW50RWxlbWVudC5hcHBlbmRDaGlsZChmb290ZXJFbGVtZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcclxuICAgIGNvbnN0IG1haW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XHJcbiAgICBtYWluRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVDYXRlZ29yeUNvbnRhaW5lcigpKTtcclxuICAgIG1haW5FbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tDb250YWluZXIoKSk7XHJcbiAgICBjb250ZW50RWxlbWVudC5hcHBlbmRDaGlsZChtYWluRWxlbWVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3J5Q29udGFpbmVyKCkge1xyXG4gICAgY29uc3QgY2F0ZWdvcnlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2F0ZWdvcnlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5LWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IGNhdGVnb3J5UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY2F0ZWdvcnlQYXJhLnRleHRDb250ZW50ID0gXCJZb3VyIGNhdGVnb3JpZXNcIjtcclxuICAgIGNvbnN0IGNhdGVnb3J5TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIGNhdGVnb3J5Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhdGVnb3J5UGFyYSk7XHJcbiAgICBjYXRlZ29yeUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXRlZ29yeUxpc3QpO1xyXG4gICAgcmV0dXJuIGNhdGVnb3J5Q29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrQ29udGFpbmVyKCkge1xyXG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lclwiKTtcclxuICAgIHJldHVybiB0YXNrQ29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDYXRlZ29yeUJ1dHRvbigpIHtcclxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhdGVnb3J5LWNvbnRhaW5lciA+IHVsXCIpO1xyXG4gICAgY29uc3QgYWRkQ2F0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGFkZENhdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLWNhdGVnb3J5XCIpO1xyXG4gICAgYWRkQ2F0QnRuLnRleHRDb250ZW50ID0gXCJBRERcIjtcclxuICAgIGxpc3QuYXBwZW5kQ2hpbGQoYWRkQ2F0QnRuKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ2F0ZWdvcnlUb0NhdGVnb3J5TGlzdChjYXRlZ29yeSkge1xyXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2F0ZWdvcnktY29udGFpbmVyID4gdWxcIik7XHJcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIC8vIGxpc3RJdGVtLmlubmVySFRNTCA9IGA8YSBocmVmPVwiI1wiIGNsYXNzPVwibGlua1wiPiR7Y2F0ZWdvcnkubmFtZX08L2E+PGJ1dHRvbiBjbGFzcz1cImRlbGV0ZS1jYXQtYnRuXCI+ZGVsZXRlPC9idXR0b24+YDtcclxuICAgIC8vIGNyZWF0ZSBjYXQgbGlua1xyXG4gICAgY29uc3QgY2F0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgY2F0TGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiI1wiKTtcclxuICAgIGNhdExpbmsuY2xhc3NMaXN0LmFkZChcImxpbmtcIik7XHJcbiAgICBjYXRMaW5rLnRleHRDb250ZW50ID0gYCR7Y2F0ZWdvcnkubmFtZX1gO1xyXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBuZXcgY2F0ZWdvcnkgbGlua1xyXG4gICAgY2F0TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGFza0xpc3QuY2F0ZWdvcmllcy5maW5kSW5kZXgoKGNhdGVnb3J5KSA9PiBjYXRlZ29yeS5uYW1lID09PSBlLnRhcmdldC50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgc2hvd0NvcnJlc3BvbmRpbmdUYXNrcyh0YXNrTGlzdC5jYXRlZ29yaWVzW2luZGV4XSk7XHJcbiAgICAgICAgY29uc3QgZWwgPSBlLnRhcmdldDtcclxuICAgICAgICBhY3RpdmF0ZUNsYXNzKGVsKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBlZGl0IGNhdCBidG5cclxuICAgIGNvbnN0IGNhdEVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgY2F0RWRpdEJ0bi5jbGFzc0xpc3QuYWRkKFwiZWRpdC1jYXQtYnRuXCIpO1xyXG4gICAgY2F0RWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiRWRpdCBjYXRlZ29yeVwiO1xyXG4gICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIHRvIG5ldyBlZGl0IGNhdCBidG5cclxuICAgIGNhdEVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRDYXRlZ29yeUV2ZW50SGFuZGxlcik7XHJcblxyXG5cclxuICAgIC8vIGNyZWF0ZSBkZWxldGUgY2F0IGJ0blxyXG4gICAgY29uc3QgY2F0RGVsZXRlYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGNhdERlbGV0ZWJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWNhdC1idG5cIik7XHJcbiAgICBjYXREZWxldGVidG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZSBjYXRlZ29yeVwiO1xyXG4gICAgLy8gYWRkIGRlbGV0ZSBidG4gbGlzdGVuZXJcclxuICAgIGNhdERlbGV0ZWJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUNhdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlLWNhdC1idG5cIik7XHJcbiAgICAgICAgY29uc3QgYnRuQXJyID0gQXJyYXkuZnJvbShkZWxldGVDYXRCdG4pO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gYnRuQXJyLmluZGV4T2YoZS50YXJnZXQpO1xyXG5cclxuICAgICAgICAvLyByZXRyaWV2ZSBhbGwgbGlua3NcclxuICAgICAgICBjb25zdCBhc3NvY2lhdGVkTGluayA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZDtcclxuICAgICAgICAvLyByZWZyZXNoIHRhc2stY29udGFpbmVyIG9ubHkgaWYgdGhlIGRlbGV0ZWQgbGluayBpcyBhY3RpdmVcclxuICAgICAgICBpZiAoYXNzb2NpYXRlZExpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlLWxpbmtcIikpIHtcclxuICAgICAgICAgICAgZGVsZXRlQ2F0RWxlbWVudChlKVxyXG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGluaXRpYWxpemVUYXNrQ29udGFpbmVyKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGVsZXRlQ2F0RWxlbWVudChlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrTGlzdCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY2F0TGluayk7XHJcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChjYXRFZGl0QnRuKTtcclxuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGNhdERlbGV0ZWJ0bik7XHJcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcclxuXHJcblxyXG5cclxuICAgIC8vIGRlbGV0ZUJ0bkV2ZW50TGlzdGVuZXIoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZWRpdENhdGVnb3J5RXZlbnRIYW5kbGVyKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhcInlvdSBjbGlja2VkIG9uIGVkaXRcIik7XHJcbiAgICAvLyByZXRyaWV2ZSBhbGwgdGhlIGlucHV0cyBhbmQgYnV0dG9ucyBmcm9tIG1vZGFsXHJcbiAgICBjb25zdCBlZGl0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmUtY2F0LWRpYWxvZ1wiKTtcclxuICAgIGNvbnN0IGVkaXRDYXRUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZS1jYXQtdGl0bGVcIik7XHJcbiAgICBjb25zdCBjbG9zZUVkaXRDYXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLWUtY2F0LWRpYWxvZ1wiKTtcclxuICAgIGNvbnN0IHNhdmVDaGFuZ2VzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlLWNhdC1idG4tZGlhbG9nXCIpO1xyXG4gICAgXHJcbiAgICAvLyByZXRyaWV2ZSB0aGUgbGluayBlbGVtZW50XHJcbiAgICBjb25zdCBsaW5rRWxlbWVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZDtcclxuXHJcbiAgICAvLyBzaG93IHRoZSBtb2RhbCB3aXRoIGN1cnJlbnQgdmFsdWUgYXMgdmFsdWVcclxuICAgIGNvbnN0IGN1cnJlbnRUaXRsZVZhbHVlID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLnRleHRDb250ZW50LnRyaW0oKTtcclxuICAgIGVkaXRDYXRUaXRsZS52YWx1ZSA9IGN1cnJlbnRUaXRsZVZhbHVlO1xyXG4gICAgZWRpdE1vZGFsLnNob3dNb2RhbCgpO1xyXG5cclxuICAgIGNsb3NlRWRpdENhdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGVkaXRNb2RhbC5jbG9zZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2F2ZUNoYW5nZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNhdmVDaGFuZ2VzSGFuZGxlcik7XHJcblxyXG4gICAgZnVuY3Rpb24gc2F2ZUNoYW5nZXNIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBjb25zdCBuZXdUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZS1jYXQtdGl0bGVcIik7XHJcbiAgICAgICAgLy8gYWRkIGlucHV0IHZhbHVlIHRvIHRhc2tsaXN0XHJcbiAgICAgICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpbmtcIik7XHJcbiAgICAgICAgY29uc3QgbGlua0FyciA9IEFycmF5LmZyb20obGlua3MpO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gbGlua0Fyci5maW5kSW5kZXgoKGxpbmspID0+IGxpbmsudGV4dENvbnRlbnQudHJpbSgpID09PSBjdXJyZW50VGl0bGVWYWx1ZSk7XHJcbiAgICAgICAgbGV0IGN0Z3JOYW1lID0gdGFza0xpc3QuY2F0ZWdvcmllc1tpbmRleF0ubmFtZTtcclxuICAgICAgICB0YXNrTGlzdC5jYXRlZ29yaWVzW2luZGV4XS5uYW1lID0gbmV3VGl0bGUudmFsdWU7XHJcbiAgICAgICAgY3Rnck5hbWUgPSBuZXdUaXRsZS52YWx1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjdGdyTmFtZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGFza0xpc3QpO1xyXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgbGluayBhY2NvcmRpbmdseVxyXG4gICAgICAgIGxpbmtFbGVtZW50LnRleHRDb250ZW50ID0gYCR7Y3Rnck5hbWV9YDtcclxuICAgICAgICBlZGl0TW9kYWwuY2xvc2UoKTtcclxuICAgICAgICAvLyByZWZyZXNoIHRhc2sgY29udGFpbmVyXHJcbiAgICAgICAgc2hvd0NvcnJlc3BvbmRpbmdUYXNrcyh0YXNrTGlzdC5jYXRlZ29yaWVzW2luZGV4XSk7XHJcblxyXG5cclxuICAgICAgICAvLyBSZW1vdmUgdGhlIGV2ZW50IGxpc3RlbmVyIGFmdGVyIGl0J3MgYmVlbiBleGVjdXRlZFxyXG4gICAgICAgIHNhdmVDaGFuZ2VzQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzYXZlQ2hhbmdlc0hhbmRsZXIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhY3RpdmF0ZUNsYXNzKGVsKSB7XHJcbiAgICBjb25zdCBzaWJsaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlua1wiKTtcclxuICAgIHNpYmxpbmdzLmZvckVhY2goc2libGluZyA9PiBzaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtbGlua1wiKSk7XHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWxpbmtcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVDYXRlZ29yaWVzKCkge1xyXG4gICAgYWRkQ2F0ZWdvcnlCdXR0b24oKTtcclxuICAgIGFkZENhdGVnb3J5VG9DYXRlZ29yeUxpc3Qod29ya0NhdGVnb3J5KTtcclxuICAgIGFkZENhdGVnb3J5VG9DYXRlZ29yeUxpc3Qoc3R1ZHlDYXRlZ29yeSk7XHJcbiAgICBhZGRDYXRlZ29yeVRvQ2F0ZWdvcnlMaXN0KHBlcnNvbmFsQ2F0ZWdvcnkpO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZVRhc2tDb250YWluZXIoKSB7XHJcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb250YWluZXJcIik7XHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gXCJDbGljayBvbiBhIGNhdGVnb3J5IHRvIHNob3cgdGhlIGFzc29jaWF0ZWQgdGFza3NcIjtcclxuICAgIHRleHQuY2xhc3NMaXN0LmFkZChcInRleHRcIik7XHJcbiAgICB0YXNrQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCh0ZXh0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZVNjcmVlbigpIHtcclxuICAgIGNyZWF0ZUhlYWRlcigpO1xyXG4gICAgY3JlYXRlTWFpbigpO1xyXG4gICAgaW5pdGlhbGl6ZUNhdGVnb3JpZXMoKTtcclxuICAgIGNyZWF0ZUZvb3RlcigpO1xyXG4gICAgaW5pdGlhbGl6ZVRhc2tDb250YWluZXIoKTtcclxuXHJcbn1cclxuXHJcbmluaXRpYWxpemVTY3JlZW4oKTtcclxuXHJcbi8vIGNhdGVnb3JpZXMgZXZlbnQgbGlzdGVuZXJcclxuY29uc3QgYWRkQ2F0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtY2F0ZWdvcnlcIik7XHJcbmNvbnN0IGFkZENhdERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWNhdC1kaWFsb2dcIik7XHJcbmNvbnN0IGNhdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXQtdGl0bGVcIik7XHJcbmNvbnN0IGNsb3NlQ2F0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1hZGQtY2F0LWRpYWxvZ1wiKTtcclxuY29uc3QgYWRkQ2F0VG9MaXN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtY2F0LWJ0bi1kaWFsb2dcIik7XHJcblxyXG5cclxuYWRkQ2F0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBhZGRDYXREaWFsb2cuc2hvd01vZGFsKCk7XHJcbn0pO1xyXG5cclxuY2xvc2VDYXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGFkZENhdERpYWxvZy5jbG9zZSgpO1xyXG4gICAgY2F0VGl0bGUudmFsdWUgPSBcIlwiO1xyXG59KTtcclxuXHJcbmFkZENhdFRvTGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGNhdCA9IG5ldyBDYXRlZ29yeShgJHtjYXRUaXRsZS52YWx1ZX1gKTtcclxuICAgIGlmIChjYXRUaXRsZS52YWx1ZSkge1xyXG4gICAgICAgIGFkZENhdGVnb3J5VG9DYXRlZ29yeUxpc3QoY2F0KTtcclxuICAgICAgICB0YXNrTGlzdC5hZGRDYXRlZ29yeShjYXQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0KTtcclxuICAgICAgICBhZGRDYXREaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICBjYXRUaXRsZS52YWx1ZSA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcblxyXG5mdW5jdGlvbiBkZWxldGVCdG5FdmVudExpc3RlbmVyKCkge1xyXG4gICAgY29uc3QgZGVsZXRlQ2F0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGUtY2F0LWJ0blwiKTtcclxuICAgIGRlbGV0ZUNhdEJ0bi5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ0bkFyciA9IEFycmF5LmZyb20oZGVsZXRlQ2F0QnRuKTtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBidG5BcnIuaW5kZXhPZihlLnRhcmdldCk7XHJcblxyXG4gICAgICAgICAgICAvLyByZXRyaWV2ZSBhbGwgbGlua3NcclxuICAgICAgICAgICAgY29uc3QgYXNzb2NpYXRlZExpbmsgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQ7XHJcbiAgICAgICAgICAgIC8vIHJlZnJlc2ggdGFzay1jb250YWluZXIgb25seSBpZiB0aGUgZGVsZXRlZCBsaW5rIGlzIGFjdGl2ZVxyXG4gICAgICAgICAgICBpZiAoYXNzb2NpYXRlZExpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlLWxpbmtcIikpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZUNhdEVsZW1lbnQoZSlcclxuICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGluaXRpYWxpemVUYXNrQ29udGFpbmVyKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVDYXRFbGVtZW50KGUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zb2xlLmxvZyh0YXNrTGlzdCk7XHJcblxyXG5mdW5jdGlvbiBkZWxldGVDYXRFbGVtZW50KGUpIHtcclxuICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB0YXNrTGlzdC5kZWxldGVDYXRlZ29yeShgJHtlLnRhcmdldC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQudGV4dENvbnRlbnR9YCk7XHJcbn1cclxuXHJcbi8vIHJlZnJlc2ggdGhlIHRhc2stY29udGFpbmVyIHNlY3Rpb24gd2hlbiBjbGlja2luZyBvbiBhIGNhdGVnb3J5XHJcbmNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGFpbmVyXCIpO1xyXG5mdW5jdGlvbiBzaG93Q29ycmVzcG9uZGluZ1Rhc2tzKGNhdGVnb3J5KSB7XHJcbiAgICB0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBjcmVhdGVUYXNrc0hlYWRpbmcoY2F0ZWdvcnkpO1xyXG4gICAgY3JlYXRlQWRkVGFza0VsZW1lbnQoKTtcclxuICAgIGNyZWF0ZVRhc2tDYXJkc0NvbnRhaW5lcnMoKTtcclxuICAgIGNyZWF0ZVRhc2tDYXJkcyhjYXRlZ29yeSk7XHJcbiAgICB0YXNrRXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tzSGVhZGluZyhjYXRlZ29yeSkge1xyXG4gICAgY29uc3QgY2F0SGVhZGluZ1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgY2F0SGVhZGluZ1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJjYXQtaGVhZGluZ1wiKTtcclxuICAgIGNhdEhlYWRpbmdUaXRsZS50ZXh0Q29udGVudCA9IGNhdGVnb3J5Lm5hbWU7XHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhdEhlYWRpbmdUaXRsZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFkZFRhc2tFbGVtZW50KCkge1xyXG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay1idG5cIik7XHJcbiAgICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gXCJBZGQgTmV3IFRhc2tcIjtcclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tDYXJkc0NvbnRhaW5lcnMoKSB7XHJcbiAgICBjb25zdCBjYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjYXJkc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1jYXJkLWNvbnRhaW5lclwiKTtcclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZHNDb250YWluZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrQ2FyZHMoY2F0ZWdvcnkpIHtcclxuICAgIGNhdGVnb3J5LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgICBhZGRUYXNrQ2FyZCh0YXNrKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyB0YXNrcyBldmVudHMgbGlzdGVuZXJzXHJcbmZ1bmN0aW9uIHRhc2tFdmVudExpc3RlbmVycygpIHtcclxuICAgIGNvbnN0IGFkZFRhc2tEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWRpYWxvZ1wiKTtcclxuICAgIGNvbnN0IGFkZE5ld1Rhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWJ0blwiKTtcclxuICAgIGNvbnN0IGNsb3NlQWRkVGFza0RpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtYWRkLXRhc2stZGlhbG9nXCIpO1xyXG4gICAgY29uc3QgYWRkVGFza0J0bkRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2stYnRuLWRpYWxvZ1wiKTtcclxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10aXRsZVwiKTtcclxuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXNjcmlwdGlvblwiKTtcclxuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWR1ZS1kYXRlXCIpO1xyXG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXByaW9yaXR5XCIpO1xyXG5cclxuICAgIC8vIGFkZCBuZXcgdGFzayBldmVudCBsaXN0ZW5lclxyXG4gICAgYWRkTmV3VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGFkZFRhc2tEaWFsb2cuc2hvd01vZGFsKCk7XHJcbiAgICAgICAgdGFza1RpdGxlLnZhbHVlID0gXCJcIjtcclxuICAgICAgICB0YXNrRGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIHRhc2tEdWVEYXRlLnZhbHVlID0gXCJcIjtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNsb3NlIFwiYWRkIG5ldyB0YXNrXCIgZGlhbG9nXHJcbiAgICBjbG9zZUFkZFRhc2tEaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBhZGRUYXNrRGlhbG9nLmNsb3NlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBhZGQgbmV3IHRhc2sgZGlhbG9nXHJcbiAgICBhZGRUYXNrQnRuRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAodGFza1RpdGxlLnZhbHVlICYmIHRhc2tEdWVEYXRlLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayhgJHt0YXNrVGl0bGUudmFsdWV9YCxgJHt0YXNrRGVzY3JpcHRpb24udmFsdWV9YCxgJHt0YXNrRHVlRGF0ZS52YWx1ZX1gLGAke3Rhc2tQcmlvcml0eS52YWx1ZX1gKTtcclxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhdC1oZWFkaW5nXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aXRsZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRpdGxlLnRleHRDb250ZW50KTsgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRhc2tMaXN0LmNhdGVnb3JpZXMuZmluZEluZGV4KChjYXRlZ29yeSkgPT4gY2F0ZWdvcnkubmFtZSA9PT0gdGl0bGUudGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhdCA9IHRhc2tMaXN0LmNhdGVnb3JpZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICBjYXQuYWRkVGFzayh0YXNrKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY2F0KTtcclxuICAgICAgICAgICAgYWRkVGFza0NhcmQodGFzayk7XHJcbiAgICAgICAgICAgIGFkZFRhc2tEaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVGFza0NhcmQodGFzaykge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNhcmQtY29udGFpbmVyXCIpO1xyXG4gICAgY29uc3QgZXhpc3RpbmdUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZFwiKTtcclxuXHJcbiAgICAvL2NoZWNrIGlmIHRoZSB0YXNrIGFscmVhZHkgZXhpc3RzXHJcbiAgICBjb25zdCB0YXNrRXhpc3RzID0gQXJyYXkuZnJvbShleGlzdGluZ1Rhc2tzKS5zb21lKChleGlzdGluZ1Rhc2spID0+IHtcclxuICAgICAgICByZXR1cm4gdGFzay50aXRsZSA9PT0gZXhpc3RpbmdUYXNrLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay10aXRsZVwiKS50ZXh0Q29udGVudDtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGFkZCB0aGUgY2FyZCBpZiB0aGUgdGFrcyBkb2Vzbid0IGV4aXN0IHlldFxyXG4gICAgaWYgKCF0YXNrRXhpc3RzKSB7XHJcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXRpdGxlXCIpO1xyXG4gICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlc2NyaXB0aW9uXCIpO1xyXG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICB0YXNrRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwidGFzay1kdWUtZGF0ZVwiKTtcclxuICAgICAgICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IGBEdWUgRGF0ZTogJHt0YXNrLmR1ZURhdGV9YDtcclxuXHJcbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXByaW9yaXR5XCIpO1xyXG4gICAgICAgIGlmICh0YXNrLnByaW9yaXR5KSB7XHJcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHt0YXNrLnByaW9yaXR5fWA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiB1bnNldGA7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGVkaXRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBlZGl0VGFza0J0bi5jbGFzc0xpc3QuYWRkKFwiZWRpdC10YXNrLWJ0blwiKTtcclxuICAgICAgICBlZGl0VGFza0J0bi50ZXh0Q29udGVudCA9IFwiRWRpdCB0YXNrXCI7XHJcbiAgICAgICAgZWRpdFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZWRpdFRhc2tCdXR0b25DbGlja0hhbmRsZXIpO1xyXG5cclxuICAgICAgICBjb25zdCBkZWxldGVUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBkZWxldGVUYXNrQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtdGFzay1idG5cIik7XHJcbiAgICAgICAgZGVsZXRlVGFza0J0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlIHRhc2tcIjtcclxuICAgICAgICBkZWxldGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGRlbGV0ZVRhc2tCdXR0b25DbGlja0hhbmRsZXIpO1xyXG5cclxuICAgICAgICBjb25zdCB0YXNrRG9uZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgdGFza0RvbmVCdG4uY2xhc3NMaXN0LmFkZChcInRhc2stZG9uZS1idXR0b25cIik7XHJcbiAgICAgICAgdGFza0RvbmVCdG4udGV4dENvbnRlbnQgPSBcIlRhc2sgRG9uZVwiO1xyXG4gICAgICAgIHRhc2tEb25lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRhc2tEb25lQnV0dG9uQ2xpY2tIYW5kbGVyKTtcclxuICAgIFxyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZWRpdFRhc2tCdG4pO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGVsZXRlVGFza0J0bik7XHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZCh0YXNrRG9uZUJ0bik7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuICAgIC8vIGRlbGV0ZSB0YXNrIGJ1dHRvbiBsaXN0ZW5lclxyXG5mdW5jdGlvbiBkZWxldGVUYXNrQnV0dG9uQ2xpY2tIYW5kbGVyKGUpIHtcclxuICAgIGNvbnN0IGNhdE5hbWUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLnRleHRDb250ZW50LnRyaW0oKTtcclxuICAgIGNvbnN0IHRhc2tOYW1lID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLnRleHRDb250ZW50LnRyaW0oKVxyXG4gICAgY29uc3QgY2F0SW5kZXggPSB0YXNrTGlzdC5jYXRlZ29yaWVzLmZpbmRJbmRleCgoY2F0KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGNhdC5uYW1lLnRyaW0oKSA9PT0gY2F0TmFtZTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHRhc2tOYW1lKTtcclxuICAgIHRhc2tMaXN0LmNhdGVnb3JpZXNbY2F0SW5kZXhdLmRlbGV0ZVRhc2sodGFza05hbWUpO1xyXG4gICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0KTtcclxufVxyXG5cclxuICAgIC8vIGVkaXQgYnV0dG9uIGxpc3RlbmVyXHJcbmZ1bmN0aW9uIGVkaXRUYXNrQnV0dG9uQ2xpY2tIYW5kbGVyKGUpIHtcclxuICAgIC8vIHJldHJpZXZlIGVkaXQgZGlhbG9nIGVsZW1lbnRzXHJcbiAgICBjb25zdCBhZGRUYXNrRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lLXRhc2stZGlhbG9nXCIpO1xyXG4gICAgY29uc3QgY2xvc2VBZGRUYXNrRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlLWNsb3NlLWFkZC10YXNrLWRpYWxvZ1wiKTtcclxuICAgIGNvbnN0IGFkZFRhc2tCdG5EaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImUtYWRkLXRhc2stYnRuLWRpYWxvZ1wiKTtcclxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZS10YXNrLXRpdGxlXCIpO1xyXG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlLXRhc2stZGVzY3JpcHRpb25cIik7XHJcbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZS10YXNrLWR1ZS1kYXRlXCIpO1xyXG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlLXRhc2stcHJpb3JpdHlcIik7XHJcblxyXG4gICAgLy8gcmV0cmlldmUgY3VycmVudCB2YWx1ZXMgb2YgY2FyZFxyXG4gICAgY29uc3QgcmVuZGVyZWRUYXNrVGl0bGUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQudGV4dENvbnRlbnQudHJpbSgpO1xyXG4gICAgY29uc3QgcmVuZGVyZWRUYXNrRGVzY3JpcHRpb24gPSBlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnByZXZpb3VzRWxlbWVudFNpYmxpbmcucHJldmlvdXNFbGVtZW50U2libGluZy50ZXh0Q29udGVudC50cmltKCk7XHJcbiAgICBjb25zdCByZW5kZXJlZER1ZURhdGUgPSBlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnByZXZpb3VzRWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQudHJpbSgpLnJlcGxhY2UoXCJEdWUgRGF0ZTogXCIsIFwiXCIpO1xyXG4gICAgcmVuZGVyZWREdWVEYXRlLnJlcGxhY2VBbGwoXCItXCIsIFwiIFwiKTtcclxuICAgIGNvbnN0IHJlbmRlcmVkUHJpb3JpdHkgPSBlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50LnRyaW0oKS5yZXBsYWNlKFwiUHJpb3JpdHk6IFwiLCBcIlwiKTtcclxuICAgIGNvbnNvbGUubG9nKHJlbmRlcmVkUHJpb3JpdHkpO1xyXG5cclxuICAgIC8vIHNob3cgZWRpdCB0YXNrIG1vZGFsIG9uY2xpY2tcclxuICAgIGFkZFRhc2tEaWFsb2cuc2hvd01vZGFsKCk7XHJcbiAgICB0YXNrVGl0bGUudmFsdWUgPSByZW5kZXJlZFRhc2tUaXRsZTtcclxuICAgIHRhc2tEZXNjcmlwdGlvbi52YWx1ZSA9IHJlbmRlcmVkVGFza0Rlc2NyaXB0aW9uO1xyXG4gICAgdGFza0R1ZURhdGUudmFsdWUgPSByZW5kZXJlZER1ZURhdGU7XHJcbiAgICBpZiAocmVuZGVyZWRQcmlvcml0eSAhPT0gXCJ1bnNldFwiKSB7XHJcbiAgICAgICAgdGFza1ByaW9yaXR5LnZhbHVlID0gcmVuZGVyZWRQcmlvcml0eTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFza1ByaW9yaXR5LnZhbHVlID0gXCJsb3dcIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjbG9zZSBcImVkaXQgdGFza1wiIGRpYWxvZ1xyXG4gICAgY2xvc2VBZGRUYXNrRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgYWRkVGFza0RpYWxvZy5jbG9zZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZWRpdCB0YXNrIGJ1dHRvbiBkaWFsb2dcclxuICAgIGFkZFRhc2tCdG5EaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICh0YXNrVGl0bGUudmFsdWUgJiYgdGFza0R1ZURhdGUudmFsdWUpIHtcclxuICAgICAgICAgICAgLy8gZmluZCB0aGUgY3VycmVudCBjYXRlZ29yeVxyXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2F0LWhlYWRpbmdcIik7ICAgICBcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0YXNrTGlzdC5jYXRlZ29yaWVzLmZpbmRJbmRleCgoY2F0ZWdvcnkpID0+IGNhdGVnb3J5Lm5hbWUgPT09IHRpdGxlLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xyXG4gICAgICAgICAgICBjb25zdCBjYXQgPSB0YXNrTGlzdC5jYXRlZ29yaWVzW2luZGV4XTtcclxuICAgICAgICAgICAgLy8gZmluZCB0aGUgY3VycmVudCB0YXNrXHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tJbmRleCA9IGNhdC50YXNrcy5maW5kSW5kZXgoKHRhc2spID0+IHRhc2sudGl0bGUgPT09IHJlbmRlcmVkVGFza1RpdGxlKTtcclxuICAgICAgICAgICAgY29uc3QgdGFzayA9IGNhdC50YXNrc1t0YXNrSW5kZXhdO1xyXG4gICAgICAgICAgICAvLyBzZXQgbmV3IHZhbHVlc1xyXG4gICAgICAgICAgICB0YXNrLnRpdGxlID0gdGFza1RpdGxlLnZhbHVlO1xyXG4gICAgICAgICAgICB0YXNrLmRlc2NyaXB0aW9uID0gdGFza0Rlc2NyaXB0aW9uLnZhbHVlO1xyXG4gICAgICAgICAgICB0YXNrLmR1ZURhdGUgPSB0YXNrRHVlRGF0ZS52YWx1ZTtcclxuICAgICAgICAgICAgdGFzay5wcmlvcml0eSA9IHRhc2tQcmlvcml0eS52YWx1ZTsgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrTGlzdCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUNhcmQodGFzayxyZW5kZXJlZFRhc2tUaXRsZSk7XHJcbiAgICAgICAgICAgIGFkZFRhc2tEaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ2FyZCh0YXNrLG9sZFRpdGxlKSB7XHJcblxyXG4vLyBmaW5kIHRoZSBjYXJkIHdpdGggdGhlIG9sZCB0aXRsZVxyXG5jb25zdCBhbGxDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZFwiKTtcclxuY29uc3QgY2FyZEFycj0gQXJyYXkuZnJvbShhbGxDYXJkcyk7XHJcbmNvbnN0IGluZGV4ID0gY2FyZEFyci5maW5kSW5kZXgoKGNhcmQpID0+IGNhcmQuZmlyc3RDaGlsZC50ZXh0Q29udGVudC50cmltKCkgPT09IG9sZFRpdGxlKTtcclxuY29uc29sZS5sb2coYWxsQ2FyZHNbaW5kZXhdKTtcclxuY29uc3QgY3VycmVudENhcmRDb250YWluZXIgPSBhbGxDYXJkc1tpbmRleF07XHJcblxyXG4vLyB1cGRhdGUgdGhlIHRpdGxlLCB0aGUgZGVzY3JpcHRpb24sIHRoZSBkdWVkYXRlIGFuZCB0aGUgcHJpb3JpdHk7XHJcbmNvbnN0IHRpdGxlID0gY3VycmVudENhcmRDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi50YXNrLXRpdGxlXCIpO1xyXG5jb25zdCBkZXNjcmlwdGlvbiA9IGN1cnJlbnRDYXJkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kZXNjcmlwdGlvblwiKTtcclxuY29uc3QgZHVlRGF0ZSA9IGN1cnJlbnRDYXJkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kdWUtZGF0ZVwiKTtcclxuY29uc3QgcHJpb3JpdHkgPSBjdXJyZW50Q2FyZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnRhc2stcHJpb3JpdHlcIik7XHJcblxyXG50aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XHJcbmRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcclxuZHVlRGF0ZS50ZXh0Q29udGVudCA9IGBEdWUgRGF0ZTogJHt0YXNrLmR1ZURhdGV9YDtcclxucHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7dGFzay5wcmlvcml0eX1gXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRhc2tEb25lQnV0dG9uQ2xpY2tIYW5kbGVyKGUpIHtcclxuICAgIC8vIHNlbGVjdCBjdXJyZW50IGNhcmRcclxuY29uc3QgY3VycmVudENhcmQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG4gICAgLy8gdG9nZ2xlIGNsYXNzIFwiLmRvbmVcIiB0byB0aGUgY2FyZCAodmlzdWFsKVxyXG5jdXJyZW50Q2FyZC5jbGFzc0xpc3QudG9nZ2xlKFwiZG9uZVwiKTtcclxuICAgIC8vIHNlbGVjdCB0aGUgY29ycmVzcG9uZGluZyB0YXNrXHJcbiAgICAgICAgLy8gZmluZGluZyB0aGUgY2F0ZWdvcnlcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXQtaGVhZGluZ1wiKTsgICAgIFxyXG4gICAgY29uc3QgaW5kZXggPSB0YXNrTGlzdC5jYXRlZ29yaWVzLmZpbmRJbmRleCgoY2F0ZWdvcnkpID0+IGNhdGVnb3J5Lm5hbWUgPT09IHRpdGxlLnRleHRDb250ZW50KTtcclxuICAgIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICAgIGNvbnN0IGNhdCA9IHRhc2tMaXN0LmNhdGVnb3JpZXNbaW5kZXhdO1xyXG4gICAgICAgIC8vIGZpbmRpbmcgdGhlIHRhc2tcclxuICAgIGNvbnN0IHRhc2tJbmRleCA9IGNhdC50YXNrcy5maW5kSW5kZXgoKHRhc2spID0+IHRhc2sudGl0bGUgPT09IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC50ZXh0Q29udGVudC50cmltKCkpO1xyXG4gICAgY29uc3QgdGFzayA9IGNhdC50YXNrc1t0YXNrSW5kZXhdO1xyXG4gICAgLy8gdG9nZ2xlIHRhc2sgc3RhdHVzXHJcbiAgICB0YXNrLnRvZ2dsZVRhc2tTdGF0dXMoKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=