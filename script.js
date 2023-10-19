var timer=4;
var score=0;
var val=0;

function makeBubble(){
    var bubbler = "";
    
    for(var i = 1; i <= 198; i++) {
    var rn = Math.floor(Math.random()*10);
    bubbler += `<div class="bubble">${rn}</div>`;
}
document.querySelector(".pbottom").innerHTML = bubbler;
}

function hit(){
    val=Math.floor(Math.random()*10);
    document.querySelector("#hitval").innerHTML = val;
}

function runtimer(){
    setInterval(function(){
        if(timer>0){
            timer--;
        document.querySelector("#timerval").innerHTML=timer;}
        else{
            clearInterval(timer);
            document.querySelector(".pbottom").innerHTML="<h1>Game Over</h1>";
        }
},1000);
}

function increaseScore(){
    score=score+10;
    document.querySelector("#scoreval").innerHTML=score;
}


makeBubble();

runtimer();


document.querySelector(".pbottom").addEventListener("click",function(dets){
    var clickednum=(Number(dets.target.textContent));
    if (clickednum===val){
        increaseScore();
        makeBubble();
        hit();
    }
});