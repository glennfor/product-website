//hide main nav on scroll down
// var previous_scroll_position = $(window).scrollTop();
// $(window).scroll(function () {
//   var main_nav = $(".russ-nav-category-box");
//   // var category_nav = $(".russ-nav-category-box");
//   var current_scroll_position = $(this).scrollTop();
//   if (current_scroll_position <= 0) {
//     main_nav.add("russ-show-nav");
//   }
//   if (current_scroll_position > previous_scroll_position) {
//     main_nav.removeClass("russ-show-nav");
//   } else {
//     main_nav.addClass("russ-show-nav");
//     // category_nav.css("top", "0");
//   }
//   previous_scroll_position = current_scroll_position;
// });

const loader_container=$(".loader-container");
const container=$(".container");
$(window).on("load",()=>{
  loader_container.addClass("hide");
  container.addClass("visible");
})

//for search when clicked
var search_btn = $(".russ-search-btn");
var search_input = $(".russ-nav-category-box input");
search_btn.click(function () {
  search_input.css({ width: "150px", height: "30px", padding_left: "10px" });
  search_btn.css("margin-left", "0px");
});
//show three pdts next
var rst_container=$(".rst-container");
var show1=rst_container.children(".rst-show").eq(0);
var show2=rst_container.children(".rst-show").eq(1);
var show3=rst_container.children(".rst-show").eq(2);


//span of three pdts


var prev_index=0;
$(".rst-show").on("click", function() {

  var rst_show_active=$(this);
  $(this).parents(".rst-container").children(".rst-show").removeClass("active-show");
  rst_show_active.addClass("active-show");
  // alert($(this).attr("data-value"));
  var pdt_line_view=$(this).parents(".russ-pdt-line");
  var span3=pdt_line_view.children(".russ-three-pdt");
  // alert(pdt_line_view.attr("data-value"));
  span3.removeClass("russ-show-three-pdt");
 
  span3.each(function(){
    if($(this).attr("data-value")==rst_show_active.attr("data-value")){
      var span_index=$(this).attr("data-value");
      if(span_index<prev_index){
      $(this).addClass("animate-span-slide-left");
      }
      else{
      $(this).addClass("animate-span-slide-right");
      }

      $(this).addClass("russ-show-three-pdt");
    }
   
    prev_index=span_index;
    
  })


})




//action to edit product after edit-btn is clicked
$(".russ-pdt-box").on("click", function () {
  $(".container").css("background","var(--light-bg-grey")
  var img_in_edit = $(this).children(".rus-img-box").children("img").attr("src");
  var name_in_edit = $(this).children("h4").clone().text();
  var pdt_in_edit_rev = $(this).children(".russ-reviews").clone().html();

  $(".russ-edit-lside h4").text(name_in_edit);

  var pdt_in_edit = $(this);
  var price_plh=pdt_in_edit.children("h3").text();
  $(".russ-edit-price").attr("placeholder", price_plh);
  $(".russ-edit-name").attr("placeholder",pdt_in_edit.children("h4").text());
  $(".russ-edit-lside img").attr("src", img_in_edit);
  $(".russ-edit-lside .russ-reviews").html(pdt_in_edit_rev);
  $(".russ-pdt-container").css("display", "none");
  $(window).scrollTop(0);
  $(".russ-edit-section").css({
    display: "block",
    width: "80%",
    height: "fit-content",
  });
  
  $("#russ-change-btn").click(function () {
    //change the name after update
    pdt_in_edit
      .children("h4")
      .text($(".russ-edit-section .russ-edit-name").val());
    pdt_in_edit
      .children("h3")
      .text("$" + $(".russ-edit-section .russ-edit-price").val());
    console.log(pdt_in_edit.children("h3").text());
    close_edit();

  });
});

//close edit-product-section
$(".russ-edit-section .russ-edit-close").click(close_edit);

function close_edit() {
  $(".russ-pdt-container").css("display", "flex");
  $(".russ-edit-section").css("display", "none");
  $(".container").css("background","white");
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
$("#russ-show-cat-resp").on("click", function () {
  $(".russ-nav-category-box").addClass("russ-nav-visible");
});

//to add image from local disk

$(".russ-add-img-icn").on("click", function () {
  //to collect path of desired image from local drive
  $(".upload-section .russ-add-img-local[type='file']").trigger("click");
  new_img_src = $("upload-section .russ-add-img-local[type='file']").val();
  new_img.attr("src", new_img_src);
});
