let btn = document.getElementById("colorChanger");

let body = document.body;


let random = ()=> {
    return Math.floor(Math.random() *256);

}

btn.addEventListener("click", ()=>{
    body.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()} )`
})
