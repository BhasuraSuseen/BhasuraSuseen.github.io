function initMasonryGrids() {
  // Init Masonry
  var $grid = $('.grid').masonry({
    gutter: 10,
    horizontalOrder: true,
    itemSelector: '.grid-item',
  });
  // Layout Masonry after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });
}

$(document).ready(initMasonryGrids);

// Re-run on a back/forward-cache restore (see assets/js/common.js for why):
// $(document).ready doesn't fire again, so without this the grid can be
// left in whatever partial layout state it was in when the user navigated
// away. Masonry's jQuery bridge reuses the existing instance on repeat
// calls, so this is safe to call again rather than double-initializing.
window.addEventListener('pageshow', function (event) {
  if (event.persisted) {
    initMasonryGrids();
  }
});
