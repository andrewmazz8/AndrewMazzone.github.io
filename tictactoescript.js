
function appear(thisTD) {

if (won) {
  return;
}

if (thisTD.innerHTML==""){
 if (isXTurn){
  thisTD.innerHTML= "x";
  isXTurn=false;
  isOTurn=true;

}
else {
  thisTD.innerHTML= "o";
  isXTurn=true;
  isOTurn=false;
}
checkforwin();
}
}

function checkforwin(){
  if (document.getElementById('box1').innerHTML=="x" && document.getElementById('box2').innerHTML=="x" && document.getElementById('box3').innerHTML=="x")
    {console.log("x won!");
    document.getElementById('xwin').innerHTML="X Won!";
  }

  if (document.getElementById('box1').innerHTML=="x" && document.getElementById('box4').innerHTML=="x" && document.getElementById('box7').innerHTML=="x")
    {console.log("x won!");
    document.getElementById('xwin').innerHTML="X Won!";
  }

  if (document.getElementById('box1').innerHTML=="x" && document.getElementById('box5').innerHTML=="x" && document.getElementById('box9').innerHTML=="x")
    {console.log("x won!");
    document.getElementById('xwin').innerHTML="X Won!";
  }

  if (document.getElementById('box2').innerHTML=="x" && document.getElementById('box5').innerHTML=="x" && document.getElementById('box8').innerHTML=="x")
      {console.log("x won!");
      document.getElementById('xwin').innerHTML="X Won!";
      }

  if (document.getElementById('box3').innerHTML=="x" && document.getElementById('box6').innerHTML=="x" && document.getElementById('box9').innerHTML=="x")
        {console.log("x won!");
        document.getElementById('xwin').innerHTML="X Won!";
      }

  if (document.getElementById('box3').innerHTML=="x" && document.getElementById('box5').innerHTML=="x" && document.getElementById('box7').innerHTML=="x")
        {console.log("x won!");
        document.getElementById('xwin').innerHTML="X Won!";
        }

  if (document.getElementById('box4').innerHTML=="x" && document.getElementById('box5').innerHTML=="x" && document.getElementById('box6').innerHTML=="x")
        {console.log("x won!");
        document.getElementById('xwin').innerHTML="X Won!";
      }

  if (document.getElementById('box7').innerHTML=="x" && document.getElementById('box8').innerHTML=="x" && document.getElementById('box9').innerHTML=="x")
        {console.log("x won!");
        document.getElementById('xwin').innerHTML="X Won!";
      }


        if (document.getElementById('box1').innerHTML=="x" && document.getElementById('box2').innerHTML=="x" && document.getElementById('box3').innerHTML=="x")
          {console.log("x won!");
          document.getElementById('xwin').innerHTML="X Won!";
        }

        if (document.getElementById('box1').innerHTML=="x" && document.getElementById('box4').innerHTML=="x" && document.getElementById('box7').innerHTML=="x")
          {console.log("x won!");
          document.getElementById('xwin').innerHTML="X Won!";
        }

        if (document.getElementById('box1').innerHTML=="x" && document.getElementById('box5').innerHTML=="x" && document.getElementById('box9').innerHTML=="x")
          {console.log("x won!");
          document.getElementById('xwin').innerHTML="X Won!";
        }

        if (document.getElementById('box2').innerHTML=="o" && document.getElementById('box5').innerHTML=="o" && document.getElementById('box8').innerHTML=="o")
            {console.log("o won!");
            document.getElementById('owin').innerHTML="O Won!";
          }

        if (document.getElementById('box3').innerHTML=="o" && document.getElementById('box6').innerHTML=="o" && document.getElementById('box9').innerHTML=="o")
              {console.log("o won!");
              document.getElementById('owin').innerHTML="O Won!";
            }

        if (document.getElementById('box3').innerHTML=="o" && document.getElementById('box5').innerHTML=="o" && document.getElementById('box7').innerHTML=="o")
              {console.log("o won!");
              document.getElementById('owin').innerHTML="O Won!";
            }

        if (document.getElementById('box4').innerHTML=="o" && document.getElementById('box5').innerHTML=="o" && document.getElementById('box6').innerHTML=="o")
              {console.log("o won!");
              document.getElementById('owin').innerHTML="O Won!";
            }

        if (document.getElementById('box7').innerHTML=="o" && document.getElementById('box8').innerHTML=="o" && document.getElementById('box9').innerHTML=="o")
              {console.log("o won!");
              document.getElementById('owin').innerHTML="O Won!";
              }


}

var isXTurn=true;
var isOTurn=true;
var won=false;

function winner() {
  won = true;
}

function reset(){
  var tictactoeboard=document.getElementsByTagName('td');
    for(var i = 0; i<9; i++){
      tictactoeboard[i].innerHTML="";
  }

  isXTurn=true;
  isOturn=true;
  document.getElementById('xwin').innerHTML="";
  document.getElementById('owin').innerHTML="";
}
