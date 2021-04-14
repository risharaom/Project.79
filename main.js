function showmenu(){
    document.getElementById("1").style.display="inline-block";
    document.getElementById("2").style.display="inline-block";
    document.getElementById("3").style.display="inline-block";
    document.getElementById("4").style.display="inline-block";
    document.getElementById("5").style.display="inline-block";
}
function submit(){
    var inputVal = document.getElementById("order").value;
    console.log(inputVal);
}
function addflav(){
  document.getElementById("Mango").style.display="inline-block";
  document.getElementById("Lemon").style.display="inline-block";
  document.getElementById("Sorbet").style.display="inline-block";

}
function clickme1(){
    console.log("Mango")
    document.getElementById("Mango").style.display="none";
    document.getElementById("Lemon").style.display="none";
    document.getElementById("Sorbet").style.display="none";
  }
  function clickme2(){
    console.log("Lemon")
    document.getElementById("Mango").style.display="none";
    document.getElementById("Lemon").style.display="none";
    document.getElementById("Sorbet").style.display="none";
  }
  function clickme3(){
    console.log("Sorbet")
    document.getElementById("Mango").style.display="none";
    document.getElementById("Lemon").style.display="none";
    document.getElementById("Sorbet").style.display="none";
  }