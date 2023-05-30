(() => {
    $('#code').click(() => {
        $('#code').fadeOut()
        $('#desc').fadeIn()
    })

    $('#desc').click(() => {
        $('#code').fadeIn()
        $('#desc').fadeOut()
    })

    $(".owl-carousel").owlCarousel({
        margin: 10,
        loop: true,
        autoWidth: true,
        items: 4,
        dots: true,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
    });

    var container = document.getElementById('map');
    var options = {
        center: new kakao.maps.LatLng(37.509631433510066, 127.05946733190677), //지도의 중심좌표.
        level: 3,
        draggable: false,
    };

    var map = new kakao.maps.Map(container, options);

    var markerPosition = new kakao.maps.LatLng(37.509631433510066, 127.05946733190677);

    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    marker.setMap(map);

    $('.heart-title').click(function () {
        $(this).next('.heart-contents').slideToggle();
    });

    var limit = 0

    window.addEventListener('scroll', () => {
        var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
        var dist = $('.corn_box').offset().left - $('.duck_box').offset().left

        if (scrollPercent < 90) {
            $('.heart').fadeOut()
        } else {
            $('.heart').fadeIn()
        }

        $('.corn_box').css('right', ((scrollPercent * 0.85) / 2) + '%');
        $('.duck_box').css('left', (scrollPercent * 0.83 / 2) + '%');
    });

    const today = new Date();
    const endDate = new Date('2023-07-08');
    const diffTime = endDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    $('.d-day').text(diffDays)

    const copyButtons = document.querySelectorAll('.copy');

    copyButtons.forEach(button => {
        button.addEventListener('touchstart', () => {
            const accountNumberElement = button.parentNode.querySelector('span:nth-child(2)');
            const accountNumber = accountNumberElement.textContent;

            navigator.clipboard.writeText(accountNumber)
                .then(() => {
                    console.log('계좌번호가 복사되었습니다.');
                })
                .catch(err => {
                    console.error('복사 중 오류가 발생했습니다.', err);
                });
        });
    });

    $(".copy").on("click", function () {
        var accountNumber = $(this).prev().prev().text();
        var numbersOnly = accountNumber.replace(/[^0-9]/g, '');
        navigator.clipboard.writeText(numbersOnly)
        $("#snackbar").fadeIn("slow", function () {
            setTimeout(function () {
                $("#snackbar").fadeOut("slow");
            }, 2000);
        });
    });
})();

