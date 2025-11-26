const login = document.querySelector('.login');
const message = document.querySelector('.message');

login.addEventListener("submit",async(e) => {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const checkbox = document.querySelector(".options input[type='checkbox']").checked;

    const savedEmail = localStorage.getItem("useremail");
    const savedPassword = localStorage.getItem("userpassword");
    const savedUsername = localStorage.getItem("username");

    if(!email || !password){
        message.textContent = "❌ Please fill in all fields.";
        message.style.color = "red";
        return;
    }

    if(email === savedEmail && password === savedPassword){
        message.textContent = `✅ Welcome back, ${savedUsername}!`;
        message.style.color = "green";  
        setTimeout(() => {
            window.location.href = "website.html";
        },1500);

    }else{
        message.textContent = "❌ Invalid email or password.";
        message.style.color = "red";
        return;
    };
    
})