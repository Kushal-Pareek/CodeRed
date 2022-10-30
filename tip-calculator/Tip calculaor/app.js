window.onload = () =>
	//the function called when Submit button is clicked.
	{
		/*call to a function calculateTip
		it calculates the tip for the bill.*/
		document.querySelector('#submit').onclick = calculateTip;
	}

function calculateTip() {
	let amount = document.querySelector('#amount').value;
	let persons = document.querySelector('#persons').value;
	let service = document.querySelector('#services').value;

	console.log(service);
	
		//it will display an alert box and return. when user presses
		//submit button without entering values.
	if (amount === '' && service === 'Select') {
		alert("Enter valid values!!");
		return;
	}

	//when only one person is there
	if (persons === '1')
	//no need to display "each".
		document.querySelector('#each').style.display = 'none';
	else
	//when there are more than one person then display "each".
		document.querySelector('#each').style.display = 'block';

	/*lastly calculate the tip by multiplying total bill amount and 
	service rating then dividing it by total number of persons.*/
	//recall formula tip = (t*percentage)/p;
	//rounding off the total amount upto 2 decimal digits
	let total = (amount * service) / persons;
	total = total.toFixed(2);

	//finally displaying the tip value
	document.querySelector('.tip').style.display = 'block';
	document.querySelector('#total').innerHTML = total;
}
