$(function(){

  let transition_time = 2000;
  let time_between_slides = 10000;
  let defSrc = $("#gallery_0_photo").attr('src');
  let count = 9;

  let createHtml = function(){
     label = $('<label/>',{
      for: `${count}_photo`,
      class: `for_delete_${count}_photo`
    })
     p = $("<p></p>",{
      class: "hidden-delete",
      id: `delete_${count}_photo`
    })
     i = $("<i></i>",{
      class: "fas fa-trash-alt",
    })
     img = $("<img/>",{
      id: `gallery_${count}_photo`,
      src: `${defSrc}`
    })

    input = $("<input/>",{
      name: `gallery[gallery_images_attributes][${count}][photo]`,
      class: "hidden-field",
      id: `${count}_photo` ,
      type: "file"

    })

    p.append(i);
    label.append(p);
    label.append(img);
    label.append(input);

    $("#add_images").append(label)

    count += 1;

  };

  createHtml();
  let moveScreen = function(){

    let screen = $('#slide_screen');
    let slideImage = $(".screen_image");
    let index = 0;
    let num = -1;

    function slideScreen() {
      return screen.find(slideImage).first();
    }



   let interval = setInterval(function(){
    if(($(".screen_image").length) <= 1){
      clearInterval(interval)
    }
    $(".screen_image").fadeOut(transition_time);

    if(index >= $(".screen_image").length + num){
      index = 0;
      num = -1;
    }else{
      index += 1;
    };
    setTimeout(function(){
      if($(`#${index}_photo_screen`).length == 0){
        while($(`#${index}_photo_screen`).length == 0){
          index += 1;
          num += 1;
          if(num >= 100){
            index = 0;
            num = -1;
            console.log(num)
            break;
          }
          console.log(num)
        };
      };
      $(`#${index}_photo_screen`).fadeIn(transition_time); 
    },transition_time + 100);
    },time_between_slides);
  }
  

  $("#create_gallery__images__contents").on('change',".hidden-field",function(){

    let id = $(this).attr('id');
    let file = this.files[0];
    let reader = new FileReader();
    $(this).removeAttr('id');
    reader.readAsDataURL(file)

    reader.onload = function(){

      let image = this.result;
      $(`#gallery_${id}`).attr('src',`${image}`);
      $("#image_error").css('display','none')
      $(`#delete_${id}`).css("display", "block")
      if($("#def_img").length){
        $("#def_img").attr('src',`${image}`);
        $("#def_img").attr({
          id:`${id}_screen`,
          class: `screen_image for_delete_${id}`,
          src: `${image}`
        });
      }else {
        let imgHtml = $('<img />',{
          id:`${id}_screen`,
          class: `screen_image for_delete_${id}`,
          src: `${image}`,
          css:{display: "none"},
        });
        $("#slide_screen").append(imgHtml);
      }

      if($(".screen_image").length == 1 ){
        $(`#${id}_screen`).css("display", "block")
      }else if($(".screen_image").length == 2 ){
        moveScreen();
      };
    };
  });

  $("#add_images").on('click',".hidden-delete",function(){
      deleteId = $(this).attr('id')
      $(`.for_${deleteId}`).remove();
      createHtml();
      if (!($(".screen_image").length)) {
        $("#image_error").css('display','block')
      };
  });

  $(".create_btn").click(function(){
    if (!($(".screen_image").length)) {
      return false;
    };
  });
});