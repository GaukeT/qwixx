import ScoreCard from "./ScoreCard.js"

document.addEventListener('click', function handleClick(event) {
    if (event.path[0].localName === 'button') {
        let classList = event.target.classList;
        let clazz = classList.contains('small') ? 'cross' : 'selected';

        if(!classList.contains(clazz)) {
            classList.add(clazz);
        } else {
            classList.remove(clazz);
        }
    }
})

new ScoreCard(document.querySelector(".scorecard"));