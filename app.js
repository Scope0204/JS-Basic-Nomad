// const loginForm = document.getElementsById("login-form"); // html element
// const loginInput = loginForm.querySelector("input"); //
// const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden"; // 일반적으로 string만 포함된 변수는 대문자로 표기하고, string을 저장하고 싶을 때 사용
const USERNAME_KEY = "username"; // 일반적으로 string만 포함된 변수는 대문자로 표기string을 저장하고 싶을 때 사용

function onLoginSubmit(event) {
  // 로그인 버튼 누를 시

  event.preventDefault(); // 기본 실행 초기화 (submit 새로고침)
  loginForm.classList.add(HIDDEN_CLASSNAME); // 로그인시 로그인 창을 보이지않게하는 css클래스 추가

  const username = loginInput.value; // 인풋한 내용의 값(로그인 value)을 저장
  localStorage.setItem(USERNAME_KEY, username); // 로컬저장소의 username키에 인풋 값을 저장
  paintGreetings(username); // 로그인 후 나타나는 화면. 인풋 값(로그인 한 아이디)을 인자로 넘겨 줌
}

function paintGreetings(username) {
  // 로그인 한 아이디를 화면에 출력
  greeting.innerText = `Hello ${username}`; // (= "Hello " + username)
  greeting.classList.remove(HIDDEN_CLASSNAME); // 기존의 hidden class값을 지워 화면에 나타나도록 함
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // 로컬저장소에 key값이 username인 것을 가져옴

if (savedUsername == null) {
  // localstorage에 유저 정보가 없을 때,
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME); // 로그인 화면이 나타나도록 함
  loginForm.addEventListener("submit", onLoginSubmit); // 로그인 버튼 클릭 시 발생하는 이벤트
} else {
  // localstorage에 유저 정보가 있는 경우,
  // show the greetings
  paintGreetings(savedUsername);
}
