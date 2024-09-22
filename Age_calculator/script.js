const bdayDay = document.querySelector("#day");
const bdayMonth = document.querySelector("#month");
const bdayYear = document.querySelector("#year");
const imgButton = document.querySelector(".img-section");
const yearValue = document.querySelector(".year-value");
const monthValue = document.querySelector(".month-value");
const dayValue = document.querySelector(".day-value");




imgButton.addEventListener("click", () =>{

    let currentDay = new Date();
    let date1 = new Date(bdayYear.value, bdayMonth.value - 1,bdayDay.value);

    let years = currentDay.getFullYear() - date1.getFullYear();
    let months = currentDay.getMonth() - date1.getMonth();
    let days = currentDay.getDay() - date1.getDay();

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12; 
        
    }

    if (days < 0) {
        let previousMonth = new Date(currentDay.getFullYear(), currentDay.getMonth() - 1, date1.getDate());
        days = Math.floor((currentDay - previousMonth) / (1000 * 60 * 60 * 24));
    }
   console.log(days)
   console.log(months)
   console.log(years)

    yearValue.innerText = years;
    monthValue.innerText = months;
    dayValue.innerText = days;
});


