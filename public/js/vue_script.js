var submitVM = new Vue({
    el: '#subWrapper',
    data: {
        message : 'Submit order!',
	name: null,
	email: null,
	orderData: null
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
	    this.message = "New order placed!";
	    this.name = fname;
	    this.email = email;
	    this.orderData = purchase;
	    local_order["name"] = fname;
	    local_order["email"] = email;

	    socket.emit("addOrder", local_order);
	}
    }

})

var submitVM = new Vue({
    el: '#burgerMenu',
    data: {
	foodItems: food
    },
    methods: {
    }
})
