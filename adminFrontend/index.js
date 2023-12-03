var mylink = document.querySelectorAll("#link");
mylink.addEventListener("click", function(event){
    event.preventDefault();
    mylink.classlist.add("clicked");
});