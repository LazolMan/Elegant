jQuery(function ($) {
  "use strict";

  if ($(".menu__toggle-label").length) {
    var menuActive = false;
    $(".menu__toggle-label").on("click", function () {
      if (!menuActive) {
        $(".menu__content").show();
        $(this).hide();
        $(".menu__toggle-label").show();
        menuActive = true;
      } else {
        $(".menu__content").hide();
        $(this).show();
        $(".menu__toggle-label").show();
        menuActive = false;
      }
    });
  }

  var nav = $("#header");
  var nav_height = nav.outerHeight();

  if ($(".scroll-bttn").length) {
    $(".scroll-bttn").on("click", function () {
      var top = $(this).offset().top + nav_height,
        bottom = top - $(this).outerHeight();

      $("html, body").animate(
        {
          scrollTop: nav_height,
        },
        1000
      );
    });
  }
});

function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(51.5, -0.2),
    zoom: 10,
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}
