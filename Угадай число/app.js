
class guessNumApp {
    secretNum = Math.ceil(Math.random() * 10);
    tries = 0;
    win = false

    winMessage() {
        return alert('Вы выйграли,игра окончена,перезагрузие страницу ')
    }

    lostMessage() {
        return alert('Вы проиграли,игра окончена,перезагрузие страницу ')
    }
    guessNum(num){
        if (num === this.secretNum) {
            if (this.tries >= 5) return this.lostMessage()
            if (this.win) return this.winMessage()
            this.win = true
            return this.winMessage()
        } else {
            if (this.win) return this.winMessage()
            this.tries++
            this. tries >= 5
                ? this.lostMessage()
                : alert('Неверно')


        }
    }
}
const guessNumAppEx = new guessNumApp()




// let secretNum = Math.ceil(Math.random() * 10);
// // let secretNum = 5;
// let tries = 0;
// let win = false
//
// const winMessage = () => {
//     return alert('Вы выйграли,игра окончена,перезагрузие страницу ')
// }
// const lostMessage = () => {
//     return alert('Вы проиграли,игра окончена,перезагрузие страницу ')
// }
//
// function guessNum(num) {
//
//     if (num === secretNum) {
//         if (tries >= 5) return lostMessage()
//         if (win) return winMessage()
//         win = true
//         return winMessage()
//     } else {
//         if (win) return winMessage()
//         tries++
//         tries >= 5
//             ? lostMessage()
//             : alert('Неверно')
//
//
//     }
// }


