let permanentEffect;
let firstTimePageLoad = true;
let mouseDown = false;
const button = document.querySelector('.gridSize');
button.addEventListener('click',initializeGrid);
document.addEventListener('mousedown',()=> mouseDown = true);
document.addEventListener('mouseup',()=>mouseDown = false);


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
        if(promptTracker > 0){
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
    if(mouseDown === false) return;
    console.log(mouseDown);
    element.target.classList.add('innerDiv2');
}



function initializeGrid(){
    removePreviousGrid();
    (firstTimePageLoad)? setGridSize():setGridSize(getUserInput());
    firstTimePageLoad = false;
    permanentEffect.forEach((element)=> element.addEventListener('mouseover',hoverEffectPermanent));
    permanentEffect.forEach((element)=>element.addEventListener('click',(element)=>element.target.classList.remove('innerDiv2')))
}

initializeGrid();