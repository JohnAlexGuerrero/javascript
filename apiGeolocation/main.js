if ('geolocation' in navigator) {
    console.log('Geolocation está disponible');
} else {
    console.log('Geolocation NO está disponible');
}


const locationResult = document.querySelector('#locationResult');
document.querySelector('#getLocation').addEventListener('click', () => {
  locationResult.textContent = 'Recuperando la Ubicacion del Usuario...'

  function success(position) {
    let { coords } = position;
    locationResult.textContent = 'Vea mi ubicacion en un mapa';
    locationResult.href = `https://www.openstreetmap.org?mlat=${coords.latitude}&mlon=${coords.longitude}`;
  }

  navigator.geolocation.getCurrentPosition(success);
});

// https://www.freecodecamp.org/espanol/news/como-usar-la-api-geolocation-api-en-javascript-con-ejemplos-de-codigo/
  