export class TodoItemStatusChanger {
  constructor(todo) {
    return `Todo received.`;
  }

  changeCompletedStatus(todo) {
    throw new Error(
      "changeCompletedStatus method must be overridden by concrete status changers"
    );
  }
}

class ToggleStatusChanger extends TodoItemStatusChanger {
  changeCompletedStatus(todo) {
    todo.completed = !todo.completed;
  }
}

class DeleteStatusChanger extends TodoItemStatusChanger {
  changeCompletedStatus(todo) {
    todo.deleted = true;
  }
}

class RestoreStatusChanger extends TodoItemStatusChanger {
  changeCompletedStatus(todo) {
    todo.deleted = false;
  }
}

class TodoItem {
  constructor(todo) {
    this.todo = todo;
  }

  get completed() {
    return this.todo.completed;
  }

  set completed(value) {
    this.todo.completed = value;
  }

  get deleted() {
    return this.todo.deleted;
  }

  set deleted(value) {
    this.todo.deleted = value;
  }
}

class TodoItemStatusChangerFactory {
  static create(todo) {
    switch (todo.status) {
      case "completed":
        return new ToggleStatusChanger(todo);
      case "deleted":
        return new DeleteStatusChanger(todo);
      default:
        return new RestoreStatusChanger(todo);
    }
  }
}
