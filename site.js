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
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/7.jpg",
  "images/8.jpg",
  "images/9.jpg",
  "images/10.jpg",
  "images/11.jpg",
  "images/12.jpg",
  "images/13.jpg",
  "images/14.jpg",
  "images/15.jpg",
  "images/16.jpg",
  "images/17.jpg",
  "images/18.jpg",
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
