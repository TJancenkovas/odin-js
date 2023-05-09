


//Creating the 16x16 grid using a for  loop
function createGrid(x,y) {
    //Createsa  div grid of x by y
    //Get grid conainer div
    let gridContainer = document.querySelector('.grid-container');
    //Clear grid container 
    gridContainer.innerHTML = '';
    for (let i = 0; i < x; i++) {
        let divContainer = document.createElement(`div`);
        divContainer.classList.add(`grid-container-vertical`);

        for (let j = 0; j < y; j++) {
                let div = document.createElement(`div`);
                div.classList.add(`grid-element`);

                div.addEventListener('mouseover' , changeColor)

                divContainer.appendChild(div);

                
        }


    gridContainer.appendChild(divContainer);

    }
}


function changeColor(e) {
    e.target.style.backgroundColor = getRandColor();
}

function popupGridSize() {
    let size = prompt(`Size of grid:`);
    createGrid(size,size);
}
    
function getRandColor() {
    var colorHex = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
    return colorHex;
}
    