const todoField = document.querySelector('#name')
const todoText = document.querySelector('#text')
const submitButton = document.querySelector('.submitButton')
const todoWrapper = document.querySelector('.todoWrapper')
const popup = document.querySelector('.popup')
const accept = document.querySelector('.popupBtn accept')
const cancel = document.querySelector('.popupBtn cancel')


let idCounter = 0;
let todos = []



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

const onDeleteBtnHandler = (event) => {
    const listId = event.target.getAttribute('list-rel');

    if (!listId) {
        alert('Brak list rel');
        return
    }

    todos = todos.filter(todoEl => todoEl.id !== +listId)
    const listElement = document.querySelector(`.todoElement-${listId}`)
    listElement.remove()
}

const onCompleteBtn = (event) => {

    const item = event.target
    if (item.classList[0] === "complete") {

        const todo = item.parentElement
        todo.classList.toggle("completed")

        return
    }



}

const onEditBtn = () => {
    const listElement = document.querySelector(`.todoElement-${idCounter}`)
    const popupInput = document.querySelector('.popupInput')
    const paragraph = document.querySelector(`.paragraph-${idCounter}`)
    const popupP = document.querySelector('.popupP')



    popupInput.value = listElement.firstChild.textContent
    popupP.value = paragraph.firstChild.textContent

    // const editTodos = todos.indexOf((obj => obj.id === +listElement))







    popup.style.display = 'flex';

}





const createTodoElement = (todo) => {

    //Selektory
    const li = document.createElement('li')
    const div = document.createElement('div')
    div.classList.add("tools")
    const p = document.createElement('p')
    p.classList.add(`paragraph-${todo.id}`)


    li.classList.add(`todoElement-${todo.id}`)
    li.innerHTML = todo.title
    p.innerHTML = todo.text

    //Btn delete
    const deleteBtn = createDeleteButton()

    //completeBtn
    const completeBtn = createCheckButton()

    //editBtn

    const editBtn = createEditButton()



    li.appendChild(div)
    div.appendChild(p)
    div.appendChild(deleteBtn)
    div.appendChild(editBtn)
    div.appendChild(completeBtn)





    return li


}

const createDeleteButton = () => {
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = 'X';
    deleteBtn.setAttribute('list-rel', idCounter)
    deleteBtn.onclick = onDeleteBtnHandler

    return deleteBtn
}

const createCheckButton = () => {
    const completeBtn = document.createElement('button')
    completeBtn.classList.add('complete')
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'
    completeBtn.setAttribute('id', idCounter)
    completeBtn.onclick = onCompleteBtn

    return completeBtn
}

const createEditButton = () => {
    const editBtn = document.createElement('button')
    editBtn.classList.add('edit')
    editBtn.innerHTML = "EDIT";
    editBtn.setAttribute('id', idCounter)
    editBtn.onclick = onEditBtn
    return editBtn
}

const changeTodo = (e) => {
    const listElement = document.querySelector(`.todoElement-${idCounter}`)
    const popupInput = document.querySelector('.popupInput')
    const paragraph = document.querySelector(`.paragraph-${idCounter}`)
    const popupP = document.querySelector('.popupP')
    listElement.firstChild.textContent = popupInput.value
    paragraph.firstChild.textContent = popupP.value

    const editBtn = document.getElementById(`${idCounter}`)

    const editIdBtn = editBtn.getAttribute('id')

    const index = todos.findIndex(object => {
        return object.id === +editIdBtn
    })


    todos[index].title = popupInput.value

    todos[index].text = popupP.value
    console.log("after update:", todos[index])



    popup.style.display = "none"
}

const closePopup = () => {
    popup.style.display = 'none';
}