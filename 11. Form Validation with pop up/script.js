const form = document.querySelector("form");
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const email= document.querySelector("[name='email']").value.trim();
    const password= document.querySelector("[name='password']").value.trim();
    const confirmPassword= document.querySelector("[name='confirm-password']").value.trim();

    const errors = [];

    if(email === ''){
        errors.push("Email is required");
    }
    if(password === ''){
        errors.push("Password is required");
    }
    if(password !== confirmPassword){
        errors.push("Passwords must match");
    }
    
    if(errors.length > 0){
        for(let i = 0; i < errors.length; i++){
            Toastify({
                text:errors[i], 
                gravity:"top", 
                position:"center", 
                duration: 3000, 
                style:{
                    background: "#FA8072",
                    color:"#FF0000"
                }
            }).showToast();
        }
    }else{
        Toastify({
            text: "Welcome to the Community!", 
            gravity:"top", 
            position:"center", 
            duration: 3000, 
            style:{
                background: "#98FB98",
                color:"#028A0F"
            }
        }).showToast();
    }

})