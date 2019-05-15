//Color matching game
let card = document.getElementById('board');
let randomColors = ['Red', 'Green', 'cyan', 'plum', 'saddlebrown', 'teal', 'orange', 'tan' ];

const displayCard = (e) => {
    console.log(e.target);
    const setColors = randomColors[Math.floor(Math.random()*randomColors.length)];
    e.target.style.backgroundColor = setColors;
}
// loop to add event listeners to each card
for (let i = 0; i < randomColors.length; i++){
    card.addEventListener("click", displayCard);
};
