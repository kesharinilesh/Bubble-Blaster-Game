var timer=60;
var score=0;
function makeBubble(){
var bubbler = "";

for(var i = 1; i <= 198; i++) {
    var rn = Math.floor(Math.random()*10);
    bubbler += `<div class="bubble">${rn}</div>`;
}
document.querySelector(".pbottom").innerHTML = bubbler;
}

function hit(){
    var val=Math.floor(Math.random()*10);
    document.querySelector("#hitval").innerHTML = val;
}

function runtimer(){
    setInterval(function(){
        if(timer>0){
            timer--;
        document.querySelector("#timerval").innerHTML=timer;}
},1000);
}

function increaseScore(){
    score=score+10;
    document.querySelector("#scoreval").innerHTML=score;
}




hit();
increaseScore();
runtimer();
makeBubble();