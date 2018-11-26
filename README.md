# Portfolio Website

Pulls from three APIs to show a random APOD and the people currently in space represented by pictures of dogs.


#### Requirements

Your work must:

- Use semantic markup for HTML and CSS, adhering to best practices.
- Use Flexbox/Grid to create a multi-column layout.
- Be completely responsive.
- Include separate HTML/CSS/JavaScript files.
- Stick with the KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles.
- Use JavaScript or jQuery for DOM manipulation.
- Be deployed and accessible online. (Justin will cover this on Monday)


---

#### Necessary Deliverables

- A working site, built by you, hosted somewhere on the internet.
- A Git repository, hosted on your personal GitHub, that includes a link to your hosted site and frequent commits dating back to the beginning of the project.
- A `README.md` file with explanations of:
  - Technologies used.
  - Your process/approach.
  - Unsolved problems.
  - Your biggest wins and challenges.
- Screenshots of the snippets of code you used to solve particularly interesting problems (think code highlights).
- An in-class demo of the site that shows off the interactions you worked on.
- A carousel whose images slide to the side on a timer, along with indicators that the user can click to navigate to a particular project.
- Add validation to the contact form to make sure the user has filled out all required fields before submitting.
- Add CSS Animations

## Built With Help From

* [Materialize](https://materializecss.com/) - A modern responsive front-end framework based on Material Design
* [Word Cloud](http://www.goat1000.com/tagcanvas.php) - Returns number of humans currently in space, their names, and the craft they are on



## Process
  I thought it would be a good idea to do all the easy stuff first and then do the carousel at the end.  This eneded up being a bad idea because once I linked the materialize library, everything broke. I spent at least half of my time just fixing problems with my css.  This was incredibly frustrating and didn't allow me the time I wanted to work on the rest of the site. In addition to the fact that I built the website using position absolute to determine where everything went.  This did not get along with many of the properties set for premade materialze classes, and I had to esentially triple the length of my css to counter everything Materialze was trying to do.  If I started this project again I woukd just use Materialze from the start instead of trying to fight it the entire way. 

## Unsolved Problems
  - I never figured out a way to hide the image on the right of the screen.  I wanted to get everything else done first but I ran out of time.  I tried several solutions but nothing worked well. 
  - Also it is barely mobile friendly, I had to create about 5 media queries between 700 and 400 pixels to make things look passable, because everything was locked in to absolute values, it wad not immediatly responsive.  Another lesson learned.  Don't rely on position absolute.
  - My links don't work in my dropdown hamburger menu for some reason, as well as the social links at the bottom of the page.  The other links do work though, although a little janky.  
  - It's just generally not very smooth and responsive.

## Good code
I was happy with my somewhat simple solution to change the background color as well as time all the animations using this.  It is more simple and fewer lines of code than anything else I found, however it did provide some limitations and caused some problems.  

```
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
```

## Bad code
This could probably be shortened somehow
```
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
```
## Authors

* **Langdon Froker** - *Initial work* - 


## License

Free to use

## Acknowledgments

* [Helped me figure out generating random date in the right format](https://apod.nasa.gov/apod/random_apod.html)

