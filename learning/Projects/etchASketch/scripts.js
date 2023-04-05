//Creating the 16x16 grid using a for  loop
function createGrid(x,y) {
    //Createsa  div grid of x by y
    for (let i = 0; i < x; i++) {
        let divContainer = document.createElement(`div`);
        divContainer.classList.add(`grid-container-vertical`);

        for (let j = 0; j < y; j++) {
                let div = document.createElement(`div`);
                div.classList.add(`grid-element`);
                divContainer.appendChild(div);
        }
    //Append created div grid to the container grid
    document.querySelector('.grid-container').appendChild(divContainer);
    }
}
    