import {TaskList,Category,Task} from "./logic.js";

const taskList = new TaskList();
const workCategory = new Category("work");
const studyCategory = new Category("study");
const personalCategory = new Category("personal");
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
    const cat = new Category(`${catTitle.value}`);
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
const category1 = new Category("category1");
const category2 = new Category("category2");
const category3 = new Category("category3");
const category4 = new Category("category4");
const category5 = new Category("category5");

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