// mouseXPosition
let mouseXStartPoint = 300;
let mouseXEndPoint = window.innerWidth - 300;
let currentXPosition = 0;
let fracXvalue = 0;

//mouseYPositiom
let mouseYEndPoint = window.innerHeight;
let currentYPosition = 0;
let fracYValue = 0;

let mouseXRange = mouseXEndPoint - mouseXStartPoint;

const mouseMove = (event) => {
    //console.log(`XValue = ${event.clientX} & YValue = ${event.clientY}`);
    currentXPosition = event.clientX - mouseXStartPoint;
    fracXValue = currentXPosition / mouseXRange;
    console.log(fracXvalue);
    console.log("X = " + fracXValue);

    currentYPosition = event.clientY;
    fracYValue = currentYPosition / mouseXEndPoint;
    console.log(fracYValue);
    console.log("Y = " + fracYValue);
}

window.addEventListener("mousemove", mouseMove);