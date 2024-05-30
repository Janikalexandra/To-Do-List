const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){ // if input box is empty
        alert("You must write something!"); // we create an alert telling that you must write something
    }
    else{
        // creates one HTML element with tag name li and stores it in the li variable
        let li = document.createElement("li"); 
        // we add the inputBox text to the li variable as an html text
        li.innerHTML = inputBox.value;
        //we display the li under the list container as the child
        listContainer.appendChild(li);
        let span = document.createElement("span"); // creates X
        span.innerHTML= "\u00d7" // adds cross icon to span tag
        li.appendChild(span); // we display the icon
    }
    inputBox.value =""; // clears input field after adding a task
    saveData(); // saves data after adding a task to the list
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked"); 
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove(); // removes data
        saveData(); // saves data after deleting task
    }
}, false);
// saves data
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
// shows the saved tasks if there are any 
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

