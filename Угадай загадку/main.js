const riddle = {
    question: 'Висит груша нельзя скушать',
    correctAnswer: 'лампочка',
    hints: ['это несъедобное', 'это не фрукт'],
    tries: 3,
}

class Riddle {
    numberTries = 0
    result = document.getElementById('result')
    input = document.getElementById('input');

    constructor(riddle) {
        this.question = riddle.question
        this.correctAnswer = riddle.correctAnswer
        this.hints = riddle.hints
        this.tries = riddle.tries

        this.riddleOnload()
    }

    riddleOnload() {
        document.getElementById('riddle').innerText = this.question;
    }
    gameOver () {
            this.result.style.color = 'red'
            this.result.innerText = 'Игра окончена:('
    }
    checkAnswer(guessedAnswer) {
        this.input.value = ''
        if (guessedAnswer.toLowerCase() === this.correctAnswer.toLowerCase()) {
            this.numberTries++
            this.result.style.color = 'green'
            this.result.innerText = 'Правильный ответ!'
        } else {
            this.numberTries++
            if(this.numberTries === 1) {
                this.result.innerText = 'Неправильный ответ, Подсказка:'+this.hints[0]
            }else if (this.numberTries === 2){
                this.result.innerText = 'Неправильный ответ, Подсказка:'+this.hints[1]
            }else if (this.numberTries >= this.tries) {
               this.gameOver()
            }
        }
    }

    check() {
        const guessedAnswer = this.input.value;
        if (guessedAnswer) {
            this.checkAnswer(guessedAnswer)
        }
    }
}

const riddleInstance = new Riddle(riddle)
