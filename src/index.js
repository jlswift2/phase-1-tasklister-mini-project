document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let taskValue = document.getElementById('new-task-description').value;
    let priority = document.getElementById('priority').value
    console.log(priority)
    createToDo(taskValue, priority)
    form.reset()
  })
});

function createToDo (todo, priority){
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.textContent = 'X'
  btn.id = 'close'
  btn.addEventListener('click', handleDeletes)
  li.textContent = `${todo} `
  if (priority === 'low') {
    li.classList.add('low_prio')
  } else if (priority === 'medium') {
    li.classList.add('medium_prio')
  } else {
    li.classList.add('high_prio')
  }
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)
}

function handleDeletes(e){
  e.target.parentNode.remove()
}

function editThis(e){
  e.target
}