let permanentEffect;
let firstTimePageLoad = true;
const button = document.querySelector('.gridSize');
button.addEventListener('click',initializeGrid);

function setGridSize(gridSize = 16)
{
    const mainDiv = document.querySelector('#parent-container');
    const divSizeHeight = (mainDiv.offsetHeight-2)/(gridSize);
    const divSizeWidth = (mainDiv.offsetWidth-2)/gridSize;
    for(let outerDiv = 0; outerDiv < gridSize; outerDiv++){
        const div = document.createElement('div');
        div.setAttribute('class','outerDiv')
        for(let innerDiv = 0; innerDiv < gridSize; innerDiv++){
            const div2 = document.createElement('div');
            div2.setAttribute('class','innerDiv');
            div2.style.width = divSizeWidth + 'px';
            div2.style.height = divSizeHeight + 'px';
            div.appendChild(div2);
        }
        mainDiv.appendChild(div);
    }
    permanentEffect = document.querySelectorAll('.innerDiv');
}

function removePreviousGrid()
{
    document.querySelectorAll('.outerDiv').forEach((element)=>element.remove());
}


function getUserInput(){
    let gridSize = +prompt("Enter Size");
    let promptTracker = 0;
    while(gridSize === 0 || gridSize > 50){
        if(promptTracker > 1){
            alert("Setting Grid Size to 16");
            gridSize = 16;
            break;
        }
        gridSize = +prompt("Cannot Exceed 50 and Cannot be Empty or 0");
        promptTracker++;
    }
    return gridSize;
}


function hoverEffectPermanent(element){
    element.target.classList.add('innerDiv2');
}



function initializeGrid(){
    removePreviousGrid();
    (firstTimePageLoad)? setGridSize():setGridSize(getUserInput());
    firstTimePageLoad = false;
    permanentEffect.forEach((element)=> element.addEventListener('mouseover',hoverEffectPermanent));
}

initializeGrid();