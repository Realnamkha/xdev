document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.getElementById("todoForm");
  const buttonContainer = document.getElementsByClassName("btn")[0];

  function clearForm() {
    document.getElementById("todoName").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("category").value = "easy";
  }

  function showFormAndButtons() {
    todoForm.style.display = "block";
    buttonContainer.innerHTML = `
        <button id="addTaskBtn">Add Task</button>
        <button id="cancelBtn">Cancel</button>
      `;

    document.getElementById("cancelBtn").addEventListener("click", () => {
      todoForm.style.display = "none";
      clearForm();
      restoreOriginalButton();
    });

    document.getElementById("addTaskBtn").addEventListener("click", () => {
      const data = getFormInput();
      if (!data || data.todoName.trim() === "") {
        alert("Please enter a name for the task.");
        return;
      }
      renderTodo(data);
      todoForm.style.display = "none";
      clearForm();
      restoreOriginalButton();
    });
  }

  function restoreOriginalButton() {
    buttonContainer.innerHTML = `<button id="toggleForm">ADD NEW TASK</button>`;
    document.getElementById("toggleForm").addEventListener("click", () => {
      showFormAndButtons();
      clearForm();
    });
  }

  function getcurrentDateandTime() {
    const today = new Date();
    return today.toISOString().split("T")[0];
  }

  function getFormInput() {
    if (todoForm.style.display === "block") {
      const todoName = document.getElementById("todoName").value;
      const todoDesc = document.getElementById("desc").value;
      const category = document.getElementById("category").value;
      const date = getcurrentDateandTime();
      return { todoName, todoDesc, category, date };
    }
    return null;
  }

  function renderTodo(data) {
    const { todoName, todoDesc, category, date } = data;

    const todoList = document.querySelector(".todo"); // only first

    const todoItem = document.createElement("div");
    todoItem.className = "todo-item";
    todoItem.id = "task-" + Date.now() + "-" + Math.floor(Math.random() * 1000);
    todoItem.setAttribute("draggable", "true");

    todoItem.addEventListener("dragstart", (ev) => {
      ev.dataTransfer.setData("text/plain", ev.target.id);
      ev.dataTransfer.effectAllowed = "move";
    });

    const todoContent = document.createElement("div");
    todoContent.className = "todo-content";
    todoContent.innerHTML = `
        <p>${todoName}</p>
        <p>${todoDesc}</p>
      `;

    const todoMeta = document.createElement("div");
    todoMeta.className = "todo-meta";

    const leftGroup = document.createElement("div");
    leftGroup.className = "left-group";

    const categoryBtn = document.createElement("button");
    categoryBtn.textContent =
      category.charAt(0).toUpperCase() + category.slice(1);

    const dateElem = document.createElement("p");
    dateElem.textContent = date;

    leftGroup.appendChild(categoryBtn);
    leftGroup.appendChild(dateElem);
    todoMeta.appendChild(leftGroup);

    const timeAgo = document.createElement("div");
    timeAgo.textContent = "Just now";
    todoMeta.appendChild(timeAgo);

    todoItem.appendChild(todoContent);
    todoItem.appendChild(todoMeta);

    todoList.appendChild(todoItem);
  }

  // Enable dragover and drop for all columns
  const dropZones = document.querySelectorAll(
    ".todo, .progress, .review, .finished"
  );

  dropZones.forEach((zone) => {
    zone.addEventListener("dragover", (ev) => {
      ev.preventDefault();
      ev.dataTransfer.dropEffect = "move";
      zone.classList.add("drag-over");
    });

    zone.addEventListener("dragleave", () => {
      zone.classList.remove("drag-over");
    });

    zone.addEventListener("drop", (ev) => {
      ev.preventDefault();
      zone.classList.remove("drag-over");
      const id = ev.dataTransfer.getData("text/plain");
      const draggableElement = document.getElementById(id);
      if (draggableElement) {
        zone.appendChild(draggableElement);
      }
    });
  });

  // Initialize UI
  restoreOriginalButton();
});
