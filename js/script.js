fetch("https://api.stormglass.io/v2", {
  headers: {
    Authorization: "20ca7e94-8d2e-11ea-b78d-0242ac130002-20ca7fde-8d2e-11ea-b78d-0242ac130002"
  }
}).then((response) => response.json()).then((jsonData) => {
  // Do something with response data.
});

const weatherUrl = "https://api.stormglass.io/v2";
const corsEnabledUrl = "https://noroffcors.herokuapp.com/" + weatherUrl;


async function fetchWeather() {
	try {
		const response = await fetch(corsEnabledUrl);
		const weather = await response.json();
		displayWeather(weather);
	} catch (error) {
		console.log(error);
	}
}

fetchWeather();

function displayWeather(weather) {
	console.log(weather);
	const weatherContainer = document.querySelector(".weather-container");

	let html = "";

	for (let i = 0; i < weather.length; i++) {
		if (!weather[i].name) {
			continue;
		}

		console.log(weather[i].airTemperature);

		let airTemperature ="Unknown";

		if (weather[i].airTemperature !== "-") {
			airTemperature = weather[i].airTemperature
		}

		html += `<div>
					<h3>${weather[i].name}</h3>
					<p>Time: ${weather[i]}</p>
					<p>Air temperature: ${weather[i].airTemperature}</p>
					<a href="detail.html?name=${weather[i].name}">Details</a>
				</div>`;

	}

	weatherContainer.innerHTML = html;
}

displayWeather();

