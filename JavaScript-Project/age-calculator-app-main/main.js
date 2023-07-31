function calculateAge() {
  // Get the input values (years, months, and days) from the user
  const years = parseInt(document.getElementById("year").value);
  const months = parseInt(document.getElementById("month").value);
  const days = parseInt(document.getElementById("day").value);
  const errMon=document.getElementsByClassName("error-month");
  
  // Get the current date
  const currentDate = new Date();

  // Create a Date object with the user's birthdate
  const birthdate = new Date(years,months,days);

  // Calculate the difference in milliseconds between the current date and the birthdate
  const ageInMillis = currentDate - birthdate;

  // Convert the age from milliseconds to years, months, and days
  const ageInYears = ageInMillis / (1000 * 60 * 60 * 24 * 365.25);
  const ageYears = Math.floor(ageInYears);
  const ageMonths = Math.floor((ageInYears - ageYears) * 12);
  const ageDays = Math.floor((ageInYears * 365.25 - ageYears * 365.25 - ageMonths * 30.44));

  // Display the calculated age
  const resultYear = document.getElementById("re-years");
  const resultMonth = document.getElementById("re-months");
  const resultDay = document.getElementById("re-days");
  resultYear.textContent= ageYears+" ";
  resultMonth.textContent= ageMonths+" ";
  resultDay.textContent = ageDays+" ";
  console.log((ageYears));
}
