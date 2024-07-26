const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container"); 

//task ko add krenge dynamically
function AddTask(){
    if(inputBox.value==''){
        alert("You must write something!!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li); 
        let span=document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}

//Task ko checked krne ke liye or task ko remove krne ke liye
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
      e.target.parentElement.remove();
      saveData();
    }
},false);

//purana data save krne ke liye browser mai taaki wo refresh krne pe gyb na ho humara task
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
//hum iss function ko call krenge jb hum task dynamically add krenge 
}

//ye function humare purane task ko diplay krega jo humne save data function ki help se save kiye the 
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();