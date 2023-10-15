var bubbler = "";

for(var i = 1; i <= 176; i++) {
    var rn = Math.floor(Math.random()*10);
    bubbler += `<div class="bubble">${rn}</div>`;
}
document.querySelector(".pbottom").innerHTML = bubbler;