import { setErrorFor } from './form-controller.js';


const form = document.getElementById('login');
const email = document.getElementById('email');
const password = document.getElementById('password');

var isValid = true;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    isValid = true;

    checkEmail();
    checkPassword();

    if (isValid) {


        // ajax request
        login(email.value, password.value);

        // $.ajax({
        //     type: "POST",
        //     url: 'login.php',
        //     data: { email: email.value, password: password.value },
        //     success: (response) => {
        //         var jsonData = JSON.parse(response);

        //         // user is logged in successfully in the back-end
        //         if (jsonData.success == "200") {
        //             location.href = 'welcome.html';
        //         }
        //         else {

        //         }
        //     }
        // });



    }
})

// the function check admin number validate
function checkEmail() {
    const emailValue = email.value.trim();

    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailValue === '' || !emailValue.match(mailformat)) {
        isValid &= false;
        setErrorFor(email, 'Email not valid');
        return;
    }

    isValid &= true;
}

// the function check password validate
function checkPassword() {
    const pass = password.value.trim();

    if (pass === '') {
        isValid &= false;

        setErrorFor(password, 'Password cannot be empty')
        return;
    }

    isValid &= true;
}


function login(emailValue, passwordValue) {

    var xhr = new XMLHttpRequest();

    xhr.open("POST", `php/include/login.inc.php`, true);

    //to Work with POST
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onload = () => {

        if (xhr.status == 200) {

            let res = xhr.responseText;

            console.log(res);
            if (res !== "200") {

                setErrorFor(email, 'Email or Password is not correct');
                setErrorFor(password, 'Email or Password is not correct');

                return;
            }
            console.log(window.location.href);

            window.location.href = `./html/welcome.html`;
        }
    };

    //set the parameters to send it as JSON
    var prams = `login=user&email=${emailValue}&password=${passwordValue}`;

    xhr.send(prams);
}