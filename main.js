$( document ).ready(function() {
     
 var skillsArray=[]
 $("#template").hide();

 $("#submit").click(function(){

  var image
  var data
  var stars
  var imageTd
  var imageFunc
  
  $("#part1").hide();
  $("#template").show();

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
  var table
  $("table").append(table)

     $.each(skillsArray, function(i,item){
        table = $("<tr></tr>")
       data = $("<td>"+item+"</td>")
            $("tr").append(data)
           
               for (var count = 0; count < starsArray[i] ; count++){
                $("tr").append("<img id='theImg' src='stars.png' width='20px' height='20px'/> ");
                
               }
          })
var glink = $("#gitlink").val();
      $("#github").attr("href",glink);
      var llink = $("#linkedInLink").val();
      $("#linkeIn").attr("href",llink);
      var phone = $("#phonNum").val();
      $("#mobile").attr("href","tel:+phone+");
        var mail = $("#email").val();
      $("#mailto").attr("href","mailto:+mail+");
})

$("#add").click(function(){

  skillsArray.push($("#skills").val());


  $("#sliderVlue").html(0)
  $("#skills").val("")
  $("#myRange").val(0)


     })


})