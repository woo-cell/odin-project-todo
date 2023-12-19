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


//retrieve the content element
const contentElement = document.querySelector(".content");

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
    listItem.innerHTML = `<a href="#">${category.name}</a><button class="delete-cat-btn">delete</button>`;
    list.appendChild(listItem);
    deleteBtnEventListener();  
}


function initializeCategories() {
    addCategoryButton();
    addCategoryToCategoryList(workCategory);
    addCategoryToCategoryList(studyCategory);
    addCategoryToCategoryList(personalCategory);
}

function initializeScreen() {
    createHeader();
    createMain();
    initializeCategories();
    createFooter();
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

addCatToListBtn.addEventListener("click", () => {
    const cat = new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Category(`${catTitle.value}`);
    addCategoryToCategoryList(cat);
    taskList.addCategory(cat);
    console.log(taskList);
    addCatDialog.close();
});


function deleteBtnEventListener() {
    const deleteCatBtn = document.querySelectorAll(".delete-cat-btn");
    deleteCatBtn.forEach((button) => {
        button.addEventListener("click", (e) => {
            console.log(e.target.parentElement.firstChild.textContent);
            const btnArr = Array.from(deleteCatBtn);
            const index = btnArr.indexOf(e.target);
            console.log(index);
            e.target.parentElement.remove();
            taskList.deleteCategory(`${e.target.parentElement.firstChild.textContent}`);
            console.log(taskList);
        });
    });
}




// Creating category instances
const category1 = new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Category("category1");
const category2 = new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Category("category2");
const category3 = new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Category("category3");
const category4 = new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Category("category4");
const category5 = new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Category("category5");

// Adding categories to the taskList
taskList.addCategory(category1);
taskList.addCategory(category2);
taskList.addCategory(category3);
taskList.addCategory(category4);
taskList.addCategory(category5);

addCategoryToCategoryList(category1);
addCategoryToCategoryList(category2);
addCategoryToCategoryList(category3);
addCategoryToCategoryList(category4);
addCategoryToCategoryList(category5);

console.log(taskList);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDNUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOa0Q7QUFDbEQ7QUFDQSxxQkFBcUIsK0NBQVE7QUFDN0IseUJBQXlCLCtDQUFRO0FBQ2pDLDBCQUEwQiwrQ0FBUTtBQUNsQyw2QkFBNkIsK0NBQVE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxFQUFFLGFBQWE7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGNBQWM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLG9CQUFvQiwrQ0FBUSxJQUFJLGVBQWU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qyw4Q0FBOEM7QUFDckY7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwrQ0FBUTtBQUM5QixzQkFBc0IsK0NBQVE7QUFDOUIsc0JBQXNCLCtDQUFRO0FBQzlCLHNCQUFzQiwrQ0FBUTtBQUM5QixzQkFBc0IsK0NBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUYXNrTGlzdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRDYXRlZ29yeShjYXRlZ29yeSkge1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVDYXRlZ29yeShuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gdGhpcy5jYXRlZ29yaWVzLmZpbHRlcigoY2F0ZWdvcnkpID0+IGNhdGVnb3J5Lm5hbWUgIT09IG5hbWUpOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jbGFzcyBDYXRlZ29yeSB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUYXNrKHRhc2spIHtcclxuICAgICAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVGFzayh0aXRsZSkge1xyXG4gICAgICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay50aXRsZSAhPT0gdGl0bGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBUYXNrIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVUYXNrU3RhdHVzKCkge1xyXG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gIXRoaXMuY29tcGxldGVkO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7VGFza0xpc3QsQ2F0ZWdvcnksVGFza30iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7VGFza0xpc3QsQ2F0ZWdvcnksVGFza30gZnJvbSBcIi4vbG9naWMuanNcIjtcclxuXHJcbmNvbnN0IHRhc2tMaXN0ID0gbmV3IFRhc2tMaXN0KCk7XHJcbmNvbnN0IHdvcmtDYXRlZ29yeSA9IG5ldyBDYXRlZ29yeShcIndvcmtcIik7XHJcbmNvbnN0IHN0dWR5Q2F0ZWdvcnkgPSBuZXcgQ2F0ZWdvcnkoXCJzdHVkeVwiKTtcclxuY29uc3QgcGVyc29uYWxDYXRlZ29yeSA9IG5ldyBDYXRlZ29yeShcInBlcnNvbmFsXCIpO1xyXG50YXNrTGlzdC5hZGRDYXRlZ29yeSh3b3JrQ2F0ZWdvcnkpO1xyXG50YXNrTGlzdC5hZGRDYXRlZ29yeShzdHVkeUNhdGVnb3J5KTtcclxudGFza0xpc3QuYWRkQ2F0ZWdvcnkocGVyc29uYWxDYXRlZ29yeSk7XHJcblxyXG5cclxuLy9yZXRyaWV2ZSB0aGUgY29udGVudCBlbGVtZW50XHJcbmNvbnN0IGNvbnRlbnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xyXG5jb25zdCBoZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbmhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJUTyBETyBBUFBcIjtcclxuaGVhZGVyRWxlbWVudC5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XHJcbmNvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKGhlYWRlckVsZW1lbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XHJcbiAgICBjb25zdCBmb290ZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuICAgIGNvbnN0IGZvb3RlclBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgZm9vdGVyUGFyYS5pbm5lckhUTUwgPSBgJmNvcHk7ICR7Y3VycmVudFllYXJ9IFdvby1DZWxsYDtcclxuICAgIGZvb3RlckVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9vdGVyUGFyYSk7XHJcbiAgICBjb250ZW50RWxlbWVudC5hcHBlbmRDaGlsZChmb290ZXJFbGVtZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcclxuICAgIGNvbnN0IG1haW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XHJcbiAgICBtYWluRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVDYXRlZ29yeUNvbnRhaW5lcigpKTtcclxuICAgIG1haW5FbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tDb250YWluZXIoKSk7XHJcbiAgICBjb250ZW50RWxlbWVudC5hcHBlbmRDaGlsZChtYWluRWxlbWVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3J5Q29udGFpbmVyKCkge1xyXG4gICAgY29uc3QgY2F0ZWdvcnlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2F0ZWdvcnlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5LWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IGNhdGVnb3J5UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY2F0ZWdvcnlQYXJhLnRleHRDb250ZW50ID0gXCJZb3VyIGNhdGVnb3JpZXNcIjtcclxuICAgIGNvbnN0IGNhdGVnb3J5TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIGNhdGVnb3J5Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhdGVnb3J5UGFyYSk7XHJcbiAgICBjYXRlZ29yeUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXRlZ29yeUxpc3QpO1xyXG4gICAgcmV0dXJuIGNhdGVnb3J5Q29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrQ29udGFpbmVyKCkge1xyXG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lclwiKTtcclxuICAgIHJldHVybiB0YXNrQ29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDYXRlZ29yeUJ1dHRvbigpIHtcclxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhdGVnb3J5LWNvbnRhaW5lciA+IHVsXCIpO1xyXG4gICAgY29uc3QgYWRkQ2F0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGFkZENhdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLWNhdGVnb3J5XCIpO1xyXG4gICAgYWRkQ2F0QnRuLnRleHRDb250ZW50ID0gXCJBRERcIjtcclxuICAgIGxpc3QuYXBwZW5kQ2hpbGQoYWRkQ2F0QnRuKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ2F0ZWdvcnlUb0NhdGVnb3J5TGlzdChjYXRlZ29yeSkge1xyXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2F0ZWdvcnktY29udGFpbmVyID4gdWxcIik7XHJcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGxpc3RJdGVtLmlubmVySFRNTCA9IGA8YSBocmVmPVwiI1wiPiR7Y2F0ZWdvcnkubmFtZX08L2E+PGJ1dHRvbiBjbGFzcz1cImRlbGV0ZS1jYXQtYnRuXCI+ZGVsZXRlPC9idXR0b24+YDtcclxuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xyXG4gICAgZGVsZXRlQnRuRXZlbnRMaXN0ZW5lcigpOyAgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplQ2F0ZWdvcmllcygpIHtcclxuICAgIGFkZENhdGVnb3J5QnV0dG9uKCk7XHJcbiAgICBhZGRDYXRlZ29yeVRvQ2F0ZWdvcnlMaXN0KHdvcmtDYXRlZ29yeSk7XHJcbiAgICBhZGRDYXRlZ29yeVRvQ2F0ZWdvcnlMaXN0KHN0dWR5Q2F0ZWdvcnkpO1xyXG4gICAgYWRkQ2F0ZWdvcnlUb0NhdGVnb3J5TGlzdChwZXJzb25hbENhdGVnb3J5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZVNjcmVlbigpIHtcclxuICAgIGNyZWF0ZUhlYWRlcigpO1xyXG4gICAgY3JlYXRlTWFpbigpO1xyXG4gICAgaW5pdGlhbGl6ZUNhdGVnb3JpZXMoKTtcclxuICAgIGNyZWF0ZUZvb3RlcigpO1xyXG59XHJcblxyXG5pbml0aWFsaXplU2NyZWVuKCk7XHJcblxyXG4vLyBjYXRlZ29yaWVzIGV2ZW50IGxpc3RlbmVyXHJcbmNvbnN0IGFkZENhdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWNhdGVnb3J5XCIpO1xyXG5jb25zdCBhZGRDYXREaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1jYXQtZGlhbG9nXCIpO1xyXG5jb25zdCBjYXRUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2F0LXRpdGxlXCIpO1xyXG5jb25zdCBjbG9zZUNhdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtYWRkLWNhdC1kaWFsb2dcIik7XHJcbmNvbnN0IGFkZENhdFRvTGlzdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLWNhdC1idG4tZGlhbG9nXCIpO1xyXG5cclxuXHJcbmFkZENhdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgYWRkQ2F0RGlhbG9nLnNob3dNb2RhbCgpO1xyXG59KTtcclxuXHJcbmNsb3NlQ2F0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBhZGRDYXREaWFsb2cuY2xvc2UoKTtcclxuICAgIGNhdFRpdGxlLnZhbHVlID0gXCJcIjtcclxufSk7XHJcblxyXG5hZGRDYXRUb0xpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNvbnN0IGNhdCA9IG5ldyBDYXRlZ29yeShgJHtjYXRUaXRsZS52YWx1ZX1gKTtcclxuICAgIGFkZENhdGVnb3J5VG9DYXRlZ29yeUxpc3QoY2F0KTtcclxuICAgIHRhc2tMaXN0LmFkZENhdGVnb3J5KGNhdCk7XHJcbiAgICBjb25zb2xlLmxvZyh0YXNrTGlzdCk7XHJcbiAgICBhZGRDYXREaWFsb2cuY2xvc2UoKTtcclxufSk7XHJcblxyXG5cclxuZnVuY3Rpb24gZGVsZXRlQnRuRXZlbnRMaXN0ZW5lcigpIHtcclxuICAgIGNvbnN0IGRlbGV0ZUNhdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlLWNhdC1idG5cIik7XHJcbiAgICBkZWxldGVDYXRCdG4uZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQudGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICBjb25zdCBidG5BcnIgPSBBcnJheS5mcm9tKGRlbGV0ZUNhdEJ0bik7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gYnRuQXJyLmluZGV4T2YoZS50YXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHRhc2tMaXN0LmRlbGV0ZUNhdGVnb3J5KGAke2UudGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC50ZXh0Q29udGVudH1gKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGFza0xpc3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vIENyZWF0aW5nIGNhdGVnb3J5IGluc3RhbmNlc1xyXG5jb25zdCBjYXRlZ29yeTEgPSBuZXcgQ2F0ZWdvcnkoXCJjYXRlZ29yeTFcIik7XHJcbmNvbnN0IGNhdGVnb3J5MiA9IG5ldyBDYXRlZ29yeShcImNhdGVnb3J5MlwiKTtcclxuY29uc3QgY2F0ZWdvcnkzID0gbmV3IENhdGVnb3J5KFwiY2F0ZWdvcnkzXCIpO1xyXG5jb25zdCBjYXRlZ29yeTQgPSBuZXcgQ2F0ZWdvcnkoXCJjYXRlZ29yeTRcIik7XHJcbmNvbnN0IGNhdGVnb3J5NSA9IG5ldyBDYXRlZ29yeShcImNhdGVnb3J5NVwiKTtcclxuXHJcbi8vIEFkZGluZyBjYXRlZ29yaWVzIHRvIHRoZSB0YXNrTGlzdFxyXG50YXNrTGlzdC5hZGRDYXRlZ29yeShjYXRlZ29yeTEpO1xyXG50YXNrTGlzdC5hZGRDYXRlZ29yeShjYXRlZ29yeTIpO1xyXG50YXNrTGlzdC5hZGRDYXRlZ29yeShjYXRlZ29yeTMpO1xyXG50YXNrTGlzdC5hZGRDYXRlZ29yeShjYXRlZ29yeTQpO1xyXG50YXNrTGlzdC5hZGRDYXRlZ29yeShjYXRlZ29yeTUpO1xyXG5cclxuYWRkQ2F0ZWdvcnlUb0NhdGVnb3J5TGlzdChjYXRlZ29yeTEpO1xyXG5hZGRDYXRlZ29yeVRvQ2F0ZWdvcnlMaXN0KGNhdGVnb3J5Mik7XHJcbmFkZENhdGVnb3J5VG9DYXRlZ29yeUxpc3QoY2F0ZWdvcnkzKTtcclxuYWRkQ2F0ZWdvcnlUb0NhdGVnb3J5TGlzdChjYXRlZ29yeTQpO1xyXG5hZGRDYXRlZ29yeVRvQ2F0ZWdvcnlMaXN0KGNhdGVnb3J5NSk7XHJcblxyXG5jb25zb2xlLmxvZyh0YXNrTGlzdCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9