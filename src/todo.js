// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const taskForm = document.querySelector(".taskForm");
const taskInput = document.querySelector(".taskInput");
const todoList = document.querySelector(".todolist");
const TODO_LS = "LIST";
let todoLists = [];

function deleteTodoLists(event) {
  const btn = event.target;
  const div = btn.parentNode.parentNode;
  console.log(btn);
  console.log(div);
  todoList.removeChild(div);
  const cleantodoLists = todoLists.filter(function (tasks) {
    return parseInt(tasks.id) !== parseInt(div.id);
  });
  todoLists = cleantodoLists;
  saveTodoLists();
}

// task 저장하기
function saveTodoLists() {
  localStorage.setItem(TODO_LS, JSON.stringify(todoLists));
}

// task에서 submit 할때 함수
function submitHandler(event) {
  event.preventDefault();
  const currentValue = taskInput.value;
  if (currentValue !== "") {
    paintTodoLists(currentValue);
    taskInput.value = "";
  }
}

// 할일목록 불러오기
function loadTodoLists() {
  const loadedTodoLists = localStorage.getItem(TODO_LS);
  if (loadedTodoLists !== null) {
    const parsedTodoLists = JSON.parse(loadedTodoLists);
    parsedTodoLists.forEach(loadPaintTodoLists);
  }
}

// todo, finished 목록 불러온 것 작성할 때 사용
function loadPaintTodoLists(tasks) {
  paintTodoLists(tasks.text);
}

// submit 할 시 중간에 tasks를 그려줌
function paintTodoLists(text) {
  const div = document.createElement("div");
  const delBtn = document.createElement("svg");
  const span = document.createElement("span");
  const newID = todoLists.length + 1;
  delBtn.addEventListener("click", deleteTodoLists);
  delBtn.classList.add("del");
  delBtn.innerHTML = `
  <svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  x="0px"
  y="0px"
  viewBox="0 0 328.51 328.51"
  style="enable-background: new 0 0 328.51 328.51;"
  xml:space="preserve"
  width="35px"
  height="35px"
>
  <g>
    <path
      d="M164.255,0C73.685,0,0,73.685,0,164.255S73.685,328.51,164.255,328.51S328.51,254.825,328.51,164.255S254.825,0,164.255,0
      z M164.255,313.51C81.955,313.51,15,246.555,15,164.255S81.955,15,164.255,15S313.51,81.955,313.51,164.255
      S246.555,313.51,164.255,313.51z"
    />
    <polygon
      points="229.044,88.858 164.255,153.647 99.466,88.858 88.858,99.466 153.647,164.255 88.858,229.044 99.466,239.651   
      164.255,174.862 229.044,239.651 239.651,229.044 174.862,164.255 239.651,99.466"
    />
  </g>
</svg>`;
  delBtn.id = newID;
  div.classList.add("todo_li");
  div.id = newID;
  span.innerText = text;
  div.appendChild(delBtn);
  div.appendChild(span);
  todoList.appendChild(div);
  const todosTodoObj = {
    text: text,
    id: newID,
  };
  todoLists.push(todosTodoObj);
  saveTodoLists();
}

function init() {
  loadTodoLists();
  taskForm.addEventListener("submit", submitHandler);
  // selDelBtn.addEventListener("onclick", todoHandler);
}
init();
