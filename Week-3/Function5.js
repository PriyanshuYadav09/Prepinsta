
function metersToFeet(meters) {
    const feet = meters * 3.281;
    console.log(`${meters} meters is equal to ${feet.toFixed(2)} feet.`);
  }
  
  
  function feetToMeters(feet) {
    const meters = feet * 0.3048;
    console.log(`${feet} feet is equal to ${meters.toFixed(2)} meters.`);
  }
  
  
  metersToFeet(10); 
  metersToFeet(25); 
  metersToFeet(50); 
  
  feetToMeters(32.81); 
  feetToMeters(82.02); 
  feetToMeters(164.04); 
  