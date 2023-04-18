// preloader
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

// scrop to top
const toTop = document.querySelector(".to_top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 400) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

$(document).ready(function () {
  $(".list").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".itemBox").show("1000");
    } else {
      $(".itemBox")
        .not("." + value)
        .hide("1000");
      $(".itemBox")
        .filter("." + value)
        .show("1000");
    }

    // add active class
    $(".list").click(function () {
      $(this).addClass("active").siblings().removeClass("active");
    });
  });
});
