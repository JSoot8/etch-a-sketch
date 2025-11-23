let sketchPad = document.querySelector('.sketch-pad');

sketchPadGenerate(16);

sketchPad.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'rgba(211, 211, 211, 1)';
});

sketchPad.addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor = 'rgba(211, 211, 211, 0.3)';
});

let resizeBtn = document.querySelector('.resize-button');
resizeBtn.addEventListener('click', () => {
    let sideAmount = prompt('How many squares per side?');
    sketchPadGenerate(parseInt(sideAmount));
});

function sketchPadGenerate (sideSize) {
    let counter = 0;
    while(sketchPad.children.length != 0){
        sketchPad.removeChild(sketchPad.lastChild);
    }

    sketchPad.style.setProperty('--grid-sides', sideSize);

    //square space is calculated by multiplying its side by itself.
    while(counter != sideSize ** 2) {
        let newSquare = document.createElement('div');
        newSquare.classList.add('sketch-square');
        sketchPad.appendChild(newSquare);
        counter++
    }
}

//generate amount of squares COMPLETE
//