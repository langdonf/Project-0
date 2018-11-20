$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll <= 900){
    $('body').removeClass()
    $('body').addClass('first-color')
  } if (scroll >= 901  && scroll <= 1800){
    $('body').removeClass()
    $('body').addClass('second-color')
  } if (scroll >= 2701 && scroll <= 3600){
    $('body').removeClass()
    $('body').addClass('third-color')
  } if (scroll >= 4501 && scroll <= 5400){
    $('body').removeClass()
    $('body').addClass('fourth-color')
  } if (scroll >= 6300){
    $('body').removeClass()
    $('body').addClass('fifth-color')
  }
});

var num = 550; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.nav').addClass('sticky');
    } else {
        $('.nav').removeClass('sticky');
    }
});


window.onload = function() {
  try {
    TagCanvas.Start('myCanvas');
  } catch(e) {
    // something went wrong, hide the canvas container
    document.getElementById('myCanvasContainer').style.display = 'none';
  }};

  $(document).ready(function() {
    if( ! $('#myCanvas').tagcanvas({
    
    })) {
      // TagCanvas failed to load
      $('#myCanvasContainer').hide();
    }
    // your other jQuery stuff here...
  });

  window.onload = function() {
    // set colour of text and outline of active tag
    TagCanvas.minSpeed = .005
    TagCanvas.textColour = '#ffffff';
    TagCanvas.outlineColour = 'transparent';
    TagCanvas.Start('myCanvas');
   
    
   };







