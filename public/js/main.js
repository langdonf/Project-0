

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
  
  $('#arr').addClass('hide')
}
var section3 = function(){
  $('#about').removeClass('hidden_left')
  $('#about').addClass('about')
  $('#me2').removeClass('hidden_right')
  $('#me2').addClass('me2')
  $('body').removeClass()
  $('body').addClass('third-color')
}
var section4 = function(){
  $('body').removeClass()
  $('body').addClass('fourth-color')
  $('#about').addClass('hidden_left')
  $('#about').removeClass('about')
  $('#me2').addClass('hidden_right')
  $('#me2').removeClass('me2')
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
    console.log('section1')
  } if (scroll >= 250  && scroll <= 1450){
    section2()
    console.log('section2')
  } if (scroll >= 1451 && scroll <= 1980){
    section3()
    console.log('section3')
  } if (scroll >= 1981 && scroll <= 2800){
    section4()
    console.log('section4')
  } if (scroll >= 2800){
    section5()
    console.log('section5')
  }
});

var num1 = 700; 

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num1) {
        $('.navbar').addClass('sticky');
    } else {
        $('.navbar').removeClass('sticky');
    }
});


$(document).ready(function(){
  $('.carousel').carousel(
    
  );
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




