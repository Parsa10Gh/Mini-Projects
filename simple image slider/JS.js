let $ = document;
// let imageSlider = $.querySelector('.image-slider');
let image = $.querySelector('img')
let prevBtn = $.querySelector('.prev');
let nextBtn = $.querySelector('.next');

let index = 0;
let images = ['image/1.jpg','image/2.jpg','image/3.jpg'];

function nextImage(){
    // console.log('next',image.src)
    index++;
    if(index > images.length){
        index = 0;
    }
    image.src = images[index];
    
}

function prevImage(){
    // console.log('previous')
    index--;
    if(index < 0){
        index = images.length-1;
    }
    image.src = images[index];
}

setInterval(nextImage,5000);
nextBtn.addEventListener('click',nextImage)
prevBtn.addEventListener('click',prevImage)

