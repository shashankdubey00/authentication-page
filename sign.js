// Select the form and message display area
const signup = document.querySelector('.signup');

signup.addEventListener('submit',async(e) => {
    e.preventDefault();// stop the page from reloading

    // Step 1: collect data from input fields
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Step 2: prepare data to send
    const userData = {username, email, password};

    // Step 3: send HTTP POST request to backend 
    const response = await fetch("https://localhost:5000/api/signup", {
        method:"post",
        headers:{
            "content-Type": " application/json"
        },
        body:JSON.stringify(userData) //convert JS object into JSON string
    });

    
    //step4: read server response
    const result = await response.json();
    console.log("server response",result);
});