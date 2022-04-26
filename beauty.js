$(document).ready(function(){
    $("#btn1").click(function(){
      $(".box").animate({height: "300px"});
    });
    $("#btn2").click(function(){
      $(".box").animate({height: "30%"});
    });
  });
  $(document).ready(function(){
    $(".animation2").click(function(){
        $("#img1").toggle();
        $(".animation2").innerHTML = "Click me to show";
    });
});
$(document).ready(function(){
$("#test").delay(1500).animate({text:'The text has now changed!'},500);
});