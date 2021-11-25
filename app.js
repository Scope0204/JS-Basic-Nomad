// const loginForm = document.getElementsById("login-form"); // html element
// const loginInput = loginForm.querySelector("input"); //
// const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefalut();
  const username = loginInput.value; // 인풋한 내용의 값을 저장
}

function handleLinkClick() {
  alert("click");
}

loginForm.addEventListener("submit", onLoginSubmit);

link.addEventListener("click", handleLinkClick);
