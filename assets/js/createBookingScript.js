jQuery.support.cors = true;
		
        $(document).ready(function() {

            var bookingDetailsViewModel = function() {
            var self = this;
			
			self.BookID = ko.observable("");
            self.BookDate = ko.observable("");
            self.BookTime = ko.observable("");
            self.SuccessMessage = ko.observable("");
			

            self.SaveBookingDetails = function () {              
                
				var BookingDetail = {
				
				BookID: self.BookID(),
				BookDate: self.BookDate(),
				BookTime: self.BookTime()
				
				}			
				
				
				$.ajax({
					crossDomain: true,
				
                    url: 'YOUR POST URL GOES HERE',
					
					
                    cache: false,
                    type: 'POST', 
                    data: ko.toJSON(BookingDetail),
                    success: function (data) {              
                        self.SuccessMessage(data)
							self.BookID('');
							self.BookDate('');
							self.BookTime('');
							
						
                    }
					}).fail(
					
					
					function(xhr, textStatus, err){
					alert("Error happened "+err);
					
                });
            };
        }

            var viewModel = new bookingDetailsViewModel();
            ko.applyBindings(viewModel);
         });







