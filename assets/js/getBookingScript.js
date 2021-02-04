$(document).ready(function() {

            var bookingViewModel = function() {
            var self = this;
            self.bookDate = ko.observable("");
            self.bookTime = ko.observable("");
            self.bookId = ko.observable("");
            self.searchKey = ko.observable("");

            self.getBookingDetails = function () {              
                $.ajax({
                    url: 'YOUR GET API URL HERE',
                    cache: false,
                    type: 'GET',                   
                    data: { "bookID": self.searchKey() },
                    success: function (data) {              
                        self.bookDate(data.Item.BookDate)
                        self.bookTime(data.Item.BookTate),
                        self.bookId(data.Item.BookID)
                    }
                });
            }
        }

            var viewModel = new bookingViewModel();
            ko.applyBindings(viewModel);
         });