import "./style.css";
import { CreateTodoItem } from "./utils/classes.js";
import {
  createProject,
  insertTodosToDom,
  generateShortUUID,
} from "./utils/utils.js";
import { createTodoCard } from "./components/ui_components.js";
import { createNavbar } from "./components/navbar.js";

let todosArr = [
  new CreateTodoItem(
    "Learn JavaScript",
    "Learn JavaScript",
    "2022-01-01",
    "High"
  ),
  new CreateTodoItem("Learn React", "Learn React", "2022-01-01", "High", false),
  new CreateTodoItem("Learn Node", "Learn Node", "2022-01-01", "High", false),
  new CreateTodoItem(
    "Learn Angular",
    "Learn Angular",
    "2022-01-01",
    "High",
    true
  ),
  new CreateTodoItem("Learn Vue", "Learn Vue", "2022-01-01", "High", true),
  new CreateTodoItem(
    "Learn React Native",
    "Learn React Native",
    "2022-01-01",
    "High",
    true
  ),
  new CreateTodoItem("Learn Flutter", "Learn Flutter", "2022-01-01", "High"),
  new CreateTodoItem("Learn Swift", "Learn Swift", "2022-01-01", "High"),
  new CreateTodoItem("Learn Python", "Learn Python", "2022-01-01", "High"),
];

const createTaskButton = document.querySelector("#create-task-button");

createTaskButton.addEventListener("click", () => {
  const newTaskTitle = document.querySelector("#todo-title-input").value;
  const newTaskDescription = document.querySelector(
    "#todo-description-input"
  ).value;
  const newTaskDueDate = document.querySelector("#todo-date-input").value;
  const newTaskPriority = document.querySelector("#todo-priority-input").value;

  const taskId = generateShortUUID();

  const newTodo = new CreateTodoItem(
    newTaskTitle,
    newTaskDescription,
    newTaskDueDate,
    newTaskPriority,
    taskId
  );

  console.log(newTodo);

  todosArr.unshift(newTodo);

  const cardsContainerEl = document.querySelector(".cards-container-el");
  cardsContainerEl.innerHTML = "";
  insertTodosToDom(todosArr);
});

// const deleteTaskButton = document.querySelector(".delete-task-button");
// deleteTaskButton.addEventListener("click", () => {
//   const deleteTask = document.querySelector(".delete-task-input").value;

//   todosArr = todosArr.filter((todo) => todo.task !== deleteTask);

//   document.querySelector(".cards-container-el").innerHTML += todoCard;
// });

function main() {
  insertTodosToDom(todosArr);
  const nav = createNavbar();
  const app = document.querySelector("#app");
  app.prepend(nav);
}

main();
