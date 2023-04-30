(() => {
    console.log("hi")

    $('#toggle-on').click(function() {
        $('#white-mode').fadeOut()
        $('#dark-mode').fadeIn()
    });

    $('#toggle-off').click(function() {
        $('#white-mode').fadeIn()
        $('#dark-mode').fadeOut()
    });
})();