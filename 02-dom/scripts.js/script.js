console.log("JS Loaded")

const rootDiv = document.getElementById("cappuccino")
/*
// ------- create and populate the element --------
const rootH2 = document.createElement("h2")
rootH2.innerText = "To-do list"
rootH2.classList.add("main-subtitle")

// ------- attach it to a parent -------
rootDiv.appendChild( rootH2 )
*/

// ----- create butotn element -----
const actionButton = document.createElement("button")
actionButton.innerText = "Add todo"
actionButton.classList.add("action-button")

function addToDoItem(text){
    const newToDo = document.createElement("li")
    newToDo.innerText = text
    document.getElementById("items-list").appendChild(newToDo)
}

actionButton.addEventListener(
    "click",
    (event)=>{
        // ----- we select an element form inside the action ----
       const inputToDo = document.querySelector("[name='to-do-item']")
       console.log(inputToDo.value)
       addToDoItem(inputToDo.value)
       inputToDo.focus()
       inputToDo.value = ""
    }
)



rootDiv.appendChild(actionButton)






