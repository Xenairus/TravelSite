let userState = false;
let username = localStorage.getItem('username') || null;
let password = localStorage.getItem('password') || null;
let fullname = localStorage.getItem('fullname') || null;

function getUsername() {
    return document.getElementById('username').value;
}

function getPassword() {
    return document.getElementById('password').value;
}

function getNewName() {
    return document.getElementById('newName').value;
}

function login(inputUsername, inputPassword) {
    if (username === null || password === null) {
        alert("No user exists. Please sign up first.");
    } else if (inputUsername === username && inputPassword === password) {
        userState = true;
        updateNav();
        alert("Login successful! Welcome, " + username + ".");
    } else {
        alert("Invalid username or password.");
    }
}

function getNewUsername() {
    return document.getElementById('newUsername').value;
}

function getNewPassword() {
    return document.getElementById('newPassword').value;
}

function getNewConfirmedPassword() {
    return document.getElementById('newPasswordConfirmed').value;
}

function signUp(newName, newUsername, newPassword, newConfirmedPassword) {
    if (newPassword === newConfirmedPassword) {
        if (username === null && password === null && fullname === null) {
            username = newUsername;
            password = newPassword;
            fullname = newName;
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            localStorage.setItem('fullname', fullname);

            alert("Sign-up successful! You can now log in.");
        } else {
            alert("A user already exists. Log in or reset your account.");
        }
    } else {
        alert("Passwords do not match. Please try again.");
    }
}

function logout() {
    if (userState) {
        userState = false;
        updateNav();
        alert("You have successfully logged out.");
    } else {
        alert("You are not logged in.");
    }
}

function showDropdown() {
    document.getElementById("userSection").style.display = "block";
}

function hideDropdown() {
    document.getElementById("userSection").style.display = "none";
}

function updateNav() {
    alert(userState)
    if (userState) {
        alert("problem somewhere")
        console.error(document.getElementById('loginBtn').style.display = 'none');
        document.getElementById('loginBtn').style.display = "none";
        alert("problem sa pagset ng display ng loginbtn")

        document.getElementById("signupBtn").style.display = "none";
        alert("problem sa signup btn")

        document.getElementById("profileIcon").style.display = "flex";
        alert("problem icon profile")

        document.getElementById("usernameDisplay").textContent = username;
        alert("problem sa username")

    } else {
        document.getElementById("loginBtn").style.display = "inline";
        document.getElementById("signupBtn").style.display = "inline";
        document.getElementById("profileIcon").style.display = "none";
    }
}

function navigateTo(url) {
    window.location.href = url;
}

function displayBookTicket(hotel, hotelName) {

    const name = document.getElementById(`${hotel}Name`).value;
    const date = document.getElementById(`${hotel}Date`).value;
    const bed = document.getElementById(`${hotel}Bed`).value;
    const guests = document.getElementById(`${hotel}Guests`).value;

    if (!name || !date || !bed || !guests) {
        alert("Please fill out all fields before booking.");
        return;
    }

    let price;
    if (bed === "queen") {
        price = 700;
    } else if (bed === "king") {
        price = 1000;
    } else {
        price = 0;
    }

    const roomNumber = Math.floor(Math.random() * 900) + 100;

    const modalContent = `
        Thank you for booking at <strong>${hotelName}</strong>!<br>
        Guest Name: <strong>${name}</strong><br>
        Booking Date: <strong>${date}</strong><br>
        Room Type: <strong>${bed}</strong><br>
        Guests: <strong>${guests}</strong><br>
        Your room number is: <strong>${roomNumber}</strong>.<br>
        Total Price: <strong>$${price}</strong>.
    `;
    document.getElementById("modalContent").innerHTML = modalContent;

    document.getElementById("bookingModal").style.display = "block";
}


function closeModal() {
    document.getElementById("bookingModal").style.display = "none";
}

function filterHotelsByRegion() {
    const selectedRegion = document.getElementById("regionSelect").value;
    const hotelBooks = document.querySelectorAll(".hotelBook");

    hotelBooks.forEach(hotel => {
        if (selectedRegion === "all" || hotel.getAttribute("data-region") === selectedRegion) {
            hotel.style.display = "block";
        } else {
            hotel.style.display = "none";
        }
    });
}

function addReaction(id) {
    const heartIcon = document.getElementById(id);
    const currentCount = parseInt(heartIcon.textContent.trim());
    
    if (heartIcon.style.color === 'red') {
        heartIcon.style.color = 'black';
        heartIcon.textContent = ` ${currentCount - 1}`;
    } else {
        heartIcon.style.color = 'red';
        heartIcon.textContent = ` ${currentCount + 1}`;
    }
}

function showComments(sectionId) {
    const commentSection = document.getElementById(sectionId);
    if (commentSection.style.display === 'flex') {
        commentSection.style.display = 'none';
    } else {
        commentSection.style.display = 'flex';
    }
}

function addComment(inputId, containerId) {
    const commentInput = document.getElementById(inputId);
    const commentsContainer = document.getElementById(containerId);
    const currentCount = commentsContainer.childNodes.length;

    if (commentInput.value.trim() === "") {
        alert("Comment cannot be empty.");
        return;
    }

    const newComment = document.createElement('p');
    newComment.textContent = commentInput.value.trim();
    commentsContainer.appendChild(newComment);
    commentInput.value = "";

    const commentCount = document.getElementById(inputId.replace('Input', ''));
    commentCount.textContent = ` ${currentCount + 1}`;
}

