$(function(){

  var $slider = $('.js-slider');
  var $slide = $('.slide');
  var $transition_time = 1000;
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

      $(`#slide${$i}`).fadeOut($transition_time);
      
      if (slides().length == $i + 1){
        $i = 0 
      } else{
        $i += 1
      }
      setInterval(function(){
        
      })
      setTimeout(function(){
        $(`#slide${$i}`).fadeIn($transition_time);
      
      },$transition_time + 100);
    }, $time_between_slides
  );
  
});