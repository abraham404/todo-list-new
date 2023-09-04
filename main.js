let IdCounter = 0
const input = document.querySelector('input[type="text"]')

userInput.addEventListener('submit',(event) => {
    event.preventDefault()
    addTask();
})

let addTask = () => {
    IdCounter++;

    let newValue =  input.value

    if (newValue != ''){

        list.innerHTML += `
        <div class="task-container" id="${IdCounter}">
        <label>
            <input type="checkbox">
            ${newValue}
        </label>
        <img src="images/delete.png" class="closeBtn">
    </div>`

    input.value = '';

    updateStats()
    }else {
        alert("Please enter a task")
    }
    

}

list.addEventListener('click', (event) => {
    
    if(event.srcElement.nodeName == 'INPUT'){
    console.log(event.srcElement.nodeName)
     updateStats()
    }else if(event.srcElement.nodeName == 'IMG'){
        let id = event.srcElement.parentNode.id
        deleteTask(id)
    } 
})


let updateStats = () =>{
    let element = list.querySelectorAll('div')
    let checkbox = list.querySelectorAll('input[type = "checkbox"]:checked')
    
    stats.innerHTML = `<p>Pending tasks: ${element.length} completed ${checkbox.length}</p>`
}

let deleteTask = (id) => {
    let taskToDelete = document.getElementById(id)
    list.removeChild(taskToDelete)
    updateStats()
}