let sketchPad = document.querySelector('.sketch-pad');

let counter = 0;
while(counter != 256) {
    let newSquare = document.createElement('div');
    newSquare.classList.add('sketch-square');
    sketchPad.appendChild(newSquare);
    counter++
}
