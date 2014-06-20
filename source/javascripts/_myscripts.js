//FACEBOOK SHARE

$(document).ready(function(){
$("#share").on("click", function(e){
e.preventdefault;
FB.ui(
  {
    method: 'share',
    href: 'https://developers.facebook.com/docs/',
  },
  function(response) {
    if (response && !response.error_code) {
      alert('Posting completed.');
    } else {
      alert('Error while posting.');
    }
  }
);

});
});


//Footer Hovers
$('.socials i, #share, #geton, input#geton').hover(function () {
  $(this).addClass("pulse");
}, function () {
  $(this).removeClass("pulse");
});
