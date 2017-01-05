var request;
var $current;
var cache   = {};
var $frame  = $('#photo-viewer');
var $thumbs = $('.thumb');

function crossfade($img) {
  
  if ($current) {                     // If there is currently an image showing
    $current.stop().fadeOut('slow');  // Stop animation and fade it out
  }
  
  $img.css({ // Center the image
    marginLeft: -$img.width() / 2,
    marginTop: -$img.height() / 2
  });
  
  $img.stop().fadeTo('slow', 1);
  
  $current = $img;
}

$(document).on('click', '.thumb', function(e) {
  var $img;
  var src = this.href;
  request = src;
  
  e.preventDefault();
  
  $thumbs.removeClass('active');
  $(this).addClass('active');
  
  if (cache.hasOwnProperty(src)) { // If cache contains this image
    if (cache[src].isLoading === false) { // and if isLoading is false
      crossfade(cache[src].$img);
    } 
  } else {
    $img = $('<img/>');
    cache[src] = {
      $img: $img,
      isLoading: true
    };
    
    // Next few lines will run when image has loaded
    $img.on('load', function() {
      $img.hide();
      // Remove is-loading class from frame and append new image to it
      $frame.removeClass('is-loading').append($img);
      cache[src].isLoading = false;
      // If still most recently requested image
      if (request === src) {
        crossfade($img)
      }
    });
    
    $frame.addClass('is-loading');
    
    $img.attr({
      'src': src,
      'alt': this.title || ''
    });
  }
  
});

// Runs once (when rest of script has loaded) to show the first image
$('.thumb').eq(0).click(); // Simulate click on first thumbnail