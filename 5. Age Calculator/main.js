let userInput = document.getElementById("date");
let result = document.getElementById("result");
//To make it that no date from current date can be chosen
userInput.max = new Date().toISOString().split("T")[0];

calculateAge = () =>{
    let birthTime = new Date(userInput.value);

    let day1 = birthTime.getDate();
    let month1 = birthTime.getMonth() + 1;
    let year1 = birthTime.getFullYear();

    let today = new Date();

    let day2 = today.getDate();
    let month2 = today.getMonth() + 1;
    let year2 = today.getFullYear();

    let ansYear = year2 - year1;
    if (month2 >= month1){
        ansMonth = month2 - month1;
    }else{
        ansYear--;
        ansMonth = 12 + month2 -month1;
    }

    if(day2 >= day1){
        ansDay = day2 - day1;
    }

    //If day is plural or singular
    if(ansDay > 1){
        days = "days"
    }else if(ansDay === 1){
        days = "day"
    }

    result.innerHTML = `You are ${ansYear} years, ${ansMonth} months and ${ansDay} ${days} old.`
}