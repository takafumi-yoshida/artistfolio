$(function(){
  let imgWidth = 0;
  let totalWidth = 0;
  let boxSize = $("#galleries_box").width();
  let wrapIndex = 0;

  let widthChange = function(){ 

    $(".gallery").each(function(index){
      imgWidth = $(`#gallery__img_${index}`).css('width');
      $(this).css("max-width",`${imgWidth}`);
      totalWidth += parseInt(imgWidth);
      $(this).addClass(`wrap_${wrapIndex}`);
      if(totalWidth > boxSize){
        $(this).removeClass(`wrap_${wrapIndex}`);
        $(`.wrap_${wrapIndex}`).wrapAll('<div class="change_center">');
        wrapIndex += 1;
        $(this).addClass(`wrap_${wrapIndex}`);
        totalWidth = parseInt(imgWidth);
      }else if(totalWidth > (boxSize*80)/100){
        $(`.wrap_${wrapIndex}`).wrapAll('<div class="change_center">');
        wrapIndex += 1;
        totalWidth = parseInt(imgWidth);
      }
    });
  }

    $("#side_list0").click(function(){
      
      $(".center_swicth").css('display','none');
      $(".heading").css('display','none');
      $("#artist_show__main__center__home").css('display','block');
    })

    $("#side_list1").click(function(){
      
      $(".center_swicth").css('display','none');
      $("#artist_show__main__center__galleries").css('display','block');
      $(".heading").css('display','block');

      if(imgWidth === 0) {
        widthChange()
      };
    });
});