const input = document.getElementById("number");
const result = document.querySelector(".result");
const checkButton = document.querySelector(".button");
const remainChances = document.querySelector(".chances");

input.focus();

let randomNumber = Math.floor(Math.random() * 9) + 1; // Generate a random number between 1 and 9
let chance = 3;

checkButton.addEventListener("click", () => {
    let inputValue = parseInt(input.value); // Convert the input value to an integer

    if (chance > 0) {
        chance--;

        if (inputValue === randomNumber) {
            result.textContent = "Congratulations, you win!";
            input.disabled = true;
            checkButton.textContent = "Replay";
            result.style.color = "green";
        } else if (inputValue > randomNumber && inputValue < 10) {
            result.textContent = "Your guess is higher";
            remainChances.textContent = chance;
            result.style.color = "yellow";
        } else if (inputValue < randomNumber && inputValue > 0) {
            result.textContent = "Your guess is lower";
            remainChances.textContent = chance;
            result.style.color = "yellow";
        } else {
            result.textContent = "Your number is invalid";
            remainChances.textContent = chance;
            result.style.color = "red";
        }
    }

    if (chance === 0) {
        checkButton.textContent = "Try Again";
        input.disabled = true;
        result.textContent = "You lost. The correct number was " + randomNumber;
        result.style.color = "red";
    }
});

checkButton.addEventListener("click", () =>{
    if(checkButton.textContent === "Try Again"){
        window.location.reload();
    }
})