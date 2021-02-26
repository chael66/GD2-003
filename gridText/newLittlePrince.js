


window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}



$(document).ready(function() {
 
  $(window).scroll( function(){
     
      $('.chapters').each( function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
         
          if( bottom_of_window > bottom_of_object/2 ){
              $(this).animate({'opacity':'1'},500);
          }
      }); 
  });
});



























////화면내리면서 스크롤
////타이틀 애니메이션 효과
//// 이미지 추가 
////이미지 애니메이션 
////타이틀에 일러애니같은st