let scoreStr = localStorage.getItem('Score');
let score;
resetScore(scoreStr);

function resetScore(scoreStr) {
    score = scoreStr ? JSON.parse(scoreStr) : {
        win: 0,
        lost: 0,
        tie: 0,
    }

    // if (scoreStr !== undefined) {
    //     score = JSON.parse(scoreStr)
    // } else {
    //     score = {
    //         win: 0,
    //         lost: 0,
    //         tie: 0,
    //     }
    // }

    score.displayScore = function () {
        return `Score :
    Won : ${score.win}  🏆  
    Lost : ${score.lost}  ❌
    Tie : ${score.tie}  🫱🏼‍🫲🏽`

    };
    showResult();
}

function computerTurn() {
    let randomNumber = Math.random() * 3;
    if (randomNumber > 0 && randomNumber <= 1) {
        return 'Bat';
    } else if (randomNumber > 1 && randomNumber <= 2) {
        return 'Ball';
    } else {
        return 'Stump';
    }
}

function getResult(userMove, computerMove) {
    if (userMove === 'Bat') {
        if (computerMove === 'Ball') {
            score.win++
            return 'User Has Won.';
        } else if (computerMove === 'Bat') {
            score.tie++
            return `It's A Tie.`;
        } else if (computerMove === 'Stump') {
            score.lost++
            return 'Computer Has Won.';
        }
    } else if (userMove === 'Ball') {
        if (computerMove === 'Ball') {
            score.tie++
            return `It's A Tie.`;
        } else if (computerMove === 'Bat') {
            score.lost++
            return 'Computer Has Won.';
        } else if (computerMove === 'Stump') {
            score.win++
            return 'User Has Won';
        }
    } else (userMove === 'Stump')
    if (computerMove === 'Ball') {
        score.lost++
        return 'Computer Has Won.';
    } else if (computerMove === 'Bat') {
        score.win++
        return 'User Has Won';
    } else if (computerMove === 'Stump') {
        score.tie++
        return `It's A Tie.`;
    }
}

function showResult(userMove, computerChoice, resultMsg) {
    localStorage.setItem('Score', JSON.stringify(score));

    document.querySelector('#user-move').innerText =
    userMove ?  `You Have Chooson ${userMove}.` : '';

    document.querySelector('#computer-move').innerText = 
    computerChoice  ? `Computer Choice is ${computerChoice}` : '';

    document.querySelector('#result').innerText =
    resultMsg || '';

    document.querySelector('#score').innerText = score.displayScore();
    // console.log(score);
}