function calculatePetAge(petAge, conversionRate, petType) {
    const petYears = petAge * conversionRate;
    console.log(`Your ${petType} is ${petYears} years old in ${petType} years!`);
  }
  
 
  calculatePetAge(3, 7, "cat"); // For a cat
  calculatePetAge(2, 5, "dog"); // For a dog
  calculatePetAge(4, 4, "rabbit"); // For a rabbit
  