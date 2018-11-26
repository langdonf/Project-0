var section1 = function(){
  $('body').removeClass();
  $('body').addClass('first-color');
  $('#about').addClass('hidden_left');
  $('#about').removeClass('about');
  $('#me2').addClass('hidden_right');
  $('#me2').removeClass('me2');
  $('#arr').removeClass('hide');
  $('.navbar1 a:nth-child(1)').addClass('first-color');
  $('.navbar1 a:nth-child(2)').removeClass('second-color');
}

var section2 = function(){
  $('body').removeClass();
  $('body').addClass('second-color');
  $('#about').addClass('hidden_left');
  $('#about').removeClass('about');
  $('#me2').addClass('hidden_right');
  $('#me2').removeClass('me2');
  $('#arr').addClass('hide');
  $('.navbar1 a:nth-child(2)').addClass('second-color');
  $('.navbar1 a:nth-child(1)').removeClass('first-color');
  $('.navbar1 a:nth-child(3)').removeClass('third-color');
}

var section3 = function(){
  $('body').removeClass();
  $('body').addClass('third-color');
  $('#about').removeClass('hidden_left');
  $('#about').addClass('about');
  $('#me2').removeClass('hidden_right');
  $('#me2').addClass('me2');
  $('.navbar1 a:nth-child(2)').removeClass('second-color');
  $('.navbar1 a:nth-child(3)').addClass('third-color');
  $('.navbar1 a:nth-child(4)').removeClass('fourth-color');
  $('#testimonials').removeClass('scale-in');
  $('#testimonials').addClass('scale-out');
}

var section4 = function(){
  $('body').removeClass();
  $('body').addClass('fourth-color');
  $('#about').addClass('hidden_left');
  $('#about').removeClass('about');
  $('#me2').addClass('hidden_right');
  $('#me2').removeClass('me2');
  $('.navbar1 a:nth-child(3)').removeClass('third-color');
  $('.navbar1 a:nth-child(4)').addClass('fourth-color');
  $('.navbar1 a:nth-child(5)').removeClass('fifth-color');
  $('#testimonials').removeClass('scale-out');
  $('#testimonials').addClass('scale-in');
  $('#contact').addClass('hidden_bottom');
  $('#contact').removeClass('contact');
}

var section5 = function(){
  $('body').removeClass();
  $('body').addClass('fifth-color');
  $('.navbar1 a:nth-child(4)').removeClass('fourth-color');
  $('.navbar1 a:nth-child(5)').addClass('fifth-color');
  $('#testimonials').removeClass('scale-in');
  $('#testimonials').addClass('scale-out');
  $('#contact').removeClass('hidden_bottom');
  $('#contact').addClass('contact');
}


////////////Materialize Dropdown Menu, carousel, and lightbox Initializations ///////////////////////
$(document).ready(function(){
  $('.collapsible').collapsible();
  $('.materialboxed').materialbox();
  $('.dropdown-trigger').dropdown(
    {
      constrainWidth: false,
    }
  );
  $('.carousel').carousel(
    { 
      fullWidth: true,
      indicators: true,
    }
  );
  function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
  };
  autoplay();
});

//////////////////////////Window Scroll Top Locations/////////////////////////////////////

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  console.log(scroll);
  if (scroll <= 250){
    section1()
    console.log('section1')
  } if (scroll >= 250  && scroll <= 1200){
    section2()
    console.log('section2')
  } if (scroll >= 1201 && scroll <= 2300){
    section3()
    console.log('section3')
  } if (scroll >= 2301 && scroll <= 3200){
    section4()
    console.log('section4')
  } if (scroll >= 3201){
    section5()
    console.log('section5')
  }
});

///////////////Sticky Nav////////////////
var num1 = 700; 
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num1) {
      $('.navbar1').addClass('sticky');
  } else {
      $('.navbar1').removeClass('sticky');
  } 
});

///////////Word cloud/////////////
///////////////////http://www.goat1000.com/tagcanvas.php////////////////////////
window.onload = function() {
  try {
    TagCanvas.Start('myCanvas');
  } catch(e) {
    document.getElementById('myCanvasContainer').style.display = 'none';
  }};

window.onload = function() {
    TagCanvas.minSpeed = .005
    TagCanvas.textColour = '#ffffff';
    TagCanvas.outlineColour = 'transparent';
    TagCanvas.textFont = "'Nunito Sans', sans-serif";
    TagCanvas.wheelZoom = false;
    TagCanvas.initial = [.03,.05]
    TagCanvas.Start('myCanvas');
};
///////////////http://www.goat1000.com/tagcanvas.php//////////////////////




