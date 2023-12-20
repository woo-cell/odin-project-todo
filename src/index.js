import {TaskList,Category,Task} from "./logic.js";


const taskList = new TaskList();
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
const task4 = new Task("Task 4", "Description of Task 4", "2023-04-01");
const task5 = new Task("Task 5", "Description of Task 5", "2023-05-01");
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
    const cat = new Category(`${catTitle.value}`);
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
            const task = new Task(`${taskTitle.value}`,`${taskDescription.value}`,`${taskDueDate.value}`,`${taskPriority.value}`);
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
