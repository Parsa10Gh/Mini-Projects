let userNameElem = document.querySelector('.username')
let passwordElem = document.querySelector('.password')
let massege = document.querySelector('.modal')


function dataValidation(){
    let username = userNameElem.value;
    let password = passwordElem.value;
    if(username.length<12||password.length<8){
        massege.innerHTML = "Please use valid username or password!";
        massege.style.display = 'flex';
    }
    else{
        massege.innerHTML="Loged in successfully.";
        massege.style.backgroundColor = 'green';
        massege.style.display = 'flex';
    }

    setTimeout(function (){
        massege.style.display = 'none'
    },3000);
}

let userValid = document.querySelector('.userValidation');
let passValid = document.querySelector('.passValidation');

function userValidation(){
let username = userNameElem.value;
    if(username.length<12){
        userValid.style.color = 'red';
        userValid.innerHTML = 'Must contain at least 12 character'
        userValid.style.display = 'block';
    }
    else{
        userValid.style.color = 'green';
        userValid.innerHTML = 'correct username.'
    }
}
function passValidation(){
    let password = passwordElem.value;
        if(password.length<8){
            passValid.style.color = 'red';
            passValid.innerHTML = 'Must contain at least 8 character or numbers'
            passValid.style.display = 'block';
        }
        else{
            passValid.style.color = 'green';
            passValid.innerHTML = 'correct password.'
        }
}

