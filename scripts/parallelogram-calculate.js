//calculate parallelogram area
function calculateParallelogramArea(){
    //get parallelogram base value
    const parallelogramBaseInput=document.getElementById('parallelogram-base');
    const parallelogramBaseText=parallelogramBaseInput.value;
    const base=parseFloat(parallelogramBaseText);
    console.log(base);
    
    //get parallelogram height value

    const parallelogramHeightInput=document.getElementById('parallelogram-height');
     const parallelogramHeightText=parallelogramHeightInput.value;
     const height=parseFloat(parallelogramHeightText);
     console.log(height);

     //calculate Parallelogram Area
     const area=base*height;
     console.log('Area of the rectangle is',area);
    
     //display parallelogram area
     const rectangleAreaSpan = document.getElementById('parallelogram-area');
     rectangleAreaSpan.innerText=area;

}