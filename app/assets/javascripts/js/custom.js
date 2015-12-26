// img-1
$(document).ready(function(){
	$(".img-1").click(function(){
		$("#myModal").modal('show');
	});
});
// img-2
$(document).ready(function(){
	$(".img-2").click(function(){
		$("#img-2").modal('show');
	});
});
// img-3
$(document).ready(function(){
	$(".img-3").click(function(){
		$("#img-3").modal('show');
	});
});
// img-4
$(document).ready(function(){
	$(".img-4").click(function(){
		$("#img-4").modal('show');
	});
});
// img-5
$(document).ready(function(){
	$(".img-5").click(function(){
		$("#img-5").modal('show');
	});
});
// img-6
$(document).ready(function(){
	$(".img-6").click(function(){
		$("#img-6").modal('show');
	});
});


$(function(){
  // bind change event to select
  $('#select').bind('change', function () {
    var url = $(this).val(); // get selected option value
    if (url==1) { // require url to have value
      window.location = "sdr.html"; // open url
    }
	else if(url==2){
	    window.location = "feature-icons.html"; // open url			
	}
	else if(url==3){
	    window.location = "ampli.html"; // open url			
	}
	else if(url==4){
	    window.location = "combiner.html"; // open url			
	}
	else if(url==5){
	    window.location = "low.html"; // open url			
	}
	else if(url==6){
	    window.location = "down.html"; // open url			
	}
	else if(url==7){
	    window.location = "http://www.twitter.com"; // open url			
	}
	else if(url==8){
	    window.location = "modulator.html"; // open url			
	}
    return false;
  });
});









// function setSearchTermSN(n){
   // var SN_VALUE = encodeURIComponent(document.getElementById("select-modal").value);
   // if(SN_VALUE==3){
    // location.href = "http://www.facebook.com";
   
   // }
   // else if(SN_VALUE==4){
  
  // location.href = "http://www.twitter.com";
   
   // }
   // else{
     
	 // return false;

   
   // }
  
 // }


