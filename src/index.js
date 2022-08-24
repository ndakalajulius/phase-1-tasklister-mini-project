document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form');
 form.addEventListener('submit', (e)=> {
  e.preventDefault();
  handleTodo(e.target.new_task.value);
  form.reset();
 })
  // ynction handleTodo(todo)
