//calculate rectangle area
function calculateRectangleArea(){
    //get triangle base value
    const rectangleBaseInput=document.getElementById('rectangle-base');
    const rectangleBaseText=rectangleBaseInput.value;
    const base=parseFloat(rectangleBaseText);
    console.log(base);
    
    //get triangle height value

    const rectangleHeightInput=document.getElementById('rectangle-height');
     const rectangleHeightText=rectangleHeightInput.value;
     const height=parseFloat(rectangleHeightText);
     console.log(height);

     //calculate Triangle Area
     const area=base*height;
     console.log('Area of the rectangle is',area);
    
     //display Triangle area
     const rectangleAreaSpan = document.getElementById('rectangle-area');
     rectangleAreaSpan.innerText=area;

}