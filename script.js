const todoField = document.querySelector('#name')
const todoText = document.querySelector('#text')
const submitButton = document.querySelector('.submitButton')
const todoWrapper = document.querySelector('.todoWrapper')


let idCounter = 0;
const todos = []


submitButton.addEventListener('click', (event) => {
    event.preventDefault()
    idCounter++;
    const newTodo = {
        id: idCounter,
        title: todoField.value,
        text: todoText.value

    };
    todos.push(newTodo)

    addTodoToList(newTodo)
    todoField.value = ''
    todoText.value = ''



})
const addTodoToList = (todo) => {
    const todoElement = createTodoElement(todo)
    todoWrapper.appendChild(todoElement)
}
const createTodoElement = (todo) => {

    //Selektory
    const li = document.createElement('li')
    const div = document.createElement('div')
    const p = document.createElement('p')


    li.classList.add(`todoElement-${todo.id}`)
    li.innerHTML = todo.title
    p.innerHTML = todo.text


    //toolsPanel
    const toolsPanel = document.createElement('button')
    toolsPanel.classList.add('tools')

    //Btn delete
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = 'X'
    deleteBtn.setAttribute('id', idCounter)
    deleteBtn.addEventListener("click", () => {
        const newArray = todos.filter(item => item.id !== deleteBtn.id)
        console.log(deleteBtn.id)
        console.log(newArray)

    })


    //edit button
    const edit = document.createElement('button')
    edit.classList.add('edit')
    edit.innerHTML = 'EDIT'

    //check mark
    const completeBtn = document.createElement('button')
    completeBtn.classList.add('complete')
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'

    li.appendChild(div)
    div.appendChild(p)
    div.appendChild(toolsPanel)

    toolsPanel.appendChild(deleteBtn)
    toolsPanel.appendChild(edit)
    toolsPanel.appendChild(completeBtn)



    return li


}


const deleteBtn = document.querySelectorAll(".delete")
console.log(deleteBtn.id)
// for (const el of deleteBtn) {
//     el.addEventListener("click", () => {
//         const newArray = todos.filter(item => item.id === deleteBtn.id)
//         console.log(newArray)
//         todos.remove(newArray);
//     });
// }


const wyjebac = () => {
    const newArray = todos.filter(item => item.id !== deleteBtn.id)
    // console.log(newArray)
    todos.remove(newArray);
}


deleteBtn.addEventListener("click", wyjebac)




// const buttonUsun = document.querySelector('.delete')
// buttonUsun.addEventListener("click", () => {
//     const newArray = todos.filter(item => item.id !== deleteBtn.id)
//     // console.log(newArray)
//     todos.remove(newArray);
// })

// deletee.addEventListener('click', () => {
//     const newArray = todos.filter(item => item.id !== deleteBtn.id)
//     // console.log(newArray)
//     todos.remove(newArray);
// })






// const idArray = document.querySelector
// document.addEventListener('click', (e) => {
//     if (e.target.className === 'delete') {
//         e.target.parentNode.remove()
//     }
// })