


window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


// /////////////////////////////



function isElementUnderBottom(elem, triggerDiff) {
  const { top } = elem.getBoundingClientRect();
  const { innerHeight } = window;
  return top > innerHeight + (triggerDiff || 0);
}

function handleScroll() {
  const elems = document.querySelectorAll('.chapter');
  elems.forEach(elem => {
    if (isElementUnderBottom(elem, -200)) {
      elem.style.opacity = "0";
      elem.style.transform = 'translateY(70px)';
    } else {
      elem.style.opacity = "1";
      elem.style.transform = 'translateY(0px)';
    }
  })
}

window.addEventListener('scroll', handleScroll);



// $(document).ready(function() {
 
//   $(window).scroll( function(){
     
//       $('.chapters').each( function(i){
//           var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//           var bottom_of_window = $(window).scrollTop() + $(window).height();
         
//           if( bottom_of_window > bottom_of_object/2 ){
//               $(this).animate({'opacity':'1'},500);
//           }
//       }); 
//   });
// });



























////화면내리면서 스크롤
////타이틀 애니메이션 효과
//// 이미지 추가 
////이미지 애니메이션 
////타이틀에 일러애니같은st