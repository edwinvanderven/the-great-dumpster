// navigator.geolocation.getCurrentPosition doesn't work in dev, needs to be done on HTTPS
// for now, set the coords hardcoded to Amsterdam

window.addEventListener('load', () => {
    const temperatureDegree = document.querySelector('.temperature-degree');
    const temperatureDescription = document.querySelector('.temperature-description');
    const locationTimezone = document.querySelector('.location-timezone');

    // Amsterdam
    const lat = 52.379189;
    const long = 4.899431;

    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const api = `${proxy}https://api.darksky.net/forecast/${darkskyApiKey}/${lat},${long}`;

    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            const { temperature, summary, icon } = data.currently;

            temperatureDegree.textContent = Math.floor(temperature);
            temperatureDescription.textContent = summary;
            locationTimezone.textContent = data.timezone;

            setIcon(icon, document.querySelector('.icon'));
            addTemperatureSwitcher(temperature, temperatureDegree);
        });

    function setIcon(icon, iconID) {
        const skycons = new Skycons({ color: 'white' });
        const currentIcon = icon.replace(/-/g, '_').toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }

    function addTemperatureSwitcher(temperature, temperatureDegree) {
        const temperatureSection = document.querySelector('.degree-section');
        const temperatureSpan = document.querySelector('.degree-section span');

        temperatureSection.addEventListener('click', () => {
            if (temperatureSpan.textContent === 'F') {
                const celsius = (temperature - 32) * (5 / 9);
                temperatureSpan.textContent = 'C';
                temperatureDegree.textContent = Math.floor(celsius);
            } else {
                temperatureSpan.textContent = 'F';
                temperatureDegree.textContent = Math.floor(temperature);
            }
        });
    }
});
