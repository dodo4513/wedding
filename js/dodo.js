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

    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(37.509631433510066, 127.05946733190677), //지도의 중심좌표.
        level: 3, //지도의 레벨(확대, 축소 정도)
        draggable: false,
    };

    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    var markerPosition = new kakao.maps.LatLng(37.509631433510066, 127.05946733190677);

// 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

// 마커가 지도 위에 표시되도록 설정합니다
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
    //
    // 복사하기 버튼 요소들을 가져옵니다.
    const copyButtons = document.querySelectorAll('.copy');

// 각 버튼에 클릭 이벤트를 추가합니다.
    copyButtons.forEach(button => {
        button.addEventListener('touchstart', () => {
            console.log("d")
            // 계좌번호 요소를 찾습니다.
            const accountNumberElement = button.parentNode.querySelector('span:nth-child(2)');

            // 계좌번호를 텍스트로 가져옵니다.
            const accountNumber = accountNumberElement.textContent;

            // 계좌번호를 클립보드에 복사합니다.
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

