// 1. Get elements:
const header = document.querySelector('h1')
const leftImg = document.querySelector('.img1');
const rightImg = document.querySelector('.img2');

// Create an object diceGame with two keys: p1 and p2 that are set on 0.
const diceGame = {
    p1: 0,
    p2: 0
}

// 3. Create a function, that will return a variable n containing a random number from 1 to 6 :
const randomNum = () => {
    let n = Math.floor((Math.random() * 6) + 1);
    return n
}

// 4. Logic
const compare = () => {
    if(diceGame.p1 > diceGame.p2) {
        header.textContent = "🚩 Player 1 Wins!"
    } else if (diceGame.p1 < diceGame.p2) {
        header.textContent = "Player 2 Wins! 🚩"
    } else if (diceGame.p1 === diceGame.p2) {
        header.textContent = "🚩 DRAW! 🚩"
    }
}

// 5 Add event listener on dices:
leftImg.addEventListener('click', () => {
    diceGame.p1 = randomNum()
    let leftImgSrc = `images/dice${diceGame.p1}.png`;
    leftImg.setAttribute('src', leftImgSrc)
    compare()
})
rightImg.addEventListener('click', () => {
    diceGame.p2 = randomNum()
    let rightImgSrc = `images/dice${diceGame.p2}.png`;
    rightImg.setAttribute('src', rightImgSrc)
    compare()
})