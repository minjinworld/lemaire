$(document).ready(function(){

    //햄버거 버튼 클릭하면 메인메뉴 나오면서 햄버거버튼 스위치되도록 처리 
    $('#hamburger').click(function(){
        $(this).toggleClass('active');
        $('.main-menu').toggleClass('active');
    });


    //풀페이지가 1800 미만에서는 제거되도록 처리(새로고침시 진행)
    media();
    function media(){
        let windowWidth = $(window).width();
        if(windowWidth >= 1800){
            //풀페이지
            new fullpage('#wrap',{
                scrollBar : true,
                normalScrollElements: '.sec-4,.sec-5,.footer',
                fitToSection: false,
                scrollingSpeed: 300,
            })

            //스크롤 위치값을 섹션 상단에 맞춰서 클래스 제어
            $(window).scroll(function(){
                const sct = $(window).scrollTop();
                console.log(sct);

                // 섹션별 상단 위치값 변수에 저장
                const banner = $('.banner').offset().top;
                const sec1 = $('.sec-1').offset().top;
                const sec2 = $('.sec-2').offset().top;
                const sec5 = $('.sec-5').offset().top;

                //조건문으로 섹션별위치 조건 걸어서 sec1에서 header-area 스타일링 변경 / sec2 에서 다시 변경 / sec5에서 다시 또 변경
                if(sct >= banner && sct < sec1){
                    //banner
                    $('.header-area, .header-logo, .header-logo svg').removeClass('active');
                }else if(sct >= sec1 && sct < sec2){
                    //sec1
                    $('.header-area, .header-logo, .header-logo svg').addClass('active');
                }else if(sct >= sec2 && sct < sec5){
                    //sec2,sec3,sec4
                    $('.header-area, .header-logo svg').removeClass('active');
                }else if(sct >= sec5){
                    //sec5 이상
                    $('.header-area, .header-logo svg').addClass('active');
                }
            });



        }else{

        }
    }



    // sub-menu
    // 마우스 올리면 카테고리에 맞는 탭 활성화 / 헤더 색상변경 / 서브메뉴 박스에서 마우스 나가면 기존 상태로 다시 변경
    // 40분까지 진행해보세요!
    $('.main-menu li').mouseenter(function(){
        let result = $(this).attr('data-tab');
        $('.sub-menu').removeClass('active');
        $(`#${result}`).addClass('active');

        //서브메뉴박스 보이게
        $('.sub-menu-box').addClass('active');

        //헤더 색상 변경
        $('.header-area, .header-logo svg').addClass('active');

    });

    $('.sub-menu-box').mouseleave(function(){
        $(this).removeClass('active');
        $('.header-area, .header-logo svg').removeClass('active');

    });


    //sec-4 swiper
    //세로 자동으로 굴러가는 스와이퍼 연결해보기
    var swiper = new Swiper(".mySwiper",{
        direction: "vertical",
        loop:true,
        slidePerView: "auto",
        speed: 500,
        autoplay:{
            delay: 1500,
            disableOnInteraction: false,
        }
    })

    // 상단이동버튼 300px 이상일때 최상단으로 올라가는 상단이동버튼 구현해보기(배너에서 없어져있다가 sec1에서부터 보이게)
    let btn = $('.top-btn');
    $(window).scroll(function(){
        if($(window).scrollTop() >= 300){
            btn.fadeIn();
        }else{
            btn.fadeOut();
        }
    });

    btn.click(function(){
        $('html,body').animate({
            scrollTop : 0
        },500);
    });

});
