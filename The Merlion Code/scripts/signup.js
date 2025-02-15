function nextStep(step) {
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "none";
    document.getElementById("step3").style.display = "none";
    document.getElementById("step" + step).style.display = "block";
}

function signupUser() {
    const fullName = document.getElementById("full-name").value;
    const icNumber = document.getElementById("ic-number").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const displayName = document.getElementById("display-name").value;
    
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    
    fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, icNumber, email, password, displayName })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Sign-up successful!");
            window.location.href = "login.html";
        } else {
            alert("Sign-up failed: " + data.message);
        }
    });
}
