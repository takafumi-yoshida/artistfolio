$(function(){

  let $slider = $('.js-slider');
  let $slide = $('.slide');
  let $transition_time = 1000;
  let $time_between_slides = 10000;
  let $i = 0
  let $skip = 0; 
  function slides() {
    return $slider.find($slide);
  }

  slides().first().fadeIn($transition_time);
  if($slide.length >= 2){
    
    setInterval(function() {

      if($skip == 0){
        $(".slide").fadeOut($transition_time);

        if ($i == slides().length - 1){
          $i = 0 
          console.log($i)
        } else{
          $i += 1
          console.log($i)
        }
  
        let interval = setTimeout(function(){
          $(`#slide${$i}`).fadeIn($transition_time);
        },$transition_time + 100);
      }else {
        $skip = 0;  
      };
      
    }, $time_between_slides);

      $(".show_image__image").click(function(){
        $skip = 1;
        $(".slide").fadeOut($transition_time);
        id = $(this).attr('id')
        $i = parseInt( id );
        setTimeout(function(){
          $(`#slide${$i}`).fadeIn($transition_time);
        },$transition_time + 100);
      })

  }; 
});