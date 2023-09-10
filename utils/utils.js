import { createTodoCard } from "../components/ui_components.js";

export function insertTodosToDom(arr) {
  arr.forEach((todo) => {
    const todoCard = createTodoCard(todo);
    document.querySelector(".cards-container-el").innerHTML += todoCard;
  });
}

export function changeCompletedStatus(todo) {
  if (todo.getCompleted === false) {
    todo.getCompleted = true;
  } else {
    todo.getCompleted = false;
  }
}

export class createProject {
  constructor(projectName, todoArr) {
    this.projectName = projectName;
    this.todoArr = todoArr;
  }

  get getProjectName() {
    return this.projectName;
  }

  get getTodoArr() {
    return this.todoArr;
  }

  addTodoItem(title, description, dueDate, priority) {
    this.todoArr.push(
      new CreateTodoItem(title, description, dueDate, priority)
    );
  }

  getTodoItem(itemID) {
    return this.todoArr[itemID];
  }

  getTodoItemByTitle(title) {
    for (let i = 0; i < this.todoArr.length; i++) {
      if (this.todoArr[i].title === title) {
        return this.todoArr[i];
      }
    }
  }

  getTodoItemByDescription(description) {
    for (let i = 0; i < this.todoArr.length; i++) {
      if (this.todoArr[i].description === description) {
        return this.todoArr[i];
      }
    }
  }

  getTodoItemByDueDate(dueDate) {
    for (let i = 0; i < this.todoArr.length; i++) {
      if (this.todoArr[i].dueDate === dueDate) {
        return this.todoArr[i];
      }
    }
  }

  getTodoItemByPriority(priority) {
    for (let i = 0; i < this.todoArr.length; i++) {
      if (this.todoArr[i].priority === priority) {
        return this.todoArr[i];
      }
    }
  }

  getTodoItemByCompleted(completed) {
    for (let i = 0; i < this.todoArr.length; i++) {
      if (this.todoArr[i].completed === completed) {
        return this.todoArr[i];
      }
    }
  }

  getTodoItemByTitleAndDescription(title, description) {
    for (let i = 0; i < this.todoArr.length; i++) {
      if (
        this.todoArr[i].title === title &&
        this.todoArr[i].description === description
      ) {
        return this.todoArr[i];
      }
    }
  }

  getTodoItemByTitleAndDueDate(title, dueDate) {
    for (let i = 0; i < this.todoArr.length; i++) {
      if (
        this.todoArr[i].title === title &&
        this.todoArr[i].dueDate === dueDate
      ) {
        return this.todoArr[i];
      }
    }
  }
}

export function deleteTodoItem(itemID) {
  if (itemID) {
    console.log(`Todo with ID ${itemID} deleted`);
    delete this.todoArr[itemID];
  }
}

// Generate a six digits unique UUID

export function generateShortUUID() {
  // Generate a random UUID (version 4)
  const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    }
  );

  // Take the first 6 characters from the UUID
  const shortUUID = uuid.substring(0, 6);

  return shortUUID;
}
