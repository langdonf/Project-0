

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
  $('#gallery').removeClass('hide')
  $('#about').addClass('hidden_left')
  $('#about').removeClass('about')
  $('#me2').addClass('hidden_right')
  $('#me2').removeClass('me2')
}
var section3 = function(){
  $('#about').removeClass('hidden_left')
  $('#about').addClass('about')
  $('#gallery').addClass('hide')
  $('#me2').removeClass('hidden_right')
  $('#me2').addClass('me2')
  $('body').removeClass()
  $('body').addClass('third-color')
  $('#testimonials').removeClass('scale-in')
  $('#testimonials').addClass('scale-out')
  
}
var section4 = function(){
  $('body').removeClass()
  $('body').addClass('fourth-color')
  $('#about').addClass('hidden_left')
  $('#about').removeClass('about')
  $('#me2').addClass('hidden_right')
  $('#me2').removeClass('me2')
  $('#contact').addClass('hidden_bottom')
  $('#contact').removeClass('contact')
  $('#testimonials').removeClass('scale-out')
  $('#testimonials').addClass('scale-in')
  
}
var section5 = function(){
  $('body').removeClass()
  $('body').addClass('fifth-color')
  $('#contact').removeClass('hidden_bottom')
  $('#contact').addClass('contact')
  $('#testimonials').removeClass('scale-in')
  $('#testimonials').addClass('scale-out')
}

$(document).ready(function(){
  $('.collapsible').collapsible();
  $('.dropdown-trigger').dropdown({
    constrainWidth: false,
  });
  
});



$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  console.log(scroll);
  if (scroll <= 250){
    section1()
    console.log('section1')
  } if (scroll >= 250  && scroll <= 1200){
    section2()
    console.log('section2')
  } if (scroll >= 1201 && scroll <= 2400){
    section3()
    console.log('section3')
  } if (scroll >= 2401 && scroll <= 3200){
    section4()
    console.log('section4')
  } if (scroll >= 3201){
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
    { fullWidth: true,
      indicators: true,
    }
  );
  /* autoplay();
  function autoplay() {
      $('.carousel').carousel('next');
      setTimeout(autoplay, 4500);
  }; */
  
});
$(document).ready(function(){
  $('.materialboxed').materialbox();
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




