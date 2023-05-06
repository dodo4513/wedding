(() => {
    $('#toggle-on').click(function() {
        $('#white-mode').fadeOut()
        $('#dark-mode').fadeIn()
    });

    $('#toggle-off').click(function() {
        $('#white-mode').fadeIn()
        $('#dark-mode').fadeOut()
    });


    $(".owl-carousel").owlCarousel({
        margin:10,
        loop:true,
        autoWidth:true,
        items:4,
        // nav: true,
        dots: true,
    });

    console.log("ready")
})();