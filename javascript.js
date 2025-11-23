let sketchPad = document.querySelector('.sketch-pad');

let counter = 0;
while(counter != 256) {
    let newSquare = document.createElement('div');
    newSquare.classList.add('sketch-square');
    sketchPad.appendChild(newSquare);
    counter++
}

sketchPad.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'rgba(211, 211, 211, 1)';
});

sketchPad.addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor = 'rgba(211, 211, 211, 0.3)';
});
