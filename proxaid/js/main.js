$(function() {
// porfolio filterizr
  $('.filter-container').imagesLoaded( function() {
    var filterizr = $('.filter-container').filterizr();
});

// portfolio filter
$('.portfolio-filter-menu li').on('click', function() {
    $('.portfolio-filter-menu li').removeClass('active');
    $(this).addClass('active');
});

// portfolio magnific popup
$('.portfolio').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: '.portfolio-popup', // the selector for portfolio item
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
});