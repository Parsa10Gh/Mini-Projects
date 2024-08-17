let $ = document;
let body = $.body
let context = $.querySelector(".context-menu");

function menu(event){
    event.preventDefault()
    context.style.display = "flex" ;
    let x = event.pageX
    let y = event.pageY
    context.style.top = y + "px";
    context.style.left = x + "px";

}

function hideMenu(){
    context.style.display = "none";
}

function keyDownHandler(event) {
    if (event.keyCode === 27)
      context.style.display = 'none'
  }

body.addEventListener('contextmenu',menu)
body.addEventListener('click',hideMenu)
document.body.addEventListener('keydown', keyDownHandler)