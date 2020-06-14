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
  const li = btn.parentNode;
  todoList.removeChild(li);
  const cleantodoLists = todoLists.filter(function (tasks) {
    return parseInt(tasks.id) !== parseInt(li.id);
  });
  todoLists = cleantodoLists;
  saveTodoLists();
}

function reTodoLists(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const span = li.querySelector("span");
  deleteFinishedTasks(event);
  painttodoLists(span.innerText);
}

// task 저장하기
function saveTodoLists() {
  localStorage.setItem(TODO_LS, JSON.stringify(todoLists));
}

// task에서 submit 할때 함수
function submitHandler(event) {
  event.preventDefault();
  const currentValue = taskInput.value;
  paintTodoLists(currentValue);
  taskInput.value = "";
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
  const li = document.createElement("li");
  const delBtn = document.createElement("img");
  const span = document.createElement("span");
  const newID = todoLists.length + 1;
  delBtn.addEventListener("click", deleteTodoLists);
  delBtn.classList.add("del");
  delBtn.src = "src/x.svg";
  delBtn.style.width = "20px";
  delBtn.style.height = "20px";
  delBtn.style.cursor = "pointer";
  delBtn.id = newID;
  li.id = newID;
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  todoList.appendChild(li);
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
