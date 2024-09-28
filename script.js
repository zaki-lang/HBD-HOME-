
function showSurprise(){
    let confettiContainer =  document.getElementById('confetti');
    for (let i = 0; i<100; i++){
        let confettiPiece = document.createElement(`div`);
        confettiPiece.classList.add(`confetti-piece`);
        confettiPiece.style.left = `${Math.random()*100}vw`;
        confettiPiece.style.animationDuration = `${Math.random()* 3+ 2}s`;
        confettiPiece.style.backgroundColor = getRanddomColor();
        confettiContainer.appendChild(confettiPiece);
    }
}

function getRanddomColor(){
    const colors = [`#ff6b6b`, `#ffdd59`, `#32ff7e`, `#18dcff`, `#ff9f43`];
    return colors[Math.floor(Math.random()*colors.length)];
}