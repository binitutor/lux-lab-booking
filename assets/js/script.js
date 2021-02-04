class Booking {
	constructor(bookDate, bookTime) {
		this.bookDate = bookDate;
		this.bookTime = bookTime;
	}
}

// user interface
class BookingUI {
	static createBookings() {
		// get already created bookings from storage.
		// in this case, local storage
		const bookings = BookingLocalStorage.getBookingsFromStorage();

		// Api call data currently saved
		// const bookings = ApiCall.getBookingsFromStorage();

		// loop through the item metadata and pass to display
		bookings.forEach( 
			(booking) => BookingUI.displayBookings(booking) 
		);
	}

	// displays booking metadata on table
	static displayBookings(booking) {
		// create a table row for each data passed
		const row = document.createElement('tr');

		// add table data to the row
		// it should be suitable to be in a calendar form!!
		row.innerHTML = (`
			<td>${booking.bookDate}</td>
			<td>${booking.bookTime}</td>
			<td><a class="btn btn-danger btn-sm deleteBook"> X </a></td>
		`);

		// add row to table
		document.querySelector('.bookList').appendChild(row);
	}

	// this method clears the input fields after submission
	static clearField() {
		document.querySelector('#bookDateForm').value = '';
  		document.querySelector('#bookTimeForm').value = '';
	}

	// this method deletes created bookings
	static deleteBook(cell) {
		if(cell.classList.contains('deleteBook')) {
			cell.parentElement.parentElement.remove();
			BookingUI.displayAlerts('Book Removed', 'danger');
		}
	}

	// display notifications and warnings
	static displayAlerts(message, classField) {
		// create a div for messages
		const div = document.createElement('div');

		// add a bootstrap class name to the div
		div.className = `alert alert-${classField}`;

		// add message to the div
		div.appendChild( document.createTextNode(message) );

		// select the location you want this div to appear, container
		const container = document.querySelector('.container');

		// select the form
		const hourTable = document.querySelector('#hourTable');

		// display the div inside the container before the form
		container.insertBefore(div, hourTable);

		// make the message vanish in 3 seconds
		setTimeout( () => document.querySelector('.alert').remove(), 3000);
	}
}

// this class gives access to methods of localStorage
class BookingLocalStorage {

	// this method gets booking currently saved in local storage
	static getBookingsFromStorage(){
		let bookings;
		if(localStorage.getItem('Bookings') === null) {
			bookings = [];
		} else {
			bookings = JSON.parse(localStorage.getItem('Bookings'));
		}

		return bookings;
	}

	// this method adds new booking to local storage
	static addBookingsToStorage(newBookings){
		// calls open bookings currently saved in local storage
		const bookings = BookingLocalStorage.getBookingsFromStorage();

		// adds newly created bookings to the list
		bookings.push(newBookings);

		// saves the updated list to local storage
		localStorage.setItem('Bookings', JSON.stringify(bookings));
	}

	// this method removes data from local storage by matching date and time
	static removeBookingsFromStorage(date, time){
		// calls open bookings currently saved in local storage
		const bookings = BookingLocalStorage.getBookingsFromStorage();

		bookings.forEach( (booking, index) => {
			if(booking.bookDate === date && booking.bookTime === time) {
				bookings.splice(index, 1);
			}
		});

		localStorage.setItem('Bookings', JSON.stringify(bookings));
	}
}


// EVENT: on page load calls createBookings method
document.addEventListener('DOMContentLoaded', BookingUI.createBookings);


// EVENT: user adds new Books
document.querySelector('#bookingCreationForm').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const bookDate = document.querySelector('#bookDateForm').value;
  const bookTime = document.querySelector('#bookTimeForm').value;
  
  // check if the fields are empty or not
  if(bookDate === '' || bookTime === '')
  {
  	// display alert
  	// message, className, container, beforeEl
  	BookingUI.displayAlerts('Please fill in all fields', 'danger');
  }
  else {
  	// Instatiate book object
  	const book = new Booking(bookDate, bookTime);

  	// add bookings to UI
  	BookingUI.displayBookings(book);

	// add bookings to local storage
	BookingLocalStorage.addBookingsToStorage(book);

	// display alert for successfully added book
  	BookingUI.displayAlerts('Book Added', 'success');

  	// calls the method to Clear the fields
  	BookingUI.clearField();
  }
});



// EVENT: delete a book from the list
document.querySelector('#hourTable').addEventListener('click', (e) => {
	// Remove book from UI
	BookingUI.deleteBook(e.target);
	
	// date and time of selected row
	const bookDate = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
	const bookTime = e.target.parentElement.previousElementSibling.textContent;
	
	// Remove book from local storage
	BookingLocalStorage.removeBookingsFromStorage(bookDate, bookTime);
});



















