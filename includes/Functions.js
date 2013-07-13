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

    $(".main_section ul li:nth-child(1)").hover(function() {
        $(".main_section ul li:nth-child(1) ul").fadeToggle(700);
    });

    $(".main_section ul li:nth-child(6)").hover(function() {
        $(".main_section ul li:nth-child(6) ul").fadeToggle(700, function() {
            $(".main_section ul li:nth-child(6) ul li").animate({
                right: '0%'
            });
        });
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


function goTo(choose)
{
    var selected = choose.options[choose.selectedIndex].value;
    if(selected != "")
    {
        location.href = selected;
    }
}

$(document).ready(function(){
    
    //Examples of how to assign the Colorbox event to elements
    $(".group1").colorbox({rel:'group1'});
    $(".group2").colorbox({rel:'group2', transition:"fade"});
    $(".group3").colorbox({rel:'group3', transition:"none", width:"75%", height:"75%"});
    $(".group4").colorbox({rel:'group4', slideshow:true});
    $(".ajax").colorbox();
    $(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
    $(".vimeo").colorbox({iframe:true, innerWidth:500, innerHeight:409});
    $(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});
    $(".inline").colorbox({inline:true, width:"50%"});
    $(".callbacks").colorbox({
        onOpen:function(){ alert('onOpen: colorbox is about to open'); },
        onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
        onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
        onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
        onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
    });

    $('.non-retina').colorbox({rel:'group5', transition:'none'})
    $('.retina').colorbox({rel:'group5', transition:'none', retinaImage:true, retinaUrl:true});
                
    //Example of preserving a JavaScript event for inline calls.
    $("#click").click(function(){ 
        $('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
        return false;
    });
});

