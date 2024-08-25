const inputBox=document.getElementById("input-box" );
const listitems=document.getElementById("list-items");

function addTask(){
    if(inputBox.value === ' '){
        alert("Some text has to be written");
    }
else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listitems.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}
listitems.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem("data",listitems.innerHTML);

}
function showTask(){
    listitems.innerHTML=localStorage.getItem("data");

}
showTask();