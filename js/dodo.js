(() => {
    $('#toggle-on').click(() => {
        $('#white-mode').hide()
        $('#dark-mode').show()
    });

    $('#toggle-off').click(() => {
        $('#white-mode').show()
        $('#dark-mode').hide()
    });


    $(".owl-carousel").owlCarousel({
        margin: 10,
        loop: true,
        autoWidth: true,
        items: 4,
        // nav: true,
        dots: true,
    });

    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(37.509631433510066, 127.05946733190677), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
    };

    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    var markerPosition = new kakao.maps.LatLng(37.509631433510066, 127.05946733190677);

// 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

// 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);


// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

//
    $('.heart-title').click(function () {
        $(this).next('.heart-contents').slideToggle();
    });


    ////
    const con = document.querySelector('#dd');
    const fixedImg = document.querySelector('.duck');
    const scrollImg = document.querySelector('.fish');

    window.addEventListener('scroll', () => {
        var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
        var dist = $('.fish').offset().left - $('.duck').offset().left

        if (dist > 60) {
            $('.fish').css('right', (scrollPercent / 2) + '%');
            $('.duck').css('left', (scrollPercent / 2) + '%');
        } else {
            $('.heart').fadeIn()
        }
    });

    ///
    const today = new Date();
    const endDate = new Date('2023-07-08');
    const diffTime = endDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    $('.d-day').text(diffDays)

    //
    window.onload = function() {

        setTimeout (function () {

            scrollTo(0,0);

        },100);

    }
})();