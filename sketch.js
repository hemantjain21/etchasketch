const maxWidth = 960;
let div = [];
let columns = 16, rows = 16;

let container = document.querySelector(".container");

container.setAttribute("style", `width: ${maxWidth}px`);

let boxWidth = (maxWidth / columns).toFixed(0);

//Creating default grid of 16*16
for (let i = 1; i <= rows * columns; i++) {
    div[i] = document.createElement("div");
    div[i].setAttribute("style", `height: ${boxWidth}px; width: ${boxWidth}px; border: 1px solid red`);
    container.appendChild(div[i]);

    //Function to increase opacity from 0.1 to 1 on each grid hover 
    let j = 0;
    function darken() {
        if (j < 100) {
            j = j + 10;
            div[i].style.opacity = `${j}%`;
        }
    }

    //Creating mouse hover action on each grid for the defalt grid of 16*16
    div[i].addEventListener("mouseover", (e) => {
        div[i].style.background = `rgb(${+Math.floor(Math.random() * 284)},${+Math.floor(Math.random() * 284)},${+Math.floor(Math.random() * 284)})`;

        darken();
    });

}

//Create custom grid using user input values
let grids = document.querySelector(".grids");

grids.addEventListener("click", (e) => {

    //Removing previous grid layout
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }

    //Prompt user input value for number of columns
    columns = +prompt("Enter number of columns ");
    if (!(columns > 0 && columns <= 100)) {
        alert("Please enter a number between 1 to 100");
        columns = +prompt("Enter number of columns ");
    }

    //Prompt user input value for number of rows
    rows = +prompt("Enter number of rows: ");
    if (!(rows > 0 && rows <= 100)) {
        alert("Please enter a number between 1 to 100");
        rows = +prompt("Enter number of rows ");
    }

    //Create grid based on user values
    boxWidth = (maxWidth / columns).toFixed(0);
    for (let i = 1; i <= rows * columns; i++) {
        div[i] = document.createElement("div");
        div[i].setAttribute("style", `height: ${boxWidth}px; width: ${boxWidth}px; border: 1px solid red`);
        container.appendChild(div[i]);

    //Opacity function to increase opacity from 0.1 to 1
        let j = 0;
        function darken() {
            if (j < 100) {
                j = j + 10;
                div[i].style.opacity = `${j}%`;
            }
        }

    //Background color change on each hover
        div[i].addEventListener("mouseover", (e) => {
            div[i].style.background = `rgb(${+Math.floor(Math.random() * 284)},${+Math.floor(Math.random() * 284)},${+Math.floor(Math.random() * 284)})`;

            darken();
        });
    }
});
