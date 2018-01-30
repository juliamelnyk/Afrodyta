//read more in articles
$('.continious').hide();
$('.read-more').click(function(){
   if ($($(this).attr('data-rel')).is(':hidden')) {
        $($(this).attr('data-rel')).fadeIn(400); 
    $(this).text('...hide'); 
    } else {
        $($(this).attr('data-rel')).fadeOut(400);
    $(this).text('read more...'); 
    }
     return false;
});
//button up
$(".js-btn-up").click(function () {
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 2000);
});

function showButtonUp(){
    if ($(window).scrollTop() > $(window).height()) {
        $('.js-btn-up').fadeIn(400);
    } else {
        $('.js-btn-up').fadeOut(400);
    }
}
$(window).on('scroll', showButtonUp);
showButtonUp();

//hidden header
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       $('header').addClass('js-hidden');
   } else {
      $('header').removeClass('js-hidden');
   }
   lastScrollTop = st;
});
//burger navigation
    $('.burger-icon').on('click', function() {
      var topBar=$('#top-bar__navigation');
    if ($(topBar).hasClass("top-bar__navigation")) {
        $(topBar).removeClass('top-bar__navigation').addClass('js-burger-nav_open');
    } else {
        $(topBar).removeClass('js-burger-nav_open').addClass('top-bar__navigation');
    }
     $(this).closest('.js-burger-nav_hidden').toggleClass('js-burger-nav_open');
});
    $("body").click(function(e) {
  if($(e.target).closest(".js-burger-nav_open").length==0) {
    $('#top-bar__navigation').removeClass('js-burger-nav_open').addClass('top-bar__navigation');
    $('.js-burger-nav_hidden').removeClass('js-burger-nav_open');}
});
