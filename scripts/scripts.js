const button = document.getElementById('myButton');

button.onclick = function () {
    alert('Button Clicked - DOM Property Method')
};


let btn = document.getElementById('thirdButton');

let output = document.getElementById('output');

btn.addEventListener('click', function () {
    output.textContent = 'Button Clicked - addEventListener Method';
});


// different events
let input = document.getElementById('txtInputBox');
// keydown event
input.addEventListener('keydown', function (event) {
    console.log('You passed this Key: ', event.key);
});

// focus event
input.addEventListener('focus', function () {
    input.style.backgroundColor = 'lightblue';
    // console.log('Focus Event Trigerred');
});

// blur event
input.addEventListener('blur', function () {
    input.style.backgroundColor = 'lightyellow';
    // console.log('Blur Event Trigerred');
});

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}


// drag and drop
let dragItem = document.getElementById('dragItem');
let dropzone = document.getElementById('dropzone');

dragItem.addEventListener('dragstart', function (event) {
    event.dataTransfer.setData('id', event.target.id);
});

dropzone.addEventListener('dragover', function (event) {
    event.preventDefault(); // allow drop 
});


dropzone.addEventListener('drop', function (event) {
    event.preventDefault(); // allow drop 
    let id = event.dataTransfer.getData('id');
    dropzone.appendChild(document.getElementById(id));// adding an element to another one
    dropzone.style.backgroundColor = 'lightgreen';
});

// validate form

// Validate username
function validateUserName(username) {
    return username.length >= 2;
}
// Validate email
function validateEmail(email) {
    const format = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return format.test(email);
}
// Validate password
function validatePassword(password) {
    // minimum 8 characters, atleast one uppercase letter,one lowercase letter,one number and one special character
    const format = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return format.test(password);
}
function validateSignup() {
    let username = document.getElementById('username').value.trim(); // trim() to remove any empty space
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();

    if (!username || !email || !password) {
        alert("All fields are required!");
        return false; // prevent form submission

    }

    if (!validateUserName(username)) {
        alert('UserName must be at least 2 characters.');
        return false; // prevent form submission
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return false; // prevent form submission
    }

    if (!validatePassword(password)) {
        alert('Password must be minimum 8 characters, atleast one uppercase letter,one lowercase letter,one number and one special character');
        return false; // prevent form submission
    }

    alert('Form Submitted Successfully !!')
    return true; // allow form submission
}

