const column = document.querySelectorAll('.classifiedColumn');
const tiles = document.getElementById('pocket');

tiles.addEventListener('click', function(e) {
    let targetText = e.target.nodeName;
    let list = e.target.innerText[0];
    if(targetText === 'LI') {
        if(list === 'A'){
            column[0].appendChild(e.target);
        }
        if(list === 'B'){
            column[1].appendChild(e.target);
        }
        if(list === 'C'){
            column[2].appendChild(e.target);
        }
        for(let i=0; i < column.length; i++){
            let list = column[i];
            Array.from(list.querySelectorAll("li:not(:first-child)"))
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(li => list.appendChild(li));
        }
        let pocketLength = document.querySelectorAll('.pocket ul li')
        if(pocketLength.length === 0){
            tiles.remove();
        }
    }
})