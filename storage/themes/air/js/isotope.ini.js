$(document).ready(function () {
  var $grid = $('.grid-isotope').isotope({
    // options
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer',
      gutter: '.gutter-sizer',
    }
  });

  $grid.imagesLoaded().progress(function () {
    $grid.isotope('layout');
  });
});