// array for todo list
document.addEventListener('DOMContentLoaded', () => {
  const todoList = [
    {
      id: 1,
      task: 'Learn HTML',
      completed: true,
    },
    {
      id: 2,
      task: 'Learn CSS',
      completed: true,
    },
    {
      id: 3,
      task: 'Learn JS',
      completed: false,
    },
    {
      id: 4,
      task: 'Learn TypeScript',
      completed: false,
    },
    {
      id: 5,
      task: 'Learn React',
      completed: false,
    },
  ];
  // haetaan <ul> elementti
  const ulElement = document.querySelector('ul');

  // iteroidaan todoList array
  todoList.forEach((todo) => {
    // luodaan jokaiselle todo:lle <li> elementti
    const liElement = document.createElement('li');

    // luodaan checkbox inputti
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `todo-${todo.id}`;
    checkbox.checked = todo.completed;

    // luodaan labelit
    const label = document.createElement('label');
    label.htmlFor = `todo-${todo.id}`;
    label.appendChild(document.createTextNode(todo.task));

    // lisätään checkbox ja label <li> elementtiin
    liElement.appendChild(checkbox);
    liElement.appendChild(label);

    // lisätään <li> elementti <ul> elementtiin
    ulElement.appendChild(liElement);
  });
});
