let countDownDate = new Date("Nov 30, 2023 00:00:00").getTime();
var Values = $(".value");
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
  const Array = ['./product-image/Digital_Scale/HN289/HN289_black_1.png', './product-image/Digital_Scale/HN289/HN289_pink_0.png', 'product-image\Digital_Scale\HN289\HN289_turquoise_1.png']
  const image = $('.Discount__product__image');
  $('.color').click(function() {
    $('.color').removeClass('active__color');
    $(this).addClass('active__color');
    image = Array[$('.color').index(this)];
    console.log($('.color').index(this));
  });
});