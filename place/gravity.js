var demo = new Vue({
    el: '#demo',
    data: {
      message: 'Gravity Text',
      getRandomColor: '#03a9f4'
    },
    methods: {
      getColor: function () {
      console.log('sadasd')
         var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
      }
    }
})


$(document).ready(function() {

	var gr_x = document.getElementById("gravity-x").value;
  	var gr_y = document.getElementById("gravity-y").value;

	$(".start-g").click(function(){

		$(".test").throwable({
						drag:true,
                        gravity:{x:gr_x,y:gr_y},
                        impulse:{
                            f:152,
                            p:{x:0,y:1.5}
                        },
                        shape:"circle",
                        autostart:false,
                        bounce:20,
                        damping:13,
                        
		});

	});

	$(".stop-g").click(function(){
		$(".test").throwable({
			gravity:{x:0,y:0},
		});
	});

	$("#gravity-x, #gravity-y").click(function(){
		var gr_x = document.getElementById("gravity-x").value;
  	var gr_y = document.getElementById("gravity-y").value;
		$(".test").throwable({
			gravity:{x:gr_x,y:gr_y},
		});

	});
});

