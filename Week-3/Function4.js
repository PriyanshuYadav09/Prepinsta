function calculateCoffeeSupply(age, cupsPerDay) {
    const maxAge = 80; 
    const yearsLeft = maxAge - age;
    const totalCups = Math.round(yearsLeft * 365 * cupsPerDay);
    console.log(`You will need ${totalCups} cups of coffee to keep you awake until the age of ${maxAge}.`);
  }
  
  
  calculateCoffeeSupply(25, 2.5); // For a person aged 25 drinking 2.5 cups per day
  calculateCoffeeSupply(40, 3);   // For a person aged 40 drinking 3 cups per day
  calculateCoffeeSupply(60, 1.75); // For a person aged 60 drinking 1.75 cups per day
  