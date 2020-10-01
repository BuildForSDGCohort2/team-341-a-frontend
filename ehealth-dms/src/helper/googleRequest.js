
export const displayLocation = (latitude,longitude) => {
    return new Promise(function (resolve, reject) {
    var request = new XMLHttpRequest();
    var method = 'GET';
    var url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+latitude+','+longitude+'&sensor=true&key='+ process.env.REACT_APP_GOOGLE_MAP_APIKEY;
    var async = true;

    request.open(method, url, async);
    request.onreadystatechange = () => {
      if(request.readyState === 4) {
        if (request.status === 200) {
          var data = JSON.parse(request.responseText);
          var address = data.results[4];
          resolve(address);
      }
      else {
          reject(request.status);
      }
    };
  }
  request.send();
  });
  }

  export const successCallback = (position) => {
    var x = position.coords.latitude;
    var y = position.coords.longitude;
    displayLocation(x,y)
    .then(res => console.log(res));
  };

  export const errorCallback = (error) => {
    var errorMessage = 'Unknown error';
    switch(error.code) {
      case 1:
        errorMessage = 'Permission denied';
        break;
      case 2:
        errorMessage = 'Position unavailable';
        break;
      case 3:
        errorMessage = 'Timeout';
        break;
      default:
      errorMessage = errorMessage;
      break;
    }
    console.error(errorMessage);
  };

  export const getMapData = (dataFn, errFn) => {
    var options = {
        enableHighAccuracy: true,
        timeout: 1000,
        maximumAge: 0
      };
      if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(dataFn, errFn, options);
      }
  }

