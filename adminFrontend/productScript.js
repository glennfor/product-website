//hide main nav on scroll down
var previous_scroll_position=$(window).scrollTop();
$(window).scroll(function() {
    var main_nav=$('.russ-main-nav');
    var category_nav=$('.russ-nav-category-box');
    var current_scroll_position = $(this).scrollTop();
    if(current_scroll_position<=0){
        main_nav.removeClass('russ-show-nav');
    }
    if (current_scroll_position > previous_scroll_position) {
        main_nav.removeClass('russ-show-nav');
    } else {
        main_nav.addClass('russ-show-nav');
        category_nav.css('top','0');
        
    }
    previous_scroll_position = current_scroll_position;
  });

  //for search when clicked
var search_btn=$('.russ-search-btn');
var search_input=$('.russ-nav-category-box input');
search_btn.click(function(){
    search_input.css({'width':'150px','height':'30px','padding-left':'10px'});
    search_btn.css('margin-left','0px');
});
//whnen fixed add-btn  is clicked
var fixed_add_btn=$('.russ-add-pdt')


//action to edit product after edit-btn is clicked
$('.russ-pdt-box').on('click', function(){
    var img_in_edit=$(this).children('img').attr('src');
    var name_in_edit=$(this).children('h4').clone().text();
    var pdt_in_edit_rev=$(this).children('.russ-reviews').clone().html();

    $('.russ-edit-lside h4').text(name_in_edit);
    $('.russ-edit-lside img').attr('src',img_in_edit);
    $('.russ-edit-lside .russ-reviews').html(pdt_in_edit_rev);
    $('.russ-pdt-container').css('display','none');
    $(window).scrollTop(0);
    $('.russ-edit-section').css({'display':'block','width':'80%','height':'fit-content'});
    var pdt_in_edit=$(this);
    $('.russ-edit-only .russ-updt-btn').click(function(){
        //to actually change the name after update
        pdt_in_edit.children('h4').text($('.russ-edit-only .russ-edit-name').val());
        pdt_in_edit.children('h3').text('$'+$('.russ-edit-only .russ-edit-price').val());
        console.log(pdt_in_edit.children('h3').text());
        close_edit();

    });
});

//close edit-product-section
$('.russ-edit-close').click(close_edit());
function close_edit(){
    $('.russ-pdt-container').css('display','block');
    $('.russ-edit-section').css('display','none');
}

//add product
$('.russ-updt-btn').click(function(){
var new_img=$('.upload-section img');
var new_img_src=$('.upload-section .russ-edit-name').val();
new_img.attr('src',new_img_src);
new_img.css('visibility','flex');

var new_pdt_price=$('.upload-section .russ-edit-price').val();
var new_pdt_name=$('.upload-section .russ-edit-name').val();

// console.log(new_pdt_name);
// console.log(new_pdt_price);
});


//add new product



