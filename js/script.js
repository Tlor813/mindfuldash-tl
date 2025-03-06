// website loaded?
console.log("👍 Okay");


// Days Until an Event


// Streak of Days


// Age of Person, Place, or Thing
// Unit Test
const birthDate = "2005-05-19"; // YYYY-MM-DD format
// const birthDateOfSwoop = "September 29, 1973"; // Month DD, YYYY
// const birthDateOfSwoop = "09/09/1973"; // MM/DD/YYYY
const ageOfPerson = calculateAgeOf( birthDate );
console.log( ageOfPerson );

// Unit test
// Get HTML element
const elemAgeOfPerson = document.querySelector('.ageOfPerson');

// Set to HTML element
elemAgeOfPerson.textContent = ageOfPerson;
elemAgeOfPerson.setAttribute("datetime", ageOfPerson );

//Graduation Date
const eventDate = "2025-06-13";
const gradDays = getDaysUntilEvent( eventDate );
console.log( gradDays );

const elemDaysUntilGrad = document.querySelector('.daysUntilEvent');
elemDaysUntilGrad.textContent = gradDays;
elemDaysUntilGrad.setAttribute("datetime", gradDays );


const startDate = "2005-05-19";
const streakOfMeditation = getDayStreak(startDate);
console.log( streakOfMeditation );

// Get HTML element
const elemMeditationStreak = document.querySelector('.streakOfDays');
// Set to HTML element
elemMeditationStreak.textContent = streakOfMeditation;
elemMeditationStreak.setAttribute("datetime", streakOfMeditation );