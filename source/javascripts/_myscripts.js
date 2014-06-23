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


//scroller



$height = $(window).height();

$("#geton").click(function() {
    $('html, body').animate({
        scrollTop: $("#sub-wrapper").offset().top
    }, 2000);
    $("#email").addClass("glowing-border");
    $("#sub-wrapper").animate({ 
        height: $height + 'px',
      }, 1500 );
    $("#margin").css("margin-top", "25%");
    $("#sub-wrapper h3").css("font-size", "45px");
    $("#sub-wrapper p.enter").css("font-size", "25px");
    $("p.logo").hide();
    $(".logo-lg > img").show();
});
