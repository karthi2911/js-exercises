const card = document.getElementById('board');
const colorBoard = document.querySelector('.board');
const colorCards = document.querySelectorAll('.board li');
let picks = [];
console.log(picks);
const randomColors = ['Red', 'Green', 'cyan', 'plum', 'saddlebrown', 'teal', 'orange', 'tan', 'Red', 'Green', 'cyan', 'plum', 'saddlebrown', 'teal', 'orange', 'tan'];
const curIndex = Array.prototype.slice.call( document.getElementById('board').children );
let count = 0;

const displayCard = (e) => {
    const stepsCount = document.getElementById('steps');
    count++;
    stepsCount.innerHTML = 'Steps: '+ count;
    //console.log(count);
    //console.log(picks);
    const curLi = curIndex.indexOf(e.target);
    e.target.setAttribute("style", 'background-color:' + randomColors[curLi]);
    e.target.setAttribute("open", true);
    e.target.setAttribute('freeze', false);

    let a = [];
    for(let i=0; i<colorCards.length; i++) {
        if(colorCards[i].getAttribute('open') == 'true' && colorCards[i].getAttribute('freeze') == 'false'){
            a.push(i);
        }
    }
    //console.log(a);

    if(a.length === 2) {
        console.log(colorCards[a[1]].style.backgroundColor);
        //console.log(colorCards[0]);
        if(picks[0] === picks[1]) {
            colorCards[a[0]].style.backgroundColor = picks[a[0]];
            colorCards[a[1]].style.backgroundColor = picks[a[1]];
            colorCards[a[0]].setAttribute('freeze', true);
            colorCards[a[1]].setAttribute('freeze', true);
            colorCards[a[0]].style.pointerEvents = "none";
            colorCards[a[1]].style.pointerEvents = "none";
        }
        else {
            // setTimeout(function(){
                colorCards[a[0]].style.backgroundColor = '';
                colorCards[a[1]].style.backgroundColor = '';
                //alert('Hello');
            // }, 1000);
            colorCards[a[0]].setAttribute('open', false);
            colorCards[a[1]].setAttribute('open', false);
        }
        a = [];
    }
    
    //console.log(a);
}
card.addEventListener("click", displayCard);

const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5)
    picks.push(array);
    //console.log(picks);
    //return picks;
}

const init = () => {
  let x = shuffle(randomColors);
}
init();