
let button = document.querySelector(".submit-btn");
console.log(button);

const arr = [
    "carWash",
    "clean house",
    "hand wash"
]
let html = "";
arr.forEach(function(value){
    html += `
    <p class = "td" >
    ${value} 
    <button class = "Delete-btn">Delete</button>
    </p>
    `;
})
document.querySelector(".todos-entered").innerHTML = html;
console.log(html);

const addValue = document.querySelector(".todos-entered")

button.addEventListener("click",()=>{
    let element = document.querySelector(".enter-todo")
    let elementValue = element.value;
    arr.push(elementValue);
    // console.log(arr);
})

