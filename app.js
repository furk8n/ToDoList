//selectors

const todoInput = document.querySelector('.todo-Input');
const todoButton = document.querySelector('.todo-Button');
const todoList = document.querySelector('.todo-List');


//Event Listeners

todoButton.addEventListener('click', addTodo);




//Functions
  //Prevent form from submitting ;)
function addTodo(event){
    event.preventDefault();
  //Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Create LI
  const newTodo = document.createElement('li');
  newTodo.innerText = 'hey';
  newTodo.classList.add ('todo-item');
  todoDiv.appendChild(newTodo);
 
  //CHECK MARK BUTTON

  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);


  //CHECK TRASH BUTTON

  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("complete-btn");
  todoDiv.appendChild(trashButton);

  //APPEND TO LİST

  todoList.appendChild(todoDiv);

}