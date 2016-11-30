// This is where it all goes :)


$( document ).ready(function() {

  $(".hamburger").on('click', function() {
    if ($(this).hasClass("is-active")) {
      $(this).removeClass("is-active");
    } else {
      $(this).addClass("is-active");
    }
  });




});