function tellFortune(numChildren, partnerName, location, jobTitle) {
    const fortune = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`;
    console.log(fortune);
  }
  
  // Call the function three times with different values
  tellFortune(3, "Alia", "Banglore", "Software Engineer");
  tellFortune(2, "Bhavesh", "Pune", "Graphic Designer");
  tellFortune(4, "Charlie", "Kolkata", "Teacher");
  