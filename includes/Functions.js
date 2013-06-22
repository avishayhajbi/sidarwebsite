/* Rotate Element */
$(document).ready(function() {
    var $elie = $("#openElement"), degree = 0, timer;
   	
    function rotate() {
        $elie.css("cursor","pointer");
        $elie.css({ WebkitTransform: 'rotateY(' + degree + 'deg)'});  
        $elie.css({ '-moz-transform': 'rotateY(' + degree + 'deg)'});
        $elie.css({ '-ms-transform': 'rotateY(' + degree + 'deg)'});
        if(degree == 90)
            $elie.innerHTML = "vdbhgjhnfgjn";            
        timer = setTimeout(function() {
            ++degree; 
            rotate();
        },15);
    }
    
    $("#openElement").mouseout(function() {
    	$elie.css({ WebkitTransform: 'rotateY(' + 0+ 'deg)'});  
        $elie.css({ '-moz-transform': 'rotateY(' + 0 + 'deg)'});
        $elie.css({ '-ms-transform': 'rotateY(' + 0 + 'deg)'});
        clearTimeout(timer);

    }); 
    $("#openElement").mouseover(function() {
        rotate();
    });
});


/* Forms functions  */
$(document).ready(function() {
    var $obj = $("#admission");
    $obj.css({"cursor": "pointer"});

    $($obj).click(function() {
        $("#admission_form").fadeToggle(3000);
    });
});

$(document).ready(function() {
    var $obj = $("#registration");
    $obj.css({"cursor": "pointer"});

    $($obj).click(function() {
        $("#registration_form").fadeToggle(3000);
    });
});