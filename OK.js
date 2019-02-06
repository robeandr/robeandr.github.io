function OK() {
	var email = document.getElementById("mail").value;
	var name = document.getElementById("name").value;
	if (name =="") {
		name = "Anonymous";}
	else{name = name;}
               
	if (email == "") {
		alert("Please put in an email.");}
	else if (email.indexOf('@') <= -1){
		alert("Please put in a valid email.")}
	else if (email.indexOf('.') <= -1){
		alert("Please put in a valid email address.")}
	else{
		alert (name + ", you have signed up for newsletters at: " + email);}
}
