export function createTodoCard(todo) {
  const title = todo.title;
  const description = todo.description;
  const dueDate = todo.dueDate;
  const priority = todo.priority;
  const completed = false;
  // console.log(todo);

  return `
           <div class="card">
              <header class="card-header">
                <h4 class="card-header-title">${title}</h4>
                <span id="priority-display-el">${priority}</span>
              </header>
              <div class="card-content">
                <div class="content">
                  <p>
                    ${description}
                  </p>
                  <time datetime="2016-1-1">${dueDate}</time>
                </div>
                <br />
              </div>
              <footer class="card-footer">
                <button href="#" class="card-footer-item">Complete</button>
                <button href="#" class="card-footer-item">Delete</button>
              </footer>
            </div>
    `;
}
