var msg = 'Sign up to receive our newsletter for 10% off!';
var msg1 = 'I want to be able to have the education to have a stable job for the rest of my life'
var msg2 = 'I want to be able to do problem solving smoothly'
var msg3 = 'I want to be able to jump right into the job market with no problems'
function updateMessage() {
	
	var el = document.getElementById('message').innerHTML = 'Sign up to receive our newsletter for 10% off';
	var el1 = document.getElementById('message1').innerHTML = 'I want to be able to have the education to have a stable job for the rest of my life';
	var el2 = document.getElementById('message2').innerHTML = 'I want to be able to do problem solving smoothly';
	var el3 = document.getElementById('message3').innerHTML = 'I want to be able to jump right into the job market with no problems';
}

updateMessage();

var el = document.getElementById('info');
var randomNum = Math.floor((Math.random() * 10) + 1);

el.innerHTML = '<h2>random number</h2><p>' + randomNum + '</p>';