let text = document.getElementById("text");

let count = document.querySelector(".count");

text.addEventListener("input", (e)=>{
    let say = e.target.value.length;
    count.textContent = say;

    if(say>10){
        document.body.style.backgroundColor ="red";
    } else{
        document.body.style.backgroundColor ="";
    }
        
    
})