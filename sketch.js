const maxWidth = 960;
let div = [];
let columns = 16, rows = 16;
let rgb1, rgb2, rgb3;


console.log(rgb1, rgb2, rgb3);


let container = document.querySelector(".container");

//set container border
container.setAttribute("style", `width: ${maxWidth}px`);

let boxWidth = (maxWidth/columns).toFixed(0);
    for(let i = 1; i <= rows*columns; i++){
        div[i] = document.createElement("div");
        div[i].setAttribute("style", `height: ${boxWidth}px; width: ${boxWidth}px; border: 1px solid red`);
        container.appendChild(div[i]);
        
        div[i].addEventListener("mouseover", (e) => {
            div[i].style.background = `rgb(${+Math.floor(Math.random()*284)},${+Math.floor(Math.random()*284)},${+Math.floor(Math.random()*284)})`;
            // div[i].style.background = "yellow";
        });
    }


//prompting row and column values
let grids = document.querySelector(".grids");

grids.addEventListener("click", (e) => {

    while(container.lastChild){
        container.removeChild(container.lastChild);
    }

    columns = +prompt("Enter number of columns ");
    if(!(columns > 0 && columns <= 100)){
        alert("Please enter a number between 1 to 100");
        columns = +prompt("Enter number of columns ");
    }

    rows = +prompt("Enter number of rows: ");
    if(!(rows > 0 && rows <= 100)){
        alert("Please enter a number between 1 to 100");
        rows = +prompt("Enter number of rows ");
    }

    boxWidth = (maxWidth/columns).toFixed(0);
    for(let i = 1; i <= rows*columns; i++){
        div[i] = document.createElement("div");
        div[i].setAttribute("style", `height: ${boxWidth}px; width: ${boxWidth}px; border: 1px solid red`);
        container.appendChild(div[i]);
        
        div[i].addEventListener("mouseover", (e) => {
            div[i].style.background = `rgb(${+Math.floor(Math.random()*284)},${+Math.floor(Math.random()*284)},${+Math.floor(Math.random()*284)})`;;
        });
    }
});
