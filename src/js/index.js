/* Here goes your JS code */
let popup = document.getElementsByClassName('popup')[0];
let button = document.getElementById('show-popup-form');
let success = document.getElementById('success');
let info = document.getElementById('info');
let agreement = document.getElementById('agreement');
let progressBar = document.getElementById('progress-bar');
let submitTimeout;

function hide(){
    clearTimeout(submitTimeout);
    progressBar.style.animation = '';
    popup.style.display = 'none';
    popup.classList.remove('animate');
}

function show(){
    popup.style.display = 'block';
    popup.classList.add('animate');
}

function submitData(){
    if (validate()){
        info.innerText = '';
        
        progressBar.style.animation = 'progress 3s ease-in-out';
        
        submitTimeout = setTimeout(() => {
            popup.style.display = 'none';
            progressBar.style.width = '0%';
            success.style.display = 'block';
            button.style.display = 'none';
            console.log('dsda');
        }, 3000);
    }
}

function validate(){
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;

    if (!validateEmail(email)){
        info.innerText = 'Check your email.'
        return false;
    } else if (password.length < 6){
        info.innerText = 'Too short password.'
        return false;
    } else if (!agreement.checked) {
        info.innerText = 'Agree to terms & conditions.'
        return false;
    }

    return true
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}