let countDownDate = new Date('Dec 25 2023 00:00:0').getTime();
var Values = $('.value');
var i;

var varx = setInterval(function() {  
    let now = new Date().getTime();
    let distance = countDownDate - now;
  
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    if(minutes==0 && seconds==0) Values.eq(1).addClass('change_value');
    if(hours==0 && minutes==0 && seconds==0) Values.eq(0).addClass('change_value');
  
    $("#days").text(days.toString().padStart(2, '0'));
    $("#hours").text(hours.toString().padStart(2, '0'));
    $("#min").text(minutes.toString().padStart(2, '0'));
    $("#sec").text(seconds.toString().padStart(2, '0'));
  
    if (distance < 0) {
      clearInterval(varx);
    }
}, 1000);




$(document).ready(function() {
  const Array = ['./assets/images/products/Digital_Scale/HN289/HN289_black_1.png', './assets/images/products/Digital_Scale/HN289/HN289_pink_1.png', './assets/images/products/Digital_Scale/HN289/HN289_ocean_blue_1.png', './assets/images/products/Digital_Scale/HN289/HN289_turquoise_1.png']
  const image = $('.Discount__product__image')[0];
  $('.color').click(function() {
    $('.color').removeClass('active__color');
    $(this).addClass('active__color');
    image.src = Array[$('.color').index(this)];
  });
});

const handleMediaQuery = () => {
  if ($(window).width() <= 767) {
    swipe.params.slidesPerView = 1.5;
    swipe.update();
  } else {
    swipe.params.slidesPerView = 3.5;
    swipe.update();
  }
};


$(document).ready(function() {
  const menu= $('.menu__button').eq(0)
  const mobileMenu = $('.navigation__mobile').eq(0)
  const mainContainer = $('.index__main__container').eq(0)
  const mainBody = $('#main__body');
  menu.click(function(){
    $(this).toggleClass('clicked');
    mobileMenu.toggleClass('hidden__menu');
    mainContainer.toggleClass('hide__scroll');
    mainBody.toggleClass('hide__scroll');
    $('.user__navigation__container').toggleClass('nav__shadow')
  })
  handleMediaQuery();
});

$(window).resize(function() {
  handleMediaQuery();
});

function OpenSearch(){
  const SearchContainer = $('.index__main__search__container').eq(0);
  const SearchInput = $('#main__search');
  SearchContainer.addClass('searchContainerAnimate');
  SearchInput.focus();
}

function CloseSearch(){
  const SearchContainer = $('.index__main__search__container');
  SearchContainer.removeClass('searchContainerAnimate');
}

