$(function(){
  var html = `<img src="" id="user_icon">`

  $(document).on('change',".image-hidden",function(){
      var file = this.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function(){
        var image = this.result;
        $("#artist_information__image").html(html);
        $("#user_icon").attr('src',`${image}`);
        
    };
  });
});