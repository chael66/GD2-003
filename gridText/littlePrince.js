


// When the user scrolls the page, execute myFunction 


window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}



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
var jb = $( '#ch4' ).offset()
console.log (jb)


jQuery(document).ready(function($) {

        $("#button").click(function(event){            
                event.preventDefault();
                $('html,body').animate({scrollTop:$(this.hash).offset( ).top}, 500);
        });
});






///> how to create scroll where I want 