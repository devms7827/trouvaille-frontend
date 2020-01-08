//Script Version: 1.0
//This is the main script for all the pages behaviour!


//for checking the name on main page
function nameCheck() {
	var full_name=document.form1.fname;
	var phrase = /^[A-Za-z]+$/;
	if(full_name.value.match(phrase))
	{
		console.log("Name Verified!");
		return true;
	}
	else {
		console.log("Full Name contains Non-Alphabets Characters!");
		alert("Full Name should only have Alphabets!");
		full_name.focus();
		return false; 
	}
}

//for checking the mail on main page
function emailCheck() {
	var email=document.form1.user_email;
	var phrase = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(email.value.match(phrase))
	{
		console.log("Email Verified");
		return true;
	}
	else {
		console.log("Your Email Id is not correct!");
		alert("Email ID is Incorrect, please Enter Correct Email-ID!");
		email.focus();
		return false; 
	}
}

//for verifying the radio buttons on home page
function radioCheck() {
	var query=document.getElementsByName("gsize");
	var isChecked = false;
	for(var i = 0; i < query.length; i++) {
		if (query[i].checked)
		{
			isChecked = true;
			console.log("Found one radio that is checked!");
			break;
		}
	}	
	if(isChecked==false)
	{
		console.log("No Radio Button is Selected!");
		alert("Please Select any one from Package or Price Related!");
	}
	console.log("Please select one radio button!");
	return isChecked;
}

//for verifying the details on the main home page
function verify() {
	if(nameCheck())
	{
		console.log("Name Check Verified!");
		if(emailCheck())
		{
			console.log("Email Check Verified!");
			if(radioCheck())
			{
				console.log("Radio Check Verified!");
				console.log("All Data Verified Successfully!");
				alert("Data Verified and Submitted!");
			}
		}
	}
	console.log("Please Re-enter proper data again!");
	return false;
}

//for the more tours button on home page
function moreTours() {
	alert("More Tour Packages Coming Soon!");
}