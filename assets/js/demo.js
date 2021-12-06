$(document).ready(function () {

  // Animated thumbnails
  var $animThumb = $("#aniimated-thumbnials");
  if ($animThumb.length) {
    $animThumb
      .justifiedGallery({
        border: 6,
      })
      .on("jg.complete", function () {
        $animThumb.lightGallery({
          thumbnail: true,
        });
      });
  }

  //thumbnails without animation
  var $thumb = $("#thumbnials-without-animation");
  if ($thumb.length) {
    $thumb
      .justifiedGallery({
        border: 6,
      })
      .on("jg.complete", function () {
        $thumb.lightGallery({
          thumbnail: true,
          animateThumb: false,
          showThumbByDefault: false,
        });
      });
  }
});

