let G, options, spans;

document.addEventListener('DOMContentLoaded', init);

function init() {
	if(navigator.geolocation) {

		let giveUp = 1000 * 30;	// 30 seconds
		let tooOld = 1000 * 60 * 60; // 1 hour

		options = {
			enableHighAccuracy: true,
			timeout: giveUp,
			maximumAge: tooOld,

		}			
		
		navigator.geolocation.getCurrentPosition(gotPos, posFail, options);
	}
	else {
		//using an old browser
	}
}

function gotPos(position) {
	document.querySelector('h1').textContent = "Success...";
	spans = document.querySelectorAll('p span');
	spans[0].textContent = position.coords.latitude;
	spans[1].textContent = position.coords.longitude;
	spans[2].textContent = position.coords.accuracy;
	spans[3].textContent = position.coords.heading;
	spans[4].textContent = position.coords.speed;
	spans[5].textContent = position.coords.altitude;
	spans[6].textContent = position.timestamp;
}

function posFail(err) {
	let errors = {
		1: 'No permission',
		2: 'Unable to determine',
		3: 'Took too long'
	}
	document.querySelector('h1').textContent = errors[err];
}