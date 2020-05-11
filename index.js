var buttoncolours = ["red", "blue", "green", "yellow"];
var gamepattern= [];
var userpattern= [];
var start = false;
var level = 0;
var k = 0;


$("h1").click(function(){
  k++;
  if(!start){
    $("#at").hide();
    $("#ati").hide();
    $("a").hide();
    $(".h1z").text("Level"+level);
    nextseq();
    start=true;

    if (k >=1){
      lol();
    }
  }
})

function lol(){
$(".btn").click(function(){
  var usercolor = $(this).attr("id");
  userpattern.push(usercolor);
  animate(usercolor);
  playsound(usercolor);

  correction(userpattern.length-1);
})
}


function correction(currentlevel){
  if(gamepattern[currentlevel] === userpattern[currentlevel]){
    if(userpattern.length === gamepattern.length){
      setTimeout(function () {
          nextseq();
        }, 1000);
      }
    }
      else{
        playsound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("GAME OVER :(");
        $("#again").text("your score: "+level);
        $("#again2").text("click to reload").click(function(){
            location.reload(true);
          });
        setTimeout(function(){
          $("body").removeClass("game-over");
        },400);


      }

  }

  function nextseq(){
    userpattern=[];
    level++;
    $("#level-title").text("Level: " +level);
    var random = Math.floor(Math.random()*4);
    gamecolor = buttoncolours[random];
    gamepattern.push(gamecolor);
    playsound(gamecolor);
    animate(gamecolor);
  }


  function animate(currentColor){
    $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
  }
  function playsound(usercolor){
    var audio = new Audio("sounds/" + usercolor + ".mp3");
    audio.play();
  }
