document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const input = document.getElementById('new-task-description');
  const form = document.getElementById('create-task-form');
  const tasks = document.getElementById("tasks");
  const priority = document.getElementById('priority');
  
  
  function list(input) {
    let ul = document.getElementById('tasks');
    let li = document.createElement('li');
    li.innerHTML = input;
    ul.appendChild(li);
  }
  
  let a=document.body.querySelector("#create-task-form input[type='submit']")
  a.addEventListener("click", function (e) {
    e.preventDefault();
    let input = document.getElementById('new-task-description').value;
    addLi(input);
    input.value = "";

  });

});
