if ('geolocation' in navigator){
	navigator.geolocation.getCurrentPosition(position=>{
		const lat = position.coords.latitude;
		const lng = position.coords.longitude;
		document.getElementById("latitude").textContent=lat;
		document.getElementById("longitude").textContent=lng;
		var mymap = L.map('mapid').setView([51.505, -0.09], 13);

		L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
		    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		    maxZoom: 18,
		    id: 'mapbox/streets-v11',
		    tileSize: 512,
		    zoomOffset: -1,
		    accessToken: 'your.mapbox.access.token'
		}).addTo(mymap);
	});
} else {
	console.log('Geolocation is not available');
}