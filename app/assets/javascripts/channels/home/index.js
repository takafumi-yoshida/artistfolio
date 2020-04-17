$(function(){

  var $slider = $('.js-slider');
  var $slide = $('.slide');
  var $transition_time = 2000;
  var $time_between_slides = 5000;

  function slides() {
    return $slider.find($slide);
  }

  // set active classes
  slides().first().fadeIn($transition_time);
  let $i = 0
  // auto scroll
  $interval = setInterval(
    function() {

      slides().fadeOut();
      if (slides().length == $i + 1){
        $i = 0 
      } else{
        $i += 1
      }

      $(`#slide${$i}`).fadeIn($transition_time)
      // slides().find(`#slide${$i}`).fadeIn($transition_time)

    }, $time_between_slides
  );
  
});