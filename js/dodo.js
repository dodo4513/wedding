(() => {
    $('#toggle-on').click(function () {
        $('#white-mode').hide()
        // $('#white-mode').fadeOut()
        // $('#dark-mode').fadeIn()
        $('#dark-mode').show()
    });

    $('#toggle-off').click(function () {
        // $('#white-mode').fadeIn()
        $('#white-mode').show()
        $('#dark-mode').hide()
        // $('#dark-mode').fadeOut()
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

    console.log("ready")
})();