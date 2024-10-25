 const inputBox =document.getElementById("input-box"); 
const listContainer = document.getElementById("list-container")

const addTask = () =>{
    if(inputBox.value === ''){
        alert("You must write something!")
    }else{
        let list = document.createElement("li");
        list.innerHTML = inputBox.value;
        listContainer.appendChild(list);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        list.appendChild(span);
    }
    inputBox.value = ""
    saveData();
}

listContainer.addEventListener("click", (e)=>{
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})  

 
const saveData = ()=>{
    localStorage.setItem("data", listContainer.innerHTML);
}


const showTask =() =>{
   listContainer.innerHTML = localStorage.getItem("data");
   
}
showTask();


