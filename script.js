function main(){
    let confirm = document.getElementById('mainresult').innerHTML;
    if (confirm =="You Lost !") {
         alert("Game over! Please restart the game");
    } else{
    let x;
    do {  
     x =Math.floor(Math.random()* 100 /7.6);
    }while(x == 0);

    let currentTT = parseInt(document.getElementById('result').innerHTML);
    let total = currentTT + x;
    document.getElementById('result').innerHTML=total;

    if (total < 21) {
        document.getElementById('mainresult').innerHTML="Generate another card ?"

    } else if (total ==21){
        document.getElementById('mainresult').innerHTML="You have Won!! "
        alert("Congratulations !");
        document.getElementById('btn-res').style.display="block"
    }else if (total >21){
        document.getElementById('mainresult').innerHTML="You Lost ! "
        alert("Lost :(Click restart to Play Again");
        document.getElementById('btn-res').style.display="block"
    }
    var img=document.createElement("img")
    img.src="images/"+ x +".png";
    img.height=300;

    document.body.appendChild(img);
}
  
}
function restart(){
    location.reload();
  }