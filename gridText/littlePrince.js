
///? ???

//// class vs name 
//// section vs article vs div

//stars disspapear
//lines are moving  down through the page
///


window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}



// jQuery(document).ready(function($));
// $( 'html, body' ).stop().animate( { scrollTop : 100 } ) 




// $(document).ready(function(){

//     $("#button1").on('click', function(event) {
  
//       if (this.hash !== "") {
  
//         event.preventDefault();
  
//         var hash = this.hash;
  
//         $('html, body').animate({
  
//           scrollTop: $(hash).offset().top
  
//         }, 800, function(){
  
//           window.location.hash = hash;
  
//         });
  
//       } 
  
//     });
  
//   });




// jQuery(document).ready(function($) {

//         $("#button").click(function(event){            
//                 event.preventDefault();
//                 $('html,body').animate({scrollTop:$(this.hash).offset( ).top}, 500);
//         });
// });






///> how to create > scroll down to @ (where I want 