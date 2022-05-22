var formGroupExampleInput = document.querySelector("#formGroupExampleInput"),
    btnSubmit = document.querySelector(".btnSubmit"),
    noNotes = document.querySelector(".noNotes"),
    divBgc = document.querySelector(".divBgc"),
    body = document.querySelector("body"),
    icon = document.querySelector("i"),
    typeNote = document.querySelector(".typeNote"),
    alertws = document.querySelector(".alert-warning");
var darkTheme = () => {
    icon.classList.toggle("fa-moon")
    if (icon.classList.contains("fa-moon")) {
        icon.classList.remove("fa-sun");
        body.classList.add("dark-body");
        typeNote.classList.replace("typeNote", "typeNote-dark");
        divBgc.classList.replace("divBgc", "divBgc-dark");
        alertws.classList.replace("alert-warning", "alert-secondary");
    } else {
        icon.classList.add("fa-sun");
        body.classList.remove("dark-body");
        typeNote.classList.replace("typeNote-dark","typeNote");
        divBgc.classList.replace("divBgc-dark", "divBgc");
        alertws.classList.replace("alert-secondary", "alert-warning");
    }
}
icon.addEventListener("click", darkTheme);
var addNote = () => {
    input = formGroupExampleInput.value;
    noNotes.remove();
    divBgc.innerHTML += `
    <br>
    <div class="alert alert-warning">
       ${input}
    </div>
    `;
}
btnSubmit.addEventListener("click", addNote);