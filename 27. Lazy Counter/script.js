const number = document.querySelector(".number");
const subtract = document.querySelector(".sub");
const reset = document.querySelector(".reset");
const add = document.querySelector(".add");

let count = 0;


subtract.addEventListener("click", () =>{
    count --;
    number.innerHTML = count;
    if (count < 0) {
        number.style.color = "red";
    } else if (count === 0) {
        number.style.color = "#111";
    } else {
        number.style.color = "green";
    }
})

reset.addEventListener("click", () =>{
    count = 0;
    number.innerHTML = count;
    if(count === 0){
        number.style.color = "#111"
    }

})

add.addEventListener("click", () =>{
    count ++;
    number.innerHTML = count;
    if (count < 0) {
        number.style.color = "red";
    } else if (count === 0) {
        number.style.color = "#111";
    } else {
        number.style.color = "green";
    }
})