let $ = document;
const titleElem = document.querySelector('.title')

// let keys = $.getElementsByClassName('row')


$.addEventListener('keyup', function (event){

    appendValueToDom (event)

    let userKey = event.key.toUpperCase();
    let mainKey = $.getElementById(userKey);
    mainKey.classList.add('hit')

    mainKey.addEventListener('animationend',function (){
        mainKey.classList.remove('hit');
    })
})

function appendValueToDom (event) {
    console.log(event);

    if (event.code === 'Backspace') {
        titleElem.innerHTML = titleElem.innerHTML.slice(0, -1)
        return
    }

    titleElem.innerHTML += event.key
}