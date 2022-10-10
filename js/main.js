import Calculator from "./Calculator.js"
import Failure from "./Failure.js"
import ScoreCard from "./ScoreCard.js"

document.addEventListener('click', function handleClick(event) {
    if (event.path[0].localName === 'button') {
        let classList = event.target.classList;
        let clazz = 'selected';

        if(!classList.contains(clazz)) {
            classList.add(clazz);
        } else {
            classList.remove(clazz);
        }
    }
})

new Calculator(document.querySelector(".score"));
new Failure(document.querySelector(".score"));

new ScoreCard(document.querySelector(".scorecard"));