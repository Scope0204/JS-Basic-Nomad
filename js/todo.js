const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input")

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  //JSON.stringify() : js script , array ... 을 string으로 바꿔줌
}

function deleteToDo(e) {
  const li = e.target.parentElement;
  li.remove();
  //console.log(typeof li.id); // li.id 는 string 이다 ! >> toDo.id 는 int이므로 타입변경이 필요
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // id 값이 다른
  saveToDos(); // 필터링 된 toDos 리스트를 다시 저장
}

function paintToDo(newToDo) {
  // todo를 그리는 역할
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span"); // 버튼 부분 공간
  span.innerText = newToDo.text;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const newToDo = toDoInput.value; // input값을 변수에 복사
  toDoInput.value = "";
  const newTodoOcj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newTodoOcj); // id가 있는 object를 저장함
  paintToDo(newTodoOcj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; // localstorage에 값이 있는 경우 toDos에 값을 넣어준다.(let이기 때문에 변경가능)
  //JSON.parse() : string 을 array로 바꿔줌
  parsedToDos.forEach(paintToDo);
  //forEach 는 array의 각 item에 대해 funtion을 실행하게 해줌
}
