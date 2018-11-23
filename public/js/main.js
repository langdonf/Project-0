

var section1 = function(){
  $('body').removeClass()
  $('body').addClass('first-color')
  $('#about').addClass('hidden_left')
  $('#about').removeClass('about')
  $('#me2').addClass('hidden_right')
  $('#me2').removeClass('me2')
  $('#arr').removeClass('hide')
}
var section2 = function(){
  $('body').removeClass()
  $('body').addClass('second-color')
  $('#about').removeClass('hidden_left')
  $('#about').addClass('about')
  $('#me2').removeClass('hidden_right')
  $('#me2').addClass('me2')
  $('#arr').addClass('hide')
}
var section3 = function(){
  $('#about').addClass('hidden_left')
  $('#about').removeClass('about')
  $('#me2').addClass('hidden_right')
  $('#me2').removeClass('me2')
  $('body').removeClass()
  $('body').addClass('third-color')
}
var section4 = function(){
  $('body').removeClass()
    $('body').addClass('fourth-color')
}
var section5 = function(){
  $('body').removeClass()
  $('body').addClass('fifth-color')
}





$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  console.log(scroll);
  if (scroll <= 250){
    section1()
  } if (scroll >= 250  && scroll <= 1250){
    section2()
  } if (scroll >= 1251 && scroll <= 1500){
    section3()
  } if (scroll >= 2101 && scroll <= 2800){
    section4()
  } if (scroll >= 2800){
    section5()
  }
});

var num1 = 700; 

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num1) {
        $('.nav').addClass('sticky');
    } else {
        $('.nav').removeClass('sticky');
    }
});










//////////////////////////http://www.goat1000.com/tagcanvas.php////////////////////////
window.onload = function() {
  try {
    TagCanvas.Start('myCanvas');
  } catch(e) {
    document.getElementById('myCanvasContainer').style.display = 'none';
  }};

window.onload = function() {
    // set colour of text and outline of active tag
    TagCanvas.minSpeed = .005
    TagCanvas.textColour = '#ffffff';
    TagCanvas.outlineColour = 'transparent';
    TagCanvas.textFont = "'Nunito Sans', sans-serif";
    TagCanvas.wheelZoom = false;
    TagCanvas.initial = [.03,.05]
    TagCanvas.Start('myCanvas');

};


////////////////////////////http://www.goat1000.com/tagcanvas.php/////////////////////////////////

$(document).ready(function(){
  $('.carousel .carousel-slider').carousel(
    {
      dist: 0,
      padding: 0,
      fullWidth: true,
      indicators: true,
      duration: 100,
    }
  );
});



