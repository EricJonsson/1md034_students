var vm = new Vue({
    el: '#subWrapper',
    data: {
        message: 'Submit order!'
    },
    methods: {
	confOrd: function() {
	    // Load contact information
	    var fname = document.getElementById("Fullname").value;
	    var email = document.getElementById("email").value;
	    // Create list of purchased items
	    var purchase = "Order placed: ";
	    for(items in food){
		var name = food[items].name;
		var checkb = document.getElementById(name+"check").checked;
		if ( checkb ){
		    purchase = purchase + name + " , ";
		    local_order["orderItems"].push(name);
		}
	    }
	    // Display reciept
	    alert(purchase+"\n\n"+
		  "Customer: "+fname+"\n"+
		  "Contact: "+email+"\n"+
		  "\n\nEnjoy");

	    local_order["name"] = fname;
	    local_order["email"] = email;

	    socket.emit("addOrder", local_order);
	}
    }
})
