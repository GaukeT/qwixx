import Calculator from "./Calculator.js"
import Failure from "./Failure.js"
import ScoreCard from "./ScoreCard.js"

let event = new Event('input');

new Calculator(document.querySelector(".score"));
new Failure(document.querySelector(".score"));
let sc = new ScoreCard(document.querySelector(".scorecard"));

document.addEventListener('click', function handleClick(event) {
    if (event.path[0].localName === 'button') {
        let classList = event.path[0].classList;
        addOrRemove(classList);
        sc.calculate(event, 1);
    }

    if (event.path[0].localName === 'span' 
         && event.path[1].localName === 'button') {
        let classList = event.path[1].classList;
        addOrRemove(classList);
        sc.calculate(event, 2);
    }
})

function addOrRemove(classList) {
    let clazz = 'selected';

    if(!classList.contains(clazz)) {
        classList.add(clazz);
    } else {
        classList.remove(clazz);
    }
}