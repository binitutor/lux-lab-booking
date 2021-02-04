// const arrayOfWeekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// const monthNames = ["January", "February", "March", "April", "May", "June",
//         "July", "August", "September", "October", "November", "December"];


// var dateObj = new Date();
// var weekdayNumber = dateObj.getDay();
// var weekdayName = arrayOfWeekdays[weekdayNumber]

// const month = monthNames[dateObj.getMonth()];
// const day = String(dateObj.getDate()).padStart(2, '0');
// const year = dateObj.getFullYear();
// const output = month  + '\n'+ day  + ', ' + year;

// document.write('<h2>' + weekdayName + '</h2><h6>' + output + '</h6>');




const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];



  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();
  // document.querySelector(".date p").innerHTML = date.setDate(2);

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

document.querySelector(".days").addEventListener("click", (e) => {
  // with days selection, pass the date, month & year

  // capture day selection


  // pass it to top title

  // const selectedDay = e.target.textContent;
  
  // set the month
  // date.setMonth(date.getMonth() + 1);

  // set the day
  date.setDate(e.target);


  renderCalendar();



	// Remove book from UI
	// BookingUI.deleteBook(e.target);
	

	// document.querySelector(".date p").innerHTML = new Date().toDateString();

	// date and time of selected row
	// const bookDate = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
	// const bookTime = e.target.parentElement.previousElementSibling.textContent;
	
	// Remove book from local storage
	// BookingLocalStorage.removeBookingsFromStorage(bookDate, bookTime);




});

renderCalendar();
























