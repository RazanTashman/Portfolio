$( document ).ready(function() {
     // var Range = $("#myRange").val();
     //      var MyRage = $("<p>"+Range+"</p>");
     //      $("#myRange").append(MyRage);
     $("#part2").hide();
     $("#submit").click(function(){
     	$("#part1").hide();
     	$("#part2").show();
     	var fname = $("#fname").val();
     	var name = $("<h1>"+fname+"</h1>");
     	$("#text").append(name);
        var field = $("#position").val();
     	var position = $("<h3>"+field+"</h3>");
     	$("#text").append(position);
     	var about = $("#about").val();
     	var desc = $("<pre>"+about+"</pre>");
     	 desc.attr("id","experience");
     	$("#divabout").append(desc);
     })
})