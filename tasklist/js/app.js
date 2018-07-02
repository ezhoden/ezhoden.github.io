let storedTasks

let newTask = document.querySelector('#task')
let addTaskButton = document.querySelector('input[value="Add Task"]')
let clearTasksButton = document.querySelector('.clear-tasks')
let tasksList = document.querySelector('.collection')

addTaskButton.addEventListener('click', addNewTask)
clearTasksButton.addEventListener('click', clearTasks)
tasksList.addEventListener('click', removeTask)

updateUI()

function getTasks() {
    if (localStorage.getItem('tasks') === null) {
        return storedTasks = []
    } else {
        return storedTasks = JSON.parse(localStorage.getItem('tasks'))
    }
}

function addNewTask(e) {
    storedTasks = getTasks()
    storedTasks.push(newTask.value)
    localStorage.setItem('tasks', JSON.stringify(storedTasks))
    updateUI()
    e.preventDefault()
}

function removeTask(e) {
    if (e.target.classList.contains('fa-remove')) {
        const taskForRemove = e.target.parentNode.parentNode.innerText
        storedTasks = getTasks()
        const removeId = storedTasks.indexOf(taskForRemove)
        if(removeId === 0) {
            storedTasks.shift()
        } else {
            storedTasks.splice(removeId, removeId)
        }
        localStorage.setItem('tasks', JSON.stringify(storedTasks))
        updateUI()
    }
}

function clearTasks(e) {
    localStorage.setItem('tasks', JSON.stringify([]))
    updateUI()
    e.preventDefault()
}

function updateUI() {
    const tasks = getTasks()
    console.log(tasks)
    tasksList.innerHTML = ''
    tasks.forEach(element => {
        let el = document.createElement('li')
        el.classList.add('collection-item')
        el.innerHTML = `
        ${element}
        <a href="#" class="delete-item secondary-content">
          <i class="fa fa-remove"></i>
        </a>
        `
        tasksList.appendChild(el)
    });
    return false
}