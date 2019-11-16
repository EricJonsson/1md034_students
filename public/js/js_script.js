for (items in food){	

    var docBurgerMen = document.getElementById("burgerMenu"); // Get root div for all items

    var name = food[items].name;
    var imgURL = food[items].img;
    var kCal = food[items].kCal;
    var lac = food[items].lactose;
    var glu = food[items].gluten;
    var class_id = food[items].classID; 
    var createItem = document.createElement("DIV");           // Create new div for item

    createItem.id = name;                                     //Set new item div ID
    createItem.setAttribute("class",class_id);                // Set new item div Class
    docBurgerMen.appendChild(createItem);                     // Append newly created Item to root
    document.getElementById(name).innerHTML = name;           //Append Caption

    // Insert IMAGE
    var img = document.createElement("IMG"); 
    img.src = imgURL;
    img.height = 150;
    img.width = 200;
    document.getElementById(name).appendChild(img);           // Append IMAGE

    // Create Details list describing Item
    var unorderedList = document.createElement("UL");
    unorderedList.id = "ul"+name;
    document.getElementById(name).appendChild(unorderedList); // Append description list

    // Fill list with kCal
    var listitem_kCal = document.createElement("LI");
    var kCalNode = document.createTextNode(kCal+"kCal");
    listitem_kCal.appendChild(kCalNode);
    document.getElementById("ul"+name).appendChild(listitem_kCal); // Append list item

    // Fill list with allergens information
    if ( lac || glu ){
	var allergen_li = document.createElement("LI")
	var allergens_text = "Contains:";
	if(lac){
	    allergens_text = allergens_text + " Lactose";
	}
	if(glu){
	    allergens_text = allergens_text + " Gluten";
	}
	var allergens_txt_node = document.createTextNode(allergens_text);
	document.getElementById("ul"+name).appendChild(allergens_txt_node);	
    }

    // Fill with buy checkbox
    var checkb = document.createElement("input");
    var checkb_label = document.createElement("LABEL");
    checkb_label.id = name+"checkb_label";
    
    checkb.id = name + "check";
    checkb.setAttribute("type","checkbox");
    document.getElementById(name).appendChild(checkb);
    document.getElementById(name).appendChild(checkb_label);
    document.getElementById(name+"checkb_label").innerHTML = "Buy";    
}

// Eventlistener: Confirm contacts button
var confButton = document.getElementById("confirmbutton");
confButton.addEventListener("click", confirmOrder);
