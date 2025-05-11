function calculateRhombusArea(){
    const d1=getInputValueById('rhombus-diagonal1');
    const d2=getInputValueById('rhombus-diagonal2');
    const area=0.5*(d1*d2);
    console.log('Area of the rhombus is',area);
    setInnerTextById('rhombus-area',area);
}
function getInputValueById(id){
    const inputField = document.getElementById(id);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setInnerTextById(id, area){
    const element = document.getElementById(id);
    element.innerText = area;
}
