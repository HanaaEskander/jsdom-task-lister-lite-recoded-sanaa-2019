document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const input = document.getElementById('new-task-description');
  const form = document.getElementById('create-task-form');
  const tasks = document.getElementById("tasks");
  const priority = document.getElementById('priority');

  form.addEventListener('submit',formSubmit);

  function rmvTask(e){
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  }
  
  function formSubmit(e){
    e.preventDefault();
    if(input.value != ""){
      let option = priority.options[priority.selectedIndex];
      let sortChar = option.getAttribute('data-sort');
      let li = document.createElement('li');
      let btn = document.createElement('button');
      li.textContent = input.value + ' ';
      li.setAttribute('data-sort',sortChar);
      li.style.color = priority.value;
      btn.innerHTML = 'X';
      btn.addEventListener('click',deleteTask);
      li.appendChild(btn);
      tasks.appendChild(li);
      input.value = "";
    }
  }
});
});
