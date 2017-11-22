$('.burger-menu').on('click', function(e) {
e.preventDefault();
if($('.nav').hasClass('active')) {
    $('.nav').removeClass('active');
    
}else {
    $('.nav').addClass('active');
}
                   
 });