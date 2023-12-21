/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeApp: () => (/* binding */ initializeApp),
/* harmony export */   saveTaskListToLocalStorage: () => (/* binding */ saveTaskListToLocalStorage)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");



let taskList;
function initializeApp() {
    const taskListString = localStorage.getItem("taskList");
    console.log(taskListString);
    if (taskListString) {
        taskList = JSON.parse(taskListString);
        // Convert the parsed object back to an instance of TaskList
        taskList = Object.assign(new _task_js__WEBPACK_IMPORTED_MODULE_0__.TaskList(), taskList);
        // Convert the categories and tasks into instances of Category and Task classes
        taskList.categories = taskList.categories.map(category => {
          const cat = Object.assign(new _task_js__WEBPACK_IMPORTED_MODULE_0__.Category(category.name), category);
          cat.tasks = cat.tasks.map(task => Object.assign(new _task_js__WEBPACK_IMPORTED_MODULE_0__.Task(), task));
          return cat;
        });
    } else {
        // creating a tasklist and some tasks
        taskList = new _task_js__WEBPACK_IMPORTED_MODULE_0__.TaskList();
        const workCategory = new _task_js__WEBPACK_IMPORTED_MODULE_0__.Category("work");
        const studyCategory = new _task_js__WEBPACK_IMPORTED_MODULE_0__.Category("study");
        const personalCategory = new _task_js__WEBPACK_IMPORTED_MODULE_0__.Category("personal");
        taskList.addCategory(workCategory);
        taskList.addCategory(studyCategory);
        taskList.addCategory(personalCategory);
        
        
        // creating some task instances
        const task1 = new _task_js__WEBPACK_IMPORTED_MODULE_0__.Task("Task 1", "Description of Task 1", "2023-01-01");
        const task2 = new _task_js__WEBPACK_IMPORTED_MODULE_0__.Task("Task 2", "Description of Task 2", "2023-02-01");
        const task3 = new _task_js__WEBPACK_IMPORTED_MODULE_0__.Task("Task 3", "Description of Task 3", "2023-03-01");
        workCategory.addTask(task1);
        workCategory.addTask(task2);
        studyCategory.addTask(task3);
    }
    console.log(taskList);
    return taskList;
}

function saveTaskListToLocalStorage() {
    const taskListString = JSON.stringify(taskList);
    localStorage.setItem("taskList",taskListString);

}




/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
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
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");



const taskList = (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.initializeApp)();


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
    catEditBtn.textContent = "edit";
    // add event listener to new edit cat btn
    catEditBtn.addEventListener("click", editCategoryEventHandler);


    // create delete cat btn
    const catDeletebtn = document.createElement("button");
    catDeletebtn.classList.add("delete-cat-btn");
    catDeletebtn.textContent = "delete";
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

        // save it to locale storage
        (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveTaskListToLocalStorage)()
    }
}

function activateClass(el) {
    const siblings = document.querySelectorAll(".link");
    siblings.forEach(sibling => sibling.classList.remove("active-link"));
    el.classList.add("active-link");
}

function initializeCategories() {
    addCategoryButton();
    taskList.categories.forEach((category, index) => {
        addCategoryToCategoryList(taskList.categories[index]);
    });

    // addCategoryToCategoryList(taskList.categories[1]);
    // addCategoryToCategoryList(taskList.categories[2]);

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
    const cat = new _task_js__WEBPACK_IMPORTED_MODULE_0__.Category(`${catTitle.value}`);
    if (catTitle.value) {
        addCategoryToCategoryList(cat);
        taskList.addCategory(cat);
        console.log(taskList);
        addCatDialog.close();
        catTitle.value = "";

        (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveTaskListToLocalStorage)();
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

    (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveTaskListToLocalStorage)();
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
            const task = new _task_js__WEBPACK_IMPORTED_MODULE_0__.Task(`${taskTitle.value}`,`${taskDescription.value}`,`${taskDueDate.value}`,`${taskPriority.value}`);
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

            (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveTaskListToLocalStorage)()
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
        editTaskBtn.textContent = "edit";
        editTaskBtn.addEventListener("click",editTaskButtonClickHandler);

        const deleteTaskBtn = document.createElement("button");
        deleteTaskBtn.classList.add("delete-task-btn");
        deleteTaskBtn.textContent = "delete";
        deleteTaskBtn.addEventListener("click",deleteTaskButtonClickHandler);

        const taskDoneBtn = document.createElement("button");
        taskDoneBtn.classList.add("task-done-button");
        taskDoneBtn.textContent = "done";
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

    (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveTaskListToLocalStorage)()
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
            console.log(cat);
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

            (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveTaskListToLocalStorage)()
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

    (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveTaskListToLocalStorage)()
}


// function storageAvailable(type) {
//     let storage;
//     try {
//       storage = window[type];
//       const x = "__storage_test__";
//       storage.setItem(x, x);
//       storage.removeItem(x);
//       return true;
//     } catch (e) {
//       return (
//         e instanceof DOMException &&
//         // everything except Firefox
//         (e.code === 22 ||
//           // Firefox
//           e.code === 1014 ||
//           // test name field too, because code might not be present
//           // everything except Firefox
//           e.name === "QuotaExceededError" ||
//           // Firefox
//           e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
//         // acknowledge QuotaExceededError only if there's something already stored
//         storage &&
//         storage.length !== 0
//       );
//     }
//   }

//   if (storageAvailable("localStorage")) {
//     console.log("yes");
//   } else {
//     // Too bad, no localStorage for us
//   }

// let string = JSON.stringify(taskList);
// console.log(string);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyw4Q0FBUTtBQUM3QztBQUNBO0FBQ0Esd0NBQXdDLDhDQUFRO0FBQ2hELDhEQUE4RCwwQ0FBSTtBQUNsRTtBQUNBLFNBQVM7QUFDVCxNQUFNO0FBQ047QUFDQSx1QkFBdUIsOENBQVE7QUFDL0IsaUNBQWlDLDhDQUFRO0FBQ3pDLGtDQUFrQyw4Q0FBUTtBQUMxQyxxQ0FBcUMsOENBQVE7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDBDQUFJO0FBQzlCLDBCQUEwQiwwQ0FBSTtBQUM5QiwwQkFBMEIsMENBQUk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDakRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmlEO0FBQ3FCO0FBQ3RFO0FBQ0EsaUJBQWlCLDBEQUFhO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLEVBQUUsYUFBYTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsY0FBYztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixjQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxTQUFTO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUVBQTBCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhDQUFRLElBQUksZUFBZTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUVBQTBCO0FBQ2xDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDhDQUE4QztBQUM3RTtBQUNBLElBQUksdUVBQTBCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsMENBQUksSUFBSSxnQkFBZ0IsS0FBSyxzQkFBc0IsS0FBSyxrQkFBa0IsS0FBSyxtQkFBbUI7QUFDL0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksdUVBQTBCO0FBQ3RDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxhQUFhO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGNBQWM7QUFDbEUsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdUVBQTBCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVFQUEwQjtBQUN0QztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxhQUFhO0FBQ2hELG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1RUFBMEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VGFza0xpc3QsQ2F0ZWdvcnksVGFza30gZnJvbSBcIi4vdGFzay5qc1wiO1xyXG5cclxuXHJcbmxldCB0YXNrTGlzdDtcclxuZnVuY3Rpb24gaW5pdGlhbGl6ZUFwcCgpIHtcclxuICAgIGNvbnN0IHRhc2tMaXN0U3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrTGlzdFwiKTtcclxuICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0U3RyaW5nKTtcclxuICAgIGlmICh0YXNrTGlzdFN0cmluZykge1xyXG4gICAgICAgIHRhc2tMaXN0ID0gSlNPTi5wYXJzZSh0YXNrTGlzdFN0cmluZyk7XHJcbiAgICAgICAgLy8gQ29udmVydCB0aGUgcGFyc2VkIG9iamVjdCBiYWNrIHRvIGFuIGluc3RhbmNlIG9mIFRhc2tMaXN0XHJcbiAgICAgICAgdGFza0xpc3QgPSBPYmplY3QuYXNzaWduKG5ldyBUYXNrTGlzdCgpLCB0YXNrTGlzdCk7XHJcbiAgICAgICAgLy8gQ29udmVydCB0aGUgY2F0ZWdvcmllcyBhbmQgdGFza3MgaW50byBpbnN0YW5jZXMgb2YgQ2F0ZWdvcnkgYW5kIFRhc2sgY2xhc3Nlc1xyXG4gICAgICAgIHRhc2tMaXN0LmNhdGVnb3JpZXMgPSB0YXNrTGlzdC5jYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBjYXQgPSBPYmplY3QuYXNzaWduKG5ldyBDYXRlZ29yeShjYXRlZ29yeS5uYW1lKSwgY2F0ZWdvcnkpO1xyXG4gICAgICAgICAgY2F0LnRhc2tzID0gY2F0LnRhc2tzLm1hcCh0YXNrID0+IE9iamVjdC5hc3NpZ24obmV3IFRhc2soKSwgdGFzaykpO1xyXG4gICAgICAgICAgcmV0dXJuIGNhdDtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gY3JlYXRpbmcgYSB0YXNrbGlzdCBhbmQgc29tZSB0YXNrc1xyXG4gICAgICAgIHRhc2tMaXN0ID0gbmV3IFRhc2tMaXN0KCk7XHJcbiAgICAgICAgY29uc3Qgd29ya0NhdGVnb3J5ID0gbmV3IENhdGVnb3J5KFwid29ya1wiKTtcclxuICAgICAgICBjb25zdCBzdHVkeUNhdGVnb3J5ID0gbmV3IENhdGVnb3J5KFwic3R1ZHlcIik7XHJcbiAgICAgICAgY29uc3QgcGVyc29uYWxDYXRlZ29yeSA9IG5ldyBDYXRlZ29yeShcInBlcnNvbmFsXCIpO1xyXG4gICAgICAgIHRhc2tMaXN0LmFkZENhdGVnb3J5KHdvcmtDYXRlZ29yeSk7XHJcbiAgICAgICAgdGFza0xpc3QuYWRkQ2F0ZWdvcnkoc3R1ZHlDYXRlZ29yeSk7XHJcbiAgICAgICAgdGFza0xpc3QuYWRkQ2F0ZWdvcnkocGVyc29uYWxDYXRlZ29yeSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY3JlYXRpbmcgc29tZSB0YXNrIGluc3RhbmNlc1xyXG4gICAgICAgIGNvbnN0IHRhc2sxID0gbmV3IFRhc2soXCJUYXNrIDFcIiwgXCJEZXNjcmlwdGlvbiBvZiBUYXNrIDFcIiwgXCIyMDIzLTAxLTAxXCIpO1xyXG4gICAgICAgIGNvbnN0IHRhc2syID0gbmV3IFRhc2soXCJUYXNrIDJcIiwgXCJEZXNjcmlwdGlvbiBvZiBUYXNrIDJcIiwgXCIyMDIzLTAyLTAxXCIpO1xyXG4gICAgICAgIGNvbnN0IHRhc2szID0gbmV3IFRhc2soXCJUYXNrIDNcIiwgXCJEZXNjcmlwdGlvbiBvZiBUYXNrIDNcIiwgXCIyMDIzLTAzLTAxXCIpO1xyXG4gICAgICAgIHdvcmtDYXRlZ29yeS5hZGRUYXNrKHRhc2sxKTtcclxuICAgICAgICB3b3JrQ2F0ZWdvcnkuYWRkVGFzayh0YXNrMik7XHJcbiAgICAgICAgc3R1ZHlDYXRlZ29yeS5hZGRUYXNrKHRhc2szKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0KTtcclxuICAgIHJldHVybiB0YXNrTGlzdDtcclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZVRhc2tMaXN0VG9Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICBjb25zdCB0YXNrTGlzdFN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0KTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza0xpc3RcIix0YXNrTGlzdFN0cmluZyk7XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IHtpbml0aWFsaXplQXBwLHNhdmVUYXNrTGlzdFRvTG9jYWxTdG9yYWdlfSIsImNsYXNzIFRhc2tMaXN0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZENhdGVnb3J5KGNhdGVnb3J5KSB7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUNhdGVnb3J5KG5hbWUpIHtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSB0aGlzLmNhdGVnb3JpZXMuZmlsdGVyKChjYXRlZ29yeSkgPT4gY2F0ZWdvcnkubmFtZSAhPT0gbmFtZSk7ICAgICAgICBcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNsYXNzIENhdGVnb3J5IHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpe1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRhc2sodGFzaykge1xyXG4gICAgICAgIGNvbnN0IHRhc2tFeGlzdCA9IHRoaXMudGFza3Muc29tZSgodCkgPT4gdC50aXRsZSA9PT0gdGFzay50aXRsZSk7XHJcbiAgICAgICAgaWYgKCF0YXNrRXhpc3QpIHtcclxuICAgICAgICAgICAgdGhpcy50YXNrcy5wdXNoKHRhc2spOyAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVUYXNrKHRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnRpdGxlICE9PSB0aXRsZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFRhc2sge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdG9nZ2xlVGFza1N0YXR1cygpIHtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9ICF0aGlzLmNvbXBsZXRlZDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQge1Rhc2tMaXN0LENhdGVnb3J5LFRhc2t9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1Rhc2tMaXN0LENhdGVnb3J5LFRhc2t9IGZyb20gXCIuL3Rhc2suanNcIjtcclxuaW1wb3J0IHtpbml0aWFsaXplQXBwLHNhdmVUYXNrTGlzdFRvTG9jYWxTdG9yYWdlfSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XHJcblxyXG5jb25zdCB0YXNrTGlzdCA9IGluaXRpYWxpemVBcHAoKTtcclxuXHJcblxyXG4vL3JldHJpZXZlIHRoZSBjb250ZW50IGVsZW1lbnRcclxuY29uc3QgY29udGVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XHJcblxyXG5cclxuLy8vLyBjYXRlZ29yaWVzIFVJXHJcbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcclxuY29uc3QgaGVhZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbmNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG5oZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiVE8gRE8gQVBQXCI7XHJcbmhlYWRlckVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xyXG5jb250ZW50RWxlbWVudC5hcHBlbmRDaGlsZChoZWFkZXJFbGVtZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xyXG4gICAgY29uc3QgZm9vdGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XHJcbiAgICBjb25zdCBmb290ZXJQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuICAgIGZvb3RlclBhcmEuaW5uZXJIVE1MID0gYCZjb3B5OyAke2N1cnJlbnRZZWFyfSBXb28tQ2VsbGA7XHJcbiAgICBmb290ZXJFbGVtZW50LmFwcGVuZENoaWxkKGZvb3RlclBhcmEpO1xyXG4gICAgY29udGVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9vdGVyRWxlbWVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XHJcbiAgICBjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xyXG4gICAgbWFpbkVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQ2F0ZWdvcnlDb250YWluZXIoKSk7XHJcbiAgICBtYWluRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVUYXNrQ29udGFpbmVyKCkpO1xyXG4gICAgY29udGVudEVsZW1lbnQuYXBwZW5kQ2hpbGQobWFpbkVsZW1lbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDYXRlZ29yeUNvbnRhaW5lcigpIHtcclxuICAgIGNvbnN0IGNhdGVnb3J5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNhdGVnb3J5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjYXRlZ29yeS1jb250YWluZXJcIik7XHJcbiAgICBjb25zdCBjYXRlZ29yeVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNhdGVnb3J5UGFyYS50ZXh0Q29udGVudCA9IFwiWW91ciBjYXRlZ29yaWVzXCI7XHJcbiAgICBjb25zdCBjYXRlZ29yeUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICBjYXRlZ29yeUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXRlZ29yeVBhcmEpO1xyXG4gICAgY2F0ZWdvcnlDb250YWluZXIuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlMaXN0KTtcclxuICAgIHJldHVybiBjYXRlZ29yeUNvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFza0NvbnRhaW5lcigpIHtcclxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250YWluZXJcIik7XHJcbiAgICByZXR1cm4gdGFza0NvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ2F0ZWdvcnlCdXR0b24oKSB7XHJcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXRlZ29yeS1jb250YWluZXIgPiB1bFwiKTtcclxuICAgIGNvbnN0IGFkZENhdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBhZGRDYXRCdG4uY2xhc3NMaXN0LmFkZChcImFkZC1jYXRlZ29yeVwiKTtcclxuICAgIGFkZENhdEJ0bi50ZXh0Q29udGVudCA9IFwiQUREXCI7XHJcbiAgICBsaXN0LmFwcGVuZENoaWxkKGFkZENhdEJ0bik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENhdGVnb3J5VG9DYXRlZ29yeUxpc3QoY2F0ZWdvcnkpIHtcclxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhdGVnb3J5LWNvbnRhaW5lciA+IHVsXCIpO1xyXG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAvLyBsaXN0SXRlbS5pbm5lckhUTUwgPSBgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImxpbmtcIj4ke2NhdGVnb3J5Lm5hbWV9PC9hPjxidXR0b24gY2xhc3M9XCJkZWxldGUtY2F0LWJ0blwiPmRlbGV0ZTwvYnV0dG9uPmA7XHJcbiAgICAvLyBjcmVhdGUgY2F0IGxpbmtcclxuICAgIGNvbnN0IGNhdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIGNhdExpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiNcIik7XHJcbiAgICBjYXRMaW5rLmNsYXNzTGlzdC5hZGQoXCJsaW5rXCIpO1xyXG4gICAgY2F0TGluay50ZXh0Q29udGVudCA9IGAke2NhdGVnb3J5Lm5hbWV9YDtcclxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byB0aGUgbmV3IGNhdGVnb3J5IGxpbmtcclxuICAgIGNhdExpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRhc2tMaXN0LmNhdGVnb3JpZXMuZmluZEluZGV4KChjYXRlZ29yeSkgPT4gY2F0ZWdvcnkubmFtZSA9PT0gZS50YXJnZXQudGV4dENvbnRlbnQpO1xyXG4gICAgICAgIHNob3dDb3JyZXNwb25kaW5nVGFza3ModGFza0xpc3QuY2F0ZWdvcmllc1tpbmRleF0pO1xyXG4gICAgICAgIGNvbnN0IGVsID0gZS50YXJnZXQ7XHJcbiAgICAgICAgYWN0aXZhdGVDbGFzcyhlbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjcmVhdGUgZWRpdCBjYXQgYnRuXHJcbiAgICBjb25zdCBjYXRFZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGNhdEVkaXRCdG4uY2xhc3NMaXN0LmFkZChcImVkaXQtY2F0LWJ0blwiKTtcclxuICAgIGNhdEVkaXRCdG4udGV4dENvbnRlbnQgPSBcImVkaXRcIjtcclxuICAgIC8vIGFkZCBldmVudCBsaXN0ZW5lciB0byBuZXcgZWRpdCBjYXQgYnRuXHJcbiAgICBjYXRFZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0Q2F0ZWdvcnlFdmVudEhhbmRsZXIpO1xyXG5cclxuXHJcbiAgICAvLyBjcmVhdGUgZGVsZXRlIGNhdCBidG5cclxuICAgIGNvbnN0IGNhdERlbGV0ZWJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBjYXREZWxldGVidG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1jYXQtYnRuXCIpO1xyXG4gICAgY2F0RGVsZXRlYnRuLnRleHRDb250ZW50ID0gXCJkZWxldGVcIjtcclxuICAgIC8vIGFkZCBkZWxldGUgYnRuIGxpc3RlbmVyXHJcbiAgICBjYXREZWxldGVidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBjb25zdCBkZWxldGVDYXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZS1jYXQtYnRuXCIpO1xyXG4gICAgICAgIGNvbnN0IGJ0bkFyciA9IEFycmF5LmZyb20oZGVsZXRlQ2F0QnRuKTtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGJ0bkFyci5pbmRleE9mKGUudGFyZ2V0KTtcclxuXHJcbiAgICAgICAgLy8gcmV0cmlldmUgYWxsIGxpbmtzXHJcbiAgICAgICAgY29uc3QgYXNzb2NpYXRlZExpbmsgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQ7XHJcbiAgICAgICAgLy8gcmVmcmVzaCB0YXNrLWNvbnRhaW5lciBvbmx5IGlmIHRoZSBkZWxldGVkIGxpbmsgaXMgYWN0aXZlXHJcbiAgICAgICAgaWYgKGFzc29jaWF0ZWRMaW5rLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1saW5rXCIpKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZUNhdEVsZW1lbnQoZSlcclxuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICBpbml0aWFsaXplVGFza0NvbnRhaW5lcigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZUNhdEVsZW1lbnQoZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codGFza0xpc3QpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGNhdExpbmspO1xyXG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY2F0RWRpdEJ0bik7XHJcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChjYXREZWxldGVidG4pO1xyXG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XHJcblxyXG5cclxuXHJcbiAgICAvLyBkZWxldGVCdG5FdmVudExpc3RlbmVyKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXRDYXRlZ29yeUV2ZW50SGFuZGxlcihlKSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY29uc29sZS5sb2coXCJ5b3UgY2xpY2tlZCBvbiBlZGl0XCIpO1xyXG4gICAgLy8gcmV0cmlldmUgYWxsIHRoZSBpbnB1dHMgYW5kIGJ1dHRvbnMgZnJvbSBtb2RhbFxyXG4gICAgY29uc3QgZWRpdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lLWNhdC1kaWFsb2dcIik7XHJcbiAgICBjb25zdCBlZGl0Q2F0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImUtY2F0LXRpdGxlXCIpO1xyXG4gICAgY29uc3QgY2xvc2VFZGl0Q2F0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1lLWNhdC1kaWFsb2dcIik7XHJcbiAgICBjb25zdCBzYXZlQ2hhbmdlc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZS1jYXQtYnRuLWRpYWxvZ1wiKTtcclxuICAgIFxyXG4gICAgLy8gcmV0cmlldmUgdGhlIGxpbmsgZWxlbWVudFxyXG4gICAgY29uc3QgbGlua0VsZW1lbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQ7XHJcblxyXG4gICAgLy8gc2hvdyB0aGUgbW9kYWwgd2l0aCBjdXJyZW50IHZhbHVlIGFzIHZhbHVlXHJcbiAgICBjb25zdCBjdXJyZW50VGl0bGVWYWx1ZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC50ZXh0Q29udGVudC50cmltKCk7XHJcbiAgICBlZGl0Q2F0VGl0bGUudmFsdWUgPSBjdXJyZW50VGl0bGVWYWx1ZTtcclxuICAgIGVkaXRNb2RhbC5zaG93TW9kYWwoKTtcclxuXHJcbiAgICBjbG9zZUVkaXRDYXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBlZGl0TW9kYWwuY2xvc2UoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHNhdmVDaGFuZ2VzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzYXZlQ2hhbmdlc0hhbmRsZXIpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNhdmVDaGFuZ2VzSGFuZGxlcihldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgbmV3VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImUtY2F0LXRpdGxlXCIpO1xyXG4gICAgICAgIC8vIGFkZCBpbnB1dCB2YWx1ZSB0byB0YXNrbGlzdFxyXG4gICAgICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saW5rXCIpO1xyXG4gICAgICAgIGNvbnN0IGxpbmtBcnIgPSBBcnJheS5mcm9tKGxpbmtzKTtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGxpbmtBcnIuZmluZEluZGV4KChsaW5rKSA9PiBsaW5rLnRleHRDb250ZW50LnRyaW0oKSA9PT0gY3VycmVudFRpdGxlVmFsdWUpO1xyXG4gICAgICAgIGxldCBjdGdyTmFtZSA9IHRhc2tMaXN0LmNhdGVnb3JpZXNbaW5kZXhdLm5hbWU7XHJcbiAgICAgICAgdGFza0xpc3QuY2F0ZWdvcmllc1tpbmRleF0ubmFtZSA9IG5ld1RpdGxlLnZhbHVlO1xyXG4gICAgICAgIGN0Z3JOYW1lID0gbmV3VGl0bGUudmFsdWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coY3Rnck5hbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0KTtcclxuICAgICAgICAvLyB1cGRhdGUgdGhlIGxpbmsgYWNjb3JkaW5nbHlcclxuICAgICAgICBsaW5rRWxlbWVudC50ZXh0Q29udGVudCA9IGAke2N0Z3JOYW1lfWA7XHJcbiAgICAgICAgZWRpdE1vZGFsLmNsb3NlKCk7XHJcbiAgICAgICAgLy8gcmVmcmVzaCB0YXNrIGNvbnRhaW5lclxyXG4gICAgICAgIHNob3dDb3JyZXNwb25kaW5nVGFza3ModGFza0xpc3QuY2F0ZWdvcmllc1tpbmRleF0pO1xyXG5cclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBldmVudCBsaXN0ZW5lciBhZnRlciBpdCdzIGJlZW4gZXhlY3V0ZWRcclxuICAgICAgICBzYXZlQ2hhbmdlc0J0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2F2ZUNoYW5nZXNIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgLy8gc2F2ZSBpdCB0byBsb2NhbGUgc3RvcmFnZVxyXG4gICAgICAgIHNhdmVUYXNrTGlzdFRvTG9jYWxTdG9yYWdlKClcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWN0aXZhdGVDbGFzcyhlbCkge1xyXG4gICAgY29uc3Qgc2libGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpbmtcIik7XHJcbiAgICBzaWJsaW5ncy5mb3JFYWNoKHNpYmxpbmcgPT4gc2libGluZy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLWxpbmtcIikpO1xyXG4gICAgZWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1saW5rXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplQ2F0ZWdvcmllcygpIHtcclxuICAgIGFkZENhdGVnb3J5QnV0dG9uKCk7XHJcbiAgICB0YXNrTGlzdC5jYXRlZ29yaWVzLmZvckVhY2goKGNhdGVnb3J5LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGFkZENhdGVnb3J5VG9DYXRlZ29yeUxpc3QodGFza0xpc3QuY2F0ZWdvcmllc1tpbmRleF0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYWRkQ2F0ZWdvcnlUb0NhdGVnb3J5TGlzdCh0YXNrTGlzdC5jYXRlZ29yaWVzWzFdKTtcclxuICAgIC8vIGFkZENhdGVnb3J5VG9DYXRlZ29yeUxpc3QodGFza0xpc3QuY2F0ZWdvcmllc1syXSk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplVGFza0NvbnRhaW5lcigpIHtcclxuICAgIGNvbnN0IHRhc2tDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHRleHQudGV4dENvbnRlbnQgPSBcIkNsaWNrIG9uIGEgY2F0ZWdvcnkgdG8gc2hvdyB0aGUgYXNzb2NpYXRlZCB0YXNrc1wiO1xyXG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcclxuICAgIHRhc2tDb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKHRleHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplU2NyZWVuKCkge1xyXG4gICAgY3JlYXRlSGVhZGVyKCk7XHJcbiAgICBjcmVhdGVNYWluKCk7XHJcbiAgICBpbml0aWFsaXplQ2F0ZWdvcmllcygpO1xyXG4gICAgY3JlYXRlRm9vdGVyKCk7XHJcbiAgICBpbml0aWFsaXplVGFza0NvbnRhaW5lcigpO1xyXG5cclxufVxyXG5cclxuaW5pdGlhbGl6ZVNjcmVlbigpO1xyXG5cclxuLy8gY2F0ZWdvcmllcyBldmVudCBsaXN0ZW5lclxyXG5jb25zdCBhZGRDYXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1jYXRlZ29yeVwiKTtcclxuY29uc3QgYWRkQ2F0RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtY2F0LWRpYWxvZ1wiKTtcclxuY29uc3QgY2F0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhdC10aXRsZVwiKTtcclxuY29uc3QgY2xvc2VDYXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLWFkZC1jYXQtZGlhbG9nXCIpO1xyXG5jb25zdCBhZGRDYXRUb0xpc3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1jYXQtYnRuLWRpYWxvZ1wiKTtcclxuXHJcblxyXG5hZGRDYXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGFkZENhdERpYWxvZy5zaG93TW9kYWwoKTtcclxufSk7XHJcblxyXG5jbG9zZUNhdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgYWRkQ2F0RGlhbG9nLmNsb3NlKCk7XHJcbiAgICBjYXRUaXRsZS52YWx1ZSA9IFwiXCI7XHJcbn0pO1xyXG5cclxuYWRkQ2F0VG9MaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgY2F0ID0gbmV3IENhdGVnb3J5KGAke2NhdFRpdGxlLnZhbHVlfWApO1xyXG4gICAgaWYgKGNhdFRpdGxlLnZhbHVlKSB7XHJcbiAgICAgICAgYWRkQ2F0ZWdvcnlUb0NhdGVnb3J5TGlzdChjYXQpO1xyXG4gICAgICAgIHRhc2tMaXN0LmFkZENhdGVnb3J5KGNhdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGFza0xpc3QpO1xyXG4gICAgICAgIGFkZENhdERpYWxvZy5jbG9zZSgpO1xyXG4gICAgICAgIGNhdFRpdGxlLnZhbHVlID0gXCJcIjtcclxuXHJcbiAgICAgICAgc2F2ZVRhc2tMaXN0VG9Mb2NhbFN0b3JhZ2UoKTtcclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZUJ0bkV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgICBjb25zdCBkZWxldGVDYXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZS1jYXQtYnRuXCIpO1xyXG4gICAgZGVsZXRlQ2F0QnRuLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYnRuQXJyID0gQXJyYXkuZnJvbShkZWxldGVDYXRCdG4pO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGJ0bkFyci5pbmRleE9mKGUudGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJldHJpZXZlIGFsbCBsaW5rc1xyXG4gICAgICAgICAgICBjb25zdCBhc3NvY2lhdGVkTGluayA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZDtcclxuICAgICAgICAgICAgLy8gcmVmcmVzaCB0YXNrLWNvbnRhaW5lciBvbmx5IGlmIHRoZSBkZWxldGVkIGxpbmsgaXMgYWN0aXZlXHJcbiAgICAgICAgICAgIGlmIChhc3NvY2lhdGVkTGluay5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmUtbGlua1wiKSkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlQ2F0RWxlbWVudChlKVxyXG4gICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6ZVRhc2tDb250YWluZXIoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZUNhdEVsZW1lbnQoZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKHRhc2tMaXN0KTtcclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZUNhdEVsZW1lbnQoZSkge1xyXG4gICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgIHRhc2tMaXN0LmRlbGV0ZUNhdGVnb3J5KGAke2UudGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC50ZXh0Q29udGVudH1gKTtcclxuXHJcbiAgICBzYXZlVGFza0xpc3RUb0xvY2FsU3RvcmFnZSgpO1xyXG59XHJcblxyXG4vLyByZWZyZXNoIHRoZSB0YXNrLWNvbnRhaW5lciBzZWN0aW9uIHdoZW4gY2xpY2tpbmcgb24gYSBjYXRlZ29yeVxyXG5jb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lclwiKTtcclxuZnVuY3Rpb24gc2hvd0NvcnJlc3BvbmRpbmdUYXNrcyhjYXRlZ29yeSkge1xyXG4gICAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgY3JlYXRlVGFza3NIZWFkaW5nKGNhdGVnb3J5KTtcclxuICAgIGNyZWF0ZUFkZFRhc2tFbGVtZW50KCk7XHJcbiAgICBjcmVhdGVUYXNrQ2FyZHNDb250YWluZXJzKCk7XHJcbiAgICBjcmVhdGVUYXNrQ2FyZHMoY2F0ZWdvcnkpO1xyXG4gICAgdGFza0V2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrc0hlYWRpbmcoY2F0ZWdvcnkpIHtcclxuICAgIGNvbnN0IGNhdEhlYWRpbmdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGNhdEhlYWRpbmdUaXRsZS5jbGFzc0xpc3QuYWRkKFwiY2F0LWhlYWRpbmdcIik7XHJcbiAgICBjYXRIZWFkaW5nVGl0bGUudGV4dENvbnRlbnQgPSBjYXRlZ29yeS5uYW1lO1xyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXRIZWFkaW5nVGl0bGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBZGRUYXNrRWxlbWVudCgpIHtcclxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stYnRuXCIpO1xyXG4gICAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9IFwiQWRkIE5ldyBUYXNrXCI7XHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrQ2FyZHNDb250YWluZXJzKCkge1xyXG4gICAgY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FyZHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stY2FyZC1jb250YWluZXJcIik7XHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRzQ29udGFpbmVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFza0NhcmRzKGNhdGVnb3J5KSB7XHJcbiAgICBjYXRlZ29yeS50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgYWRkVGFza0NhcmQodGFzayk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gdGFza3MgZXZlbnRzIGxpc3RlbmVyc1xyXG5mdW5jdGlvbiB0YXNrRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBjb25zdCBhZGRUYXNrRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1kaWFsb2dcIik7XHJcbiAgICBjb25zdCBhZGROZXdUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1idG5cIik7XHJcbiAgICBjb25zdCBjbG9zZUFkZFRhc2tEaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLWFkZC10YXNrLWRpYWxvZ1wiKTtcclxuICAgIGNvbnN0IGFkZFRhc2tCdG5EaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrLWJ0bi1kaWFsb2dcIik7XHJcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stdGl0bGVcIik7XHJcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGVzY3JpcHRpb25cIik7XHJcbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kdWUtZGF0ZVwiKTtcclxuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1wcmlvcml0eVwiKTtcclxuXHJcbiAgICAvLyBhZGQgbmV3IHRhc2sgZXZlbnQgbGlzdGVuZXJcclxuICAgIGFkZE5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBhZGRUYXNrRGlhbG9nLnNob3dNb2RhbCgpO1xyXG4gICAgICAgIHRhc2tUaXRsZS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcclxuICAgICAgICB0YXNrRHVlRGF0ZS52YWx1ZSA9IFwiXCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjbG9zZSBcImFkZCBuZXcgdGFza1wiIGRpYWxvZ1xyXG4gICAgY2xvc2VBZGRUYXNrRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgYWRkVGFza0RpYWxvZy5jbG9zZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYWRkIG5ldyB0YXNrIGRpYWxvZ1xyXG4gICAgYWRkVGFza0J0bkRpYWxvZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKHRhc2tUaXRsZS52YWx1ZSAmJiB0YXNrRHVlRGF0ZS52YWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2soYCR7dGFza1RpdGxlLnZhbHVlfWAsYCR7dGFza0Rlc2NyaXB0aW9uLnZhbHVlfWAsYCR7dGFza0R1ZURhdGUudmFsdWV9YCxgJHt0YXNrUHJpb3JpdHkudmFsdWV9YCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXQtaGVhZGluZ1wiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGl0bGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aXRsZS50ZXh0Q29udGVudCk7ICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0YXNrTGlzdC5jYXRlZ29yaWVzLmZpbmRJbmRleCgoY2F0ZWdvcnkpID0+IGNhdGVnb3J5Lm5hbWUgPT09IHRpdGxlLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xyXG4gICAgICAgICAgICBjb25zdCBjYXQgPSB0YXNrTGlzdC5jYXRlZ29yaWVzW2luZGV4XTtcclxuICAgICAgICAgICAgY2F0LmFkZFRhc2sodGFzayk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhdCk7XHJcbiAgICAgICAgICAgIGFkZFRhc2tDYXJkKHRhc2spO1xyXG4gICAgICAgICAgICBhZGRUYXNrRGlhbG9nLmNsb3NlKCk7XHJcblxyXG4gICAgICAgICAgICBzYXZlVGFza0xpc3RUb0xvY2FsU3RvcmFnZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRhc2tDYXJkKHRhc2spIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jYXJkLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IGV4aXN0aW5nVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRcIik7XHJcblxyXG4gICAgLy9jaGVjayBpZiB0aGUgdGFzayBhbHJlYWR5IGV4aXN0c1xyXG4gICAgY29uc3QgdGFza0V4aXN0cyA9IEFycmF5LmZyb20oZXhpc3RpbmdUYXNrcykuc29tZSgoZXhpc3RpbmdUYXNrKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRhc2sudGl0bGUgPT09IGV4aXN0aW5nVGFzay5xdWVyeVNlbGVjdG9yKFwiLnRhc2stdGl0bGVcIikudGV4dENvbnRlbnQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBhZGQgdGhlIGNhcmQgaWYgdGhlIHRha3MgZG9lc24ndCBleGlzdCB5ZXRcclxuICAgIGlmICghdGFza0V4aXN0cykge1xyXG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGFzay10aXRsZVwiKTtcclxuICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXNjcmlwdGlvblwiKTtcclxuICAgICAgICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgdGFza0R1ZURhdGUuY2xhc3NMaXN0LmFkZChcInRhc2stZHVlLWRhdGVcIik7XHJcbiAgICAgICAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSBgRHVlIERhdGU6ICR7dGFzay5kdWVEYXRlfWA7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidGFzay1wcmlvcml0eVwiKTtcclxuICAgICAgICBpZiAodGFzay5wcmlvcml0eSkge1xyXG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7dGFzay5wcmlvcml0eX1gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogdW5zZXRgOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICBcclxuICAgICAgICBjb25zdCBlZGl0VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgZWRpdFRhc2tCdG4uY2xhc3NMaXN0LmFkZChcImVkaXQtdGFzay1idG5cIik7XHJcbiAgICAgICAgZWRpdFRhc2tCdG4udGV4dENvbnRlbnQgPSBcImVkaXRcIjtcclxuICAgICAgICBlZGl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixlZGl0VGFza0J1dHRvbkNsaWNrSGFuZGxlcik7XHJcblxyXG4gICAgICAgIGNvbnN0IGRlbGV0ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGRlbGV0ZVRhc2tCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS10YXNrLWJ0blwiKTtcclxuICAgICAgICBkZWxldGVUYXNrQnRuLnRleHRDb250ZW50ID0gXCJkZWxldGVcIjtcclxuICAgICAgICBkZWxldGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGRlbGV0ZVRhc2tCdXR0b25DbGlja0hhbmRsZXIpO1xyXG5cclxuICAgICAgICBjb25zdCB0YXNrRG9uZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgdGFza0RvbmVCdG4uY2xhc3NMaXN0LmFkZChcInRhc2stZG9uZS1idXR0b25cIik7XHJcbiAgICAgICAgdGFza0RvbmVCdG4udGV4dENvbnRlbnQgPSBcImRvbmVcIjtcclxuICAgICAgICB0YXNrRG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0YXNrRG9uZUJ1dHRvbkNsaWNrSGFuZGxlcik7XHJcbiAgICBcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGVkaXRUYXNrQnRuKTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2tCdG4pO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQodGFza0RvbmVCdG4pO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiAgICAvLyBkZWxldGUgdGFzayBidXR0b24gbGlzdGVuZXJcclxuZnVuY3Rpb24gZGVsZXRlVGFza0J1dHRvbkNsaWNrSGFuZGxlcihlKSB7XHJcbiAgICBjb25zdCBjYXROYW1lID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC50ZXh0Q29udGVudC50cmltKCk7XHJcbiAgICBjb25zdCB0YXNrTmFtZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC50ZXh0Q29udGVudC50cmltKClcclxuICAgIGNvbnN0IGNhdEluZGV4ID0gdGFza0xpc3QuY2F0ZWdvcmllcy5maW5kSW5kZXgoKGNhdCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBjYXQubmFtZS50cmltKCkgPT09IGNhdE5hbWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0YXNrTmFtZSk7XHJcbiAgICB0YXNrTGlzdC5jYXRlZ29yaWVzW2NhdEluZGV4XS5kZWxldGVUYXNrKHRhc2tOYW1lKTtcclxuICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICBjb25zb2xlLmxvZyh0YXNrTGlzdCk7XHJcblxyXG4gICAgc2F2ZVRhc2tMaXN0VG9Mb2NhbFN0b3JhZ2UoKVxyXG59XHJcblxyXG4gICAgLy8gZWRpdCBidXR0b24gbGlzdGVuZXJcclxuZnVuY3Rpb24gZWRpdFRhc2tCdXR0b25DbGlja0hhbmRsZXIoZSkge1xyXG4gICAgLy8gcmV0cmlldmUgZWRpdCBkaWFsb2cgZWxlbWVudHNcclxuICAgIGNvbnN0IGFkZFRhc2tEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmUtdGFzay1kaWFsb2dcIik7XHJcbiAgICBjb25zdCBjbG9zZUFkZFRhc2tEaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImUtY2xvc2UtYWRkLXRhc2stZGlhbG9nXCIpO1xyXG4gICAgY29uc3QgYWRkVGFza0J0bkRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZS1hZGQtdGFzay1idG4tZGlhbG9nXCIpO1xyXG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlLXRhc2stdGl0bGVcIik7XHJcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImUtdGFzay1kZXNjcmlwdGlvblwiKTtcclxuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlLXRhc2stZHVlLWRhdGVcIik7XHJcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImUtdGFzay1wcmlvcml0eVwiKTtcclxuXHJcbiAgICAvLyByZXRyaWV2ZSBjdXJyZW50IHZhbHVlcyBvZiBjYXJkXHJcbiAgICBjb25zdCByZW5kZXJlZFRhc2tUaXRsZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC50ZXh0Q29udGVudC50cmltKCk7XHJcbiAgICBjb25zdCByZW5kZXJlZFRhc2tEZXNjcmlwdGlvbiA9IGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcucHJldmlvdXNFbGVtZW50U2libGluZy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50LnRyaW0oKTtcclxuICAgIGNvbnN0IHJlbmRlcmVkRHVlRGF0ZSA9IGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcucHJldmlvdXNFbGVtZW50U2libGluZy50ZXh0Q29udGVudC50cmltKCkucmVwbGFjZShcIkR1ZSBEYXRlOiBcIiwgXCJcIik7XHJcbiAgICByZW5kZXJlZER1ZURhdGUucmVwbGFjZUFsbChcIi1cIiwgXCIgXCIpO1xyXG4gICAgY29uc3QgcmVuZGVyZWRQcmlvcml0eSA9IGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQudHJpbSgpLnJlcGxhY2UoXCJQcmlvcml0eTogXCIsIFwiXCIpO1xyXG4gICAgY29uc29sZS5sb2cocmVuZGVyZWRQcmlvcml0eSk7XHJcblxyXG4gICAgLy8gc2hvdyBlZGl0IHRhc2sgbW9kYWwgb25jbGlja1xyXG4gICAgYWRkVGFza0RpYWxvZy5zaG93TW9kYWwoKTtcclxuICAgIHRhc2tUaXRsZS52YWx1ZSA9IHJlbmRlcmVkVGFza1RpdGxlO1xyXG4gICAgdGFza0Rlc2NyaXB0aW9uLnZhbHVlID0gcmVuZGVyZWRUYXNrRGVzY3JpcHRpb247XHJcbiAgICB0YXNrRHVlRGF0ZS52YWx1ZSA9IHJlbmRlcmVkRHVlRGF0ZTtcclxuICAgIGlmIChyZW5kZXJlZFByaW9yaXR5ICE9PSBcInVuc2V0XCIpIHtcclxuICAgICAgICB0YXNrUHJpb3JpdHkudmFsdWUgPSByZW5kZXJlZFByaW9yaXR5O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0YXNrUHJpb3JpdHkudmFsdWUgPSBcImxvd1wiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNsb3NlIFwiZWRpdCB0YXNrXCIgZGlhbG9nXHJcbiAgICBjbG9zZUFkZFRhc2tEaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBhZGRUYXNrRGlhbG9nLmNsb3NlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBlZGl0IHRhc2sgYnV0dG9uIGRpYWxvZ1xyXG4gICAgYWRkVGFza0J0bkRpYWxvZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKHRhc2tUaXRsZS52YWx1ZSAmJiB0YXNrRHVlRGF0ZS52YWx1ZSkge1xyXG4gICAgICAgICAgICAvLyBmaW5kIHRoZSBjdXJyZW50IGNhdGVnb3J5XHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXQtaGVhZGluZ1wiKTsgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRhc2tMaXN0LmNhdGVnb3JpZXMuZmluZEluZGV4KChjYXRlZ29yeSkgPT4gY2F0ZWdvcnkubmFtZSA9PT0gdGl0bGUudGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhdCA9IHRhc2tMaXN0LmNhdGVnb3JpZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjYXQpO1xyXG4gICAgICAgICAgICAvLyBmaW5kIHRoZSBjdXJyZW50IHRhc2tcclxuICAgICAgICAgICAgY29uc3QgdGFza0luZGV4ID0gY2F0LnRhc2tzLmZpbmRJbmRleCgodGFzaykgPT4gdGFzay50aXRsZSA9PT0gcmVuZGVyZWRUYXNrVGl0bGUpO1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrID0gY2F0LnRhc2tzW3Rhc2tJbmRleF07XHJcbiAgICAgICAgICAgIC8vIHNldCBuZXcgdmFsdWVzXHJcbiAgICAgICAgICAgIHRhc2sudGl0bGUgPSB0YXNrVGl0bGUudmFsdWU7XHJcbiAgICAgICAgICAgIHRhc2suZGVzY3JpcHRpb24gPSB0YXNrRGVzY3JpcHRpb24udmFsdWU7XHJcbiAgICAgICAgICAgIHRhc2suZHVlRGF0ZSA9IHRhc2tEdWVEYXRlLnZhbHVlO1xyXG4gICAgICAgICAgICB0YXNrLnByaW9yaXR5ID0gdGFza1ByaW9yaXR5LnZhbHVlOyAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0KTtcclxuICAgICAgICAgICAgdXBkYXRlQ2FyZCh0YXNrLHJlbmRlcmVkVGFza1RpdGxlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGFkZFRhc2tEaWFsb2cuY2xvc2UoKTtcclxuXHJcbiAgICAgICAgICAgIHNhdmVUYXNrTGlzdFRvTG9jYWxTdG9yYWdlKClcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ2FyZCh0YXNrLG9sZFRpdGxlKSB7XHJcblxyXG4vLyBmaW5kIHRoZSBjYXJkIHdpdGggdGhlIG9sZCB0aXRsZVxyXG5jb25zdCBhbGxDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZFwiKTtcclxuY29uc3QgY2FyZEFycj0gQXJyYXkuZnJvbShhbGxDYXJkcyk7XHJcbmNvbnN0IGluZGV4ID0gY2FyZEFyci5maW5kSW5kZXgoKGNhcmQpID0+IGNhcmQuZmlyc3RDaGlsZC50ZXh0Q29udGVudC50cmltKCkgPT09IG9sZFRpdGxlKTtcclxuY29uc29sZS5sb2coYWxsQ2FyZHNbaW5kZXhdKTtcclxuY29uc3QgY3VycmVudENhcmRDb250YWluZXIgPSBhbGxDYXJkc1tpbmRleF07XHJcblxyXG4vLyB1cGRhdGUgdGhlIHRpdGxlLCB0aGUgZGVzY3JpcHRpb24sIHRoZSBkdWVkYXRlIGFuZCB0aGUgcHJpb3JpdHk7XHJcbmNvbnN0IHRpdGxlID0gY3VycmVudENhcmRDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi50YXNrLXRpdGxlXCIpO1xyXG5jb25zdCBkZXNjcmlwdGlvbiA9IGN1cnJlbnRDYXJkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kZXNjcmlwdGlvblwiKTtcclxuY29uc3QgZHVlRGF0ZSA9IGN1cnJlbnRDYXJkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kdWUtZGF0ZVwiKTtcclxuY29uc3QgcHJpb3JpdHkgPSBjdXJyZW50Q2FyZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnRhc2stcHJpb3JpdHlcIik7XHJcblxyXG50aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XHJcbmRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcclxuZHVlRGF0ZS50ZXh0Q29udGVudCA9IGBEdWUgRGF0ZTogJHt0YXNrLmR1ZURhdGV9YDtcclxucHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7dGFzay5wcmlvcml0eX1gXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRhc2tEb25lQnV0dG9uQ2xpY2tIYW5kbGVyKGUpIHtcclxuICAgIC8vIHNlbGVjdCBjdXJyZW50IGNhcmRcclxuY29uc3QgY3VycmVudENhcmQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG4gICAgLy8gdG9nZ2xlIGNsYXNzIFwiLmRvbmVcIiB0byB0aGUgY2FyZCAodmlzdWFsKVxyXG5jdXJyZW50Q2FyZC5jbGFzc0xpc3QudG9nZ2xlKFwiZG9uZVwiKTtcclxuICAgIC8vIHNlbGVjdCB0aGUgY29ycmVzcG9uZGluZyB0YXNrXHJcbiAgICAgICAgLy8gZmluZGluZyB0aGUgY2F0ZWdvcnlcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXQtaGVhZGluZ1wiKTsgICAgIFxyXG4gICAgY29uc3QgaW5kZXggPSB0YXNrTGlzdC5jYXRlZ29yaWVzLmZpbmRJbmRleCgoY2F0ZWdvcnkpID0+IGNhdGVnb3J5Lm5hbWUgPT09IHRpdGxlLnRleHRDb250ZW50KTtcclxuICAgIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICAgIGNvbnN0IGNhdCA9IHRhc2tMaXN0LmNhdGVnb3JpZXNbaW5kZXhdO1xyXG4gICAgICAgIC8vIGZpbmRpbmcgdGhlIHRhc2tcclxuICAgIGNvbnN0IHRhc2tJbmRleCA9IGNhdC50YXNrcy5maW5kSW5kZXgoKHRhc2spID0+IHRhc2sudGl0bGUgPT09IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC50ZXh0Q29udGVudC50cmltKCkpO1xyXG4gICAgY29uc3QgdGFzayA9IGNhdC50YXNrc1t0YXNrSW5kZXhdO1xyXG4gICAgLy8gdG9nZ2xlIHRhc2sgc3RhdHVzXHJcbiAgICB0YXNrLnRvZ2dsZVRhc2tTdGF0dXMoKTtcclxuXHJcbiAgICBzYXZlVGFza0xpc3RUb0xvY2FsU3RvcmFnZSgpXHJcbn1cclxuXHJcblxyXG4vLyBmdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcclxuLy8gICAgIGxldCBzdG9yYWdlO1xyXG4vLyAgICAgdHJ5IHtcclxuLy8gICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcclxuLy8gICAgICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xyXG4vLyAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XHJcbi8vICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcclxuLy8gICAgICAgcmV0dXJuIHRydWU7XHJcbi8vICAgICB9IGNhdGNoIChlKSB7XHJcbi8vICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxyXG4vLyAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcclxuLy8gICAgICAgICAoZS5jb2RlID09PSAyMiB8fFxyXG4vLyAgICAgICAgICAgLy8gRmlyZWZveFxyXG4vLyAgICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XHJcbi8vICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcclxuLy8gICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcclxuLy8gICAgICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxyXG4vLyAgICAgICAgICAgLy8gRmlyZWZveFxyXG4vLyAgICAgICAgICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmXHJcbi8vICAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcclxuLy8gICAgICAgICBzdG9yYWdlICYmXHJcbi8vICAgICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcclxuLy8gICAgICAgKTtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcblxyXG4vLyAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhcInllc1wiKTtcclxuLy8gICB9IGVsc2Uge1xyXG4vLyAgICAgLy8gVG9vIGJhZCwgbm8gbG9jYWxTdG9yYWdlIGZvciB1c1xyXG4vLyAgIH1cclxuXHJcbi8vIGxldCBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeSh0YXNrTGlzdCk7XHJcbi8vIGNvbnNvbGUubG9nKHN0cmluZyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9