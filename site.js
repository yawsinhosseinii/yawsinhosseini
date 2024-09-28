// site codes
let $ = document;
let loadingElems = $.querySelector(".loadingElems");
let changeTheme = $.querySelector(".changingTheme");
let loader = $.querySelector(".loader");
let navigation = $.querySelector(".nav");
let click = $.querySelector(".loader1");
let loaderClick = $.querySelector(".loader2");
let welcomeText = $.querySelector(".welcomeText");

click.addEventListener("touch", function () {
  click.style.display = "none";
  loaderClick.style.display = "inline";
  navigation.style.display = "flex";
  welcomeText.style.display = "none";
});
click.addEventListener("click", function () {
  click.style.display = "none";
  loaderClick.style.display = "inline";
  navigation.style.display = "flex";
  welcomeText.style.display = "none";
});

loaderClick.addEventListener("touch", function () {
  click.style.display = "inline";
  loaderClick.style.display = "none";
  navigation.style.display = "none";
  welcomeText.style.display = "flex";
});
loaderClick.addEventListener("click", function () {
  click.style.display = "inline";
  loaderClick.style.display = "none";
  navigation.style.display = "none";
  welcomeText.style.display = "flex";
});

window.addEventListener("load", function () {
  setTimeout(function () {
    loadingElems.style.display = "none";
  }, 3500);
});

let backgrounds = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
];
changeTheme.addEventListener("touch", function () {
  loader.style.display = "block";
  setTimeout(function () {
    let num;
    let num1;
    backgrounds.forEach(function () {
      num1 = Math.floor(Math.random() * 17);
      if (num == num1) {
        ++num1;
      }
      num = num1;
    });

    $.body.style.background = "url(" + backgrounds[num] + ")";
    $.body.style.backgroundSize = "cover";
    $.body.style.backgroundPosition = "center";
    loader.style.display = "none";
  }, 2000);
});
changeTheme.addEventListener("click", function () {
  loader.style.display = "block";
  setTimeout(function () {
    let num;
    let num1;
    backgrounds.forEach(function () {
      num1 = Math.floor(Math.random() * 17);
      if (num == num1) {
        ++num1;
      }
      num = num1;
    });

    $.body.style.background = "url(" + backgrounds[num] + ")";
    $.body.style.backgroundSize = "cover";
    $.body.style.backgroundPosition = "center";
    loader.style.display = "none";
  }, 3000);
});

//loader
$(".loading").height($(window).height());
$(".loading").width($(window).width());

$(".loading img").css({
  paddingTop: ($(".loading").height() - $(".loading img").height()) / 2,
  paddingLeft: ($(".loading").width() - $(".loading img").width()) / 2,
});

$(window).resize(function () {
  "use strict";

  $(".loading").height($(window).height());
  $(".loading").width($(window).width());

  $(".loading img").css({
    paddingTop: ($(".loading").height() - $(".loading img").height()) / 2,
    paddingLeft: ($(".loading").width() - $(".loading img").width()) / 2,
  });
});

$(window).mousemove(function (e) {
  "use strict";

  $(".original").css({
    left: e.pageX - 16,
    top: e.pageY - 16,
  });
});

$("body").on("click", function (e) {
  "use strict";

  $(".original")
    .clone(true)
    .appendTo("body")
    .css({
      left: e.pageX - 16,
      top: e.pageY - 16,
    })
    .removeClass("original");
});
