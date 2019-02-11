
function Employee(fn, ln, branch, pos) {
    this.firstname = fn;
    this.lastname = ln;
    this.branch = branch;
    this.position = pos;

    this.name = function() {
	return this.firstname + ' ' + lastname;
    };

}

function MenuItem (item, kCal, gluten, lactose){
    this.item = item;
    this.kCal = kCal;
    this.gluten = gluten;
    this.lactose = lactose;

    this.name = function() {
	return this.item + ' ' + this.kCal;
    }
    
}

var burger = new MenuItem("Fat Burger", "1455kCal",true,false);

var emp = new Employee('Maike', 'Paetzel', 'Uppsala', 'PhD Student');

//function setMyID() {
//    document.getElementById("myID").innerHTML = "Välj en burgare";
//}

function crtB(){
var btn = document.createElement('button');

// Use the createTextNode() method to create text content
var txt = document.createTextNode('Click Here');

// Use the appendChild() method of a node object to add one node inside another
btn.appendChild(txt);

// We can set an attribute to the element node using the setAttribute() method
btn.setAttribute('class', 'aButtonClass');

// We can also read attributes using the getAttribute() mehtod
console.log( btn.getAttribute('class') ); // Output: aButtonClass

// In order to display this newly created element, we have to append it to an existing 
// node in the document. In this case we add it directly to the body.
document.body.appendChild(btn);
}
