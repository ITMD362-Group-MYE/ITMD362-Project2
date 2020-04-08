function inputValues()
{
	var fullName = document.forms["signup_form"]["fullName"].value;
	var email = document.forms["signup_form"]["email"].value;
	var phone = document.forms["signup_form"]["phone"].value;
	var other = document.forms["signup_form"]["other"].value;

	if(fullName=="")
	{
		alert("Please Enter your Name");
	}
	else if(email=="")
	{
		alert("Please Enter your Email Address");
	}
	else if(phone.length!=10)
	{
		alert("Please enter a valid 10 digit phone number");
	}
	
}