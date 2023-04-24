const input = document.getElementById("inp");
const todoBtn = document.getElementById("todobutton");
const list = document.querySelector(".list");
const clearAll = document.querySelector(".all");
const showTodo = () => {
  let data = JSON.parse(localStorage.getItem("todos"));
  if (data) {
    list.innerHTML = data
      .map((element) => {
        let id = element.id;
        let value = element.value;
        return `<div class="listelement">
          <p>${value}</p>
          <button class="listdone" id="listd" uin="${id}">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#fff"
              class="bi bi-trash-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
              />
            </svg>
          </button>
        </div>`;
      })
      .join("");
    let listelementbtns = document.querySelectorAll("#listd");
    Array.from(listelementbtns).forEach((element) => {
      element.addEventListener("click", () => {
        let uin = element.getAttribute("uin");
        let arr = data.filter((element) => {
          return element.id != uin;
        });
        if (arr.length == 0) {
          localStorage.clear();
        } else {
          localStorage.setItem("todos", JSON.stringify(arr));
        }
        showTodo();
      });
    });
  } else {
    list.innerHTML = "<p class='emptytodo'>Your Todos Will Appear Here</p>";
  }
};
const addTodo = () => {
  if (input.value != "") {
    let prevtodos = localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : [];
    let value = [
      ...prevtodos,
      {
        id: Math.random().toString(16).slice(2),
        value: input.value,
        time: new Date().toLocaleString(),
      },
    ];
    localStorage.setItem("todos", JSON.stringify(value));
    input.value = "";
    showTodo();
  }
};
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    todoBtn.click();
  }
});
todoBtn.addEventListener("click", () => {
  addTodo();
});
showTodo();
clearAll.addEventListener("click", () => {
  localStorage.clear();
  showTodo();
});
