
$(document).ready(function() {
	$(".plus_button").toggle(function() {	
		$(".rectangle").show("slow");
	}, function() {
		$(".rectangle").hide("slow");
	});
});
