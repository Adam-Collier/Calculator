$( document ).ready(function() {
  var arr = [];
$("button").on("click", function(){
  if($(this).html() === "C"){
    $("h2").html("");
    $("p").html("");
    arr = [];
  }else if($(this).html() === " + " || $(this).html() === " x " || $(this).html() === " - " || $(this).html() === " ÷ "){
    arr.push($("h2").html());
    arr.push($(this).html());
    $("p").append($("h2").html());
    $("p").append($(this).html());
    $("h2").html("");
  }else if($(this).html() === "="){
    arr.push($("h2").html());
    arr = arr.map(function(x){
      return x.trim(" ");
    });
    var a = arr.join("").replace("x", '*').replace("÷", "/");
    arr = [];
    var e = parseFloat(eval(a).toFixed(8));
    $("p").html("");
    $("h2").html(e);
  }
  else{
    $("h2").append($(this).html());
  }
});

});
