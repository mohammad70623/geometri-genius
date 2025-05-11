//calculate rectangle area
function calculateRectangleArea(){
    //get triangle base value
    const rectangleBaseInput=document.getElementById('rectangle-base');
    const rectangleBaseText=rectangleBaseInput.value;
    const length=parseFloat(rectangleBaseText);
    console.log(length);
    
    //get triangle height value

    const rectangleHeightInput=document.getElementById('rectangle-height');
     const rectangleHeightText=rectangleHeightInput.value;
     const weight=parseFloat(rectangleHeightText);
     console.log(weight);

     //calculate Triangle Area
     const area=length*weight;
     console.log('Area of the rectangle is',area);
    
     //display Triangle area
     const rectangleAreaSpan = document.getElementById('rectangle-area');
     rectangleAreaSpan.innerText=area;

}