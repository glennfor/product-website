//hide main nav on scroll down
var previous_scroll_position = $(window).scrollTop();
$(window).scroll(function () {
  var main_nav = $(".russ-main-nav");
  var category_nav = $(".russ-nav-category-box");
  var current_scroll_position = $(this).scrollTop();
  if (current_scroll_position <= 0) {
    main_nav.removeClass("russ-show-nav");
  }
  if (current_scroll_position > previous_scroll_position) {
    main_nav.removeClass("russ-show-nav");
  } else {
    main_nav.addClass("russ-show-nav");
    category_nav.css("top", "0");
  }
  previous_scroll_position = current_scroll_position;
});

//for search when clicked
var search_btn = $(".russ-search-btn");
var search_input = $(".russ-nav-category-box input");
search_btn.click(function () {
  search_input.css({ width: "150px", height: "30px", "padding-left": "10px" });
  search_btn.css("margin-left", "0px");
});
//whnen fixed add-btn  is clicked
var fixed_add_btn = $(".russ-add-pdt");

//action to edit product after edit-btn is clicked
$(".russ-pdt-box").on("click", function () {
  var img_in_edit = $(this).children("img").attr("src");
  var name_in_edit = $(this).children("h4").clone().text();
  var pdt_in_edit_rev = $(this).children(".russ-reviews").clone().html();

  $(".russ-edit-lside h4").text(name_in_edit);
  $(".russ-edit-lside img").attr("src", img_in_edit);
  $(".russ-edit-lside .russ-reviews").html(pdt_in_edit_rev);
  $(".russ-pdt-container").css("display", "none");
  $(window).scrollTop(0);
  $(".russ-edit-section").css({
    display: "block",
    width: "80%",
    height: "fit-content",
  });
  var pdt_in_edit = $(this);
  $(".russ-edit-only .russ-updt-btn").click(function () {
    //to actually change the name after update
    pdt_in_edit.children("h4").text($(".russ-edit-only .russ-edit-name").val());
    pdt_in_edit.children("h3").text("$" + $(".russ-edit-only .russ-edit-price").val());
    console.log(pdt_in_edit.children("h3").text());
    // //scroll to section of edited pdt
    // var scroll_to=img_in_edit.parent('h1').attr('id');
    // console.log(scroll_to);
    // $(this).parent('a').attr('href',scroll_to);
    close_edit();
  });
});

//close edit-product-section
$(".russ-edit-only .russ-edit-close").click(close_edit);

function close_edit() {
  $(".russ-edit-section").css("display", "none");
  $(".russ-pdt-container").css("display", "block");
}

//add product
$(".russ-add-btn").click(function () {
  var new_img = $(".upload-section img");
  var new_img_src = $(".upload-section .russ-add-img-src").val();
  new_img.css("visibility", "visible");
  new_img.attr("src", new_img_src);
  $(".russ-add-img-text").html("click to<br>replace image");
  $(".russ-add-img-icn").text("edit");

  //for new pdt while creating the pdt
  var new_price = $(".upload-section .russ-edit-price").val();
  var new_name = $(".upload-section .russ-edit-name").val();
  console.log(new_name);
  console.log(new_price);
  console.log(new_img_src);

  var new_category = $(".russ-radio-part input[name='category']").val();
  var new_pdt = $("<div>");
  new_pdt.addClass("russ-pdt-box");

  var new_pdt_img = $("<img>");
  new_pdt_img = new_img.clone().html();
  new_pdt_img.appendTo(new_pdt);

  var new_pdt_reviews = $("<div>", { class: "russ-reviews" });
  new_pdt_reviews.appendTo(new_pdt);

  var new_pdt_name = $("<h4>");
  new_pdt_name.text(new_name);
  new_pdt_name.appendTo(new_pdt);

  var new_pdt_category = $("<h6>");
  new_pdt_category.text(new_category);
  new_pdt_category.appendTo(new_pdt);

  var new_pdt_price = $("<h3>");
  new_pdt_price.text(new_price);

  new_pdt.appendTo(".russ-pdt-line");
});

//responsive
$("#russ-show-cat-resp").on("click",function(){
  $(".russ-nav-category-box").addClass("russ-nav-visible");
  
})


//to add image from local disk

$('.russ-add-img-icn').on("click",function(){
    //to collect path of desired image from local drive
    $(".upload-section .russ-add-img-local[type='file']").trigger('click');
    new_img_src=$("upload-section .russ-add-img-local[type='file']").val();
    new_img.attr('src',new_img_src);

})
