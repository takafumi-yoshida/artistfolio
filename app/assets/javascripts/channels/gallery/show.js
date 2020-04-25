$(function(){
  let right = $(".gallery_information__right");
  let btn = $(".gallery_information__btn");
  let rightHeight = $(".gallery_information__right").height();
  let index = 0

  if(rightHeight > 160) {
    right.height(140);
    btn.css('display','block');
  };

  btn.click(function(){
    if(index == 0) {
      right.height(rightHeight);
      right.hide();
      right.slideToggle(500);
      btn.text('説明文を閉じる');
      index = 1;
    } else {
      right.slideToggle(0);
      right.height(140);
      right.show(500);
      btn.text('全文を表示する');
      index = 0;
    }
    
    
  });
});