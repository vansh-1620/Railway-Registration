function openLogin() {
    document.getElementById('loginModal').style.display = 'block';
}

function closeLogin() {
    document.getElementById('loginModal').style.display = 'none';
}

function openRegister() {
    document.getElementById('registerModal').style.display = 'block';
}

function closeRegister() {
    document.getElementById('registerModal').style.display = 'none';
}

// Close the modals when clicking outside of them
window.onclick = function(event) {
    let loginModal = document.getElementById('loginModal');
    let registerModal = document.getElementById('registerModal');
    
    if (event.target == loginModal) {
        closeLogin();
    } else if (event.target == registerModal) {
        closeRegister();
    }
}
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Perform your login logic here (e.g., authentication)
    alert(`Email: ${email}\nPassword: ${password}`);
});
document.getElementById('seat-availability-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fromStation = document.getElementById('from-station').value;
    const toStation = document.getElementById('to-station').value;
    const date = document.getElementById('date').value;

    // Sample logic for seat availability (just for demonstration)
    const resultText = `Available seats from ${fromStation} to ${toStation} on ${date}: 10 seats available.`;

    document.getElementById('result').innerText = resultText;
});
