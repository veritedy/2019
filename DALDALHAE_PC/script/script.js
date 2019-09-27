$(document).ready(function (){
    //visual
    $("#visual > div").on('mouseenter', function () {
        $(this).stop().animate({width: '92%'}, 800, 'easeInOutCirc').siblings().stop().animate({width: '8%'}, 800, 'easeInOutCirc');
    });
    $("#visual").on('mouseleave', function () {
        $(this).children().stop().animate({width: '50%'});
    });
    //content
    $(window).on('scroll', function() {
        var scrollT = $(this).scrollTop();
        var move = (100/$(window).height())*scrollT
        $('#content1 .cnt_wrap').css('transform', 'translateY('+move+'px)');

        var imgPos = $('#content2 .images').offset().top - 400;
        if (scrollT > imgPos) $('#content2 .images').addClass('on');

        var scrollT = $(this).scrollTop();
        var move2 = (100/$(window).height())*scrollT
        $('#content4 .cnt_wrap').css('transform', 'translateY('+move2+'px)');

        console.log(move2);

    });

    $(window).scroll( function(){
        $('.hide').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-left':'101px'},1000);
            } else {
                $(this).removeClass('.hide');
            }
        });
        $('.hide2').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-left':'101px'},700);
            } else {
                $(this).removeClass('.hide2');
            }
        });
    });

    var $visual = $('#miniSlider ul');
  /* 
  $(대상).animate({properties}[, duration, easing, complte function])
  이전버튼 클릭
  ☆ 현재 애니메이션이 일어나고 있다면 함수 강제 종료
  1) 마지막 li를 복제(clone())해서 ul의 첫번째 자식(prepend())으로 생성
  2) ul을 marginLeft -105px => 복제한 7을 왼쪽으로 숨겨서 animate()
  3) UI을 animate() => marginLeft 0px
  4) 완료함수 : 마지막 li를 삭제(remove())
   */
  $('#prev').on('click', function () {
    //현재 애니메이션이 일어나고 있다면 함수 강제 종료
    //:animated 라는 필터 선택자는 animate가 일어나는지 여부를 체크할수 있다
    if ( $visual.is(':animated') ) return false;

    $visual.prepend( $visual.children().last().clone() ).css({marginLeft: -680}).stop().animate({marginLeft: 0}, 2000, function () {
      $(this).children().last().remove();
    } );
  });

  /* 다음버튼 클릭
  //현재 애니메이션이 일어나고 있다면 함수 강제 종료
  1) ul의 첫번째 li를 복제(clone())해서 마지막 자식으로 생성(append())
  2) ul을 animate() => marginLeft -105px
  3) 완료 함수 : ul의 첫번째 li를 삭제(remove()). ul의 marginLeft 0으로 되돌리기
   */
    $('#next').on('click', function () {
    if ( $visual.is(':animated') ) return false;

    $visual.append( $visual.children().first().clone() ).stop().animate({marginLeft: -680}, 2000, function () {
      $(this).css('marginLeft', 0).children().first().remove();
    });
  });
});
