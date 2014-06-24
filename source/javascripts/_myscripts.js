//FACEBOOK SHARE

$(document).ready(function(){
$("#share").on("click", function(e){
e.preventdefault;
FB.ui(
  {
    method: 'share',
    href: 'https://www.vydia.com/get-on-vevo/',
    method: "feed",
    link: 'https://www.vydia.com/get-on-vevo/',
    name: "Get your music video on VEVO!",
    caption: "Vydia.com makes getting your video on VEVO easy!",
    description: "Make money from your music videos on Youtube, VEVO, Dailymotion, MUZU and more on one easy to use platform. No long term commitments and own 100% of your videos. As an official partner, you’ll be eligible for editorial placements on each platform to help drive awareness for your content.",
    picture: "http://pullzone.vydiainc.netdna-cdn.com/wp-content/themes/vydia/images/vydiafacebookshare.jpg"
  },
  function(response) {
    if (response && !response.error_code) {
    } else {
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
    }, 500);
    $("#sub-wrapper h3").css("font-size", "45px");
    $("#sub-wrapper p.enter").css("font-size", "25px");
    $("p.logo").hide();
    $(".logo-lg > img").show();
    $("input#geton").addClass("pulse");
    $("input#email").addClass("glow");
    $("#margin").css("margin" , "100px 0 200px 0");
});
