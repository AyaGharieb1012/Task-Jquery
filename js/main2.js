/// <reference types="../@types/jquery" />
///left menue///
$(".openNav").on("click", function () {
  $("#leftMenu").animate({ width: "250px" }, 50);
  $("#home-content").animate({ marginLeft: "250px" }, 50);
  $(".openNav").css("display", "none");
  // $(".openNav").animate({ left: "250px" }, 50);
});

$(".closebtn").on("click", function () {
  $("#leftMenu").animate({ width: "0px" }, 50);
  $("#home-content").animate({ marginLeft: "0px" }, 50);
  $(".openNav").css("display", "block");
  // $(".openNav").animate({ left: "30px" }, 50);
});
/*scrollmenu*/
$("#leftMenu a").on("click", function () {
  // $("#leftMenu a").css("clor", "#D62E33");
  var sectionId = $(this).attr("href");

  var positionOfSection = $(sectionId).offset().top;

  $("html , body").animate({ scrollTop: positionOfSection }, 1000);
});

///sliderDown///

$("#sliderDown .toggle").on("click", function () {
  $(".inner").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});

///count down///

document.addEventListener("DOMContentLoaded", function () {
  const storedEventDate = localStorage.getItem("eventDate");
  if (storedEventDate) {
    eventDate = parseInt(storedEventDate);
    updateCountdown();
  }
});

let eventDate = new Date().getTime();

function updateEventDate() {
  const inputDate = new Date($("#eventDate").val()).getTime();
  if (!isNaN(inputDate)) {
    eventDate = inputDate;
    localStorage.setItem("eventDate", eventDate);
    updateCountdown();
  }
}

function updateCountdown() {
  const now = new Date().getTime();
  const timeRemaining = eventDate - now;
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // تحقق من عرض الوقت بشكل صحيح في ال console
  console.log(
    `Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`
  );

  // قم بعرض الوقت في عناصر HTML
  $("#days").text(`Days: ${days}`);
  $("#hours").text(`Hours: ${hours}`);
  $("#minutes").text(`Minutes: ${minutes}`);
  $("#seconds").text(`Seconds: ${seconds}`);
}
setInterval(updateCountdown, 1000);
//end countdown//
//contact//
$("#contact  .icon1").on("click mouseenter", function () {
  $("#contact .icon1").removeClass("selected");
  $(this).addClass("selected");
});
/*textarea*/
var maxLength = 100;
$("textarea").on("keyup", function () {
  var length = $(this).val().length;
  var AmountLeft = maxLength - length;
  if (AmountLeft <= 0) {
    $("#chars").text("your available character finished");
  } else {
    $("#chars").text(AmountLeft);
  }
});
