
// slider ver 1
var prev = document.querySelector("#prev");
var next = document.querySelector("#next");
slideImg = document.querySelector(".slider-img img");

next.onclick = function() { 
    let currentSlide = document.querySelector('.slider .slider-small-img li.active');
    currentSlide.classList.remove('active');
    let nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
        nextSlide.classList.add('active');
    } else { 
        nextSlide = document.querySelector('.slider .slider-small-img li');
        nextSlide.classList.add('active');
    }
    slideImg.src = nextSlide.querySelector('img').src;
}

prev.onclick = function () { 
    let currentSlide = document.querySelector('.slider .slider-small-img li.active');
    currentSlide.classList.remove('active');
    let prevSlide = currentSlide.previousElementSibling;
    if (prevSlide) {
        prevSlide.classList.add('active');
    } else { 
        prevSlide = document.querySelector('.slider .slider-small-img li:last-child');
        prevSlide.classList.add('active');
    }
     slideImg.src = prevSlide.querySelector('img').src;
}


// slider query ver2
sliderjQuery = $('.slider-jQuery');
$('#prevjery').on('click', function () {
    let elem = $('.slider-jQuery .slider-small-img li.active').prev();
    $('.slider-jQuery .slider-small-img li.active').removeClass('active');
    if (!elem.length) {
        elem = $('.slider-jQuery .slider-small-img li:last-child');
    }
    elem.addClass('active');
    
    $('.slider-img img').attr('src', elem.find('img').attr('src'));
});
$('#nextjery').on('click', function () {
    let element = $('.slider-jQuery .slider-small-img li.active').next();
    $('.slider-jQuery .slider-small-img li.active').removeClass('active');
    if (!element.length) {
        element = $('.slider-jQuery .slider-small-img li');
    }
    element.addClass('active');
    $('.slider-img img').attr('src', element.find('img').attr('src'));
});

