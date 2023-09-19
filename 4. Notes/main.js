const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
const notes = document.querySelectorAll(".input-box")

showNotes = () =>{
    notesContainer.innerHTML = localStorage.getItem("notes")
}
showNotes();

saveNotes = () =>{
    localStorage.setItem("notes", notesContainer.innerHTML)
}

createBtn.addEventListener("click", () =>{
    let inputBox = document.createElement("p")
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/trash.png";
    notesContainer.appendChild(inputBox);
    inputBox.appendChild(img);
})

notesContainer.addEventListener("click", (e) =>{
    //To delete a note
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        saveNotes();
    //To save the notes once typing starts
    }else if(e.target.tagName === "LI"){
        notes = document.querySelectorAll(".input-box")
        notes.forEach(note =>{
            note.onKeyup = () =>{
                saveNotes();
            }
        })
    }
})