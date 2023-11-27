//action to edit product after edit-btn is clicked
$('.russ-pdt-box').on('click', function(){
    // alert('View or Edit this product');
    var img_in_edit=$(this).children('img').attr('src');
    console.log(img_in_edit);
    $('.russ-edit-lside h4').replaceWith($(this).children('h4'));
    $('.russ-edit-lside img').attr('src',img_in_edit);
    var name_in_edit=$(this).children('h4').text();
    $('.russ-pdt-container').css('display','none');
    $('.russ-edit-section').css('display','block');
});
$('.russ-edit-close').click(function(){
    $('.russ-pdt-container').css('display','block');
    $('.russ-edit-section').css('display','none');
});

var product=$('.russ-pdt-box');
//all prices are h3, names h4
var pdt_price=$('.russ-pdt-box h3');
var pdt_name=$('.russ-pdt-box h4').text();
$('russ-edit-name').attr('placeholder',pdt_name);

