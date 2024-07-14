
function calcPerimeter(length, width) {
    const perimeter = 2 * (length + width);
    console.log(`The perimeter is ${perimeter}`);
  }
  
 
  function calcArea(length, width) {
    const area = length * width;
    console.log(`The area is ${area}`);
  }
  
  
  calcPerimeter(5, 10); // For a rectangle with length 5 and width 10
  calcArea(5, 10);      // For a rectangle with length 5 and width 10
  
  calcPerimeter(8, 12); // For a rectangle with length 8 and width 12
  calcArea(8, 12);      // For a rectangle with length 8 and width 12
  
  calcPerimeter(15, 20); // For a rectangle with length 15 and width 20
  calcArea(15, 20);      // For a rectangle with length 15 and width 20
  