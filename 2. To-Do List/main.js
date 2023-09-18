const inputArea = document.getElementById("input-box");
const listConatiner = document.getElementById("list-container");

addTask = () =>{
    if(inputArea.value === ''){
        alert("Please add in a task")
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputArea.value;
        listConatiner.appendChild(li)

        // To craete an X symbol after the task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    //To clear the input area
    inputArea.value = '';
    //Anytime a task is added, it is saved
    saveData();
}

//To remove or mark a text
listConatiner.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("done");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

//To save the data
saveData = () =>{
    localStorage.setItem("data", listConatiner.innerHTML)
}

//To display the data
displayTasks = () =>{
    listConatiner.innerHTML = localStorage.getItem("data")
}

displayTasks()