var MAP_ZOOM = 15;
var map;
var service;
var infowindow;
var currentLocation;
var location;

Meteor.startup(function() {
  GoogleMaps.load();
});

Template.map.helpers({
  geolocationError: function() {
    var error = Geolocation.error();
    return error && error.message;
  },
  mapOptions: function() {
  	var latLng = Geolocation.latLng();
  	if (GoogleMaps.loaded() && latLng) {
    //styling the map
    //define the basic color of your map, plus a value for saturation and brightness
    var	main_color = '#006064',
    saturation_value= -20,
    brightness_value= 5;
    //we define here the style of the map
    var mapStyle= [
      {
        //set saturation for the labels on the map
        elementType: "labels",
        stylers: [
          {saturation: saturation_value}
        ]
      },
        {	//poi stands for point of interest - don't show these lables on the map
        featureType: "poi",
        elementType: "labels",
        stylers: [
          {visibility: "off"}
        ]
      },
      {
        //don't show highways lables on the map
            featureType: 'road.highway',
            elementType: 'labels',
            stylers: [
                {visibility: "off"}
            ]
        },
      {
        //don't show local road lables on the map
        featureType: "road.local",
        elementType: "labels.icon",
        stylers: [
          {visibility: "off"}
        ]
      },
      {
        //don't show arterial road lables on the map
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [
          {visibility: "off"}
        ]
      },
      {
        //don't show road lables on the map
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [
          {visibility: "off"}
        ]
      },
      //style different elements on the map
      {
        featureType: "transit",
        elementType: "geometry.fill",
        stylers: [
          { hue: main_color },
          { visibility: "on" },
          { lightness: brightness_value },
          { saturation: saturation_value }
        ]
      },
      {
        featureType: "poi",
        elementType: "geometry.fill",
        stylers: [
          { hue: main_color },
          { visibility: "on" },
          { lightness: brightness_value },
          { saturation: saturation_value }
        ]
      },
      {
        featureType: "poi.government",
        elementType: "geometry.fill",
        stylers: [
          { hue: main_color },
          { visibility: "on" },
          { lightness: brightness_value },
          { saturation: saturation_value }
        ]
      },
      {
        featureType: "poi.sport_complex",
        elementType: "geometry.fill",
        stylers: [
          { hue: main_color },
          { visibility: "on" },
          { lightness: brightness_value },
          { saturation: saturation_value }
        ]
      },
      {
        featureType: "poi.attraction",
        elementType: "geometry.fill",
        stylers: [
          { hue: main_color },
          { visibility: "on" },
          { lightness: brightness_value },
          { saturation: saturation_value }
        ]
      },
      {
        featureType: "poi.business",
        elementType: "geometry.fill",
        stylers: [
          { hue: main_color },
          { visibility: "on" },
          { lightness: brightness_value },
          { saturation: saturation_value }
        ]
      },
      {
        featureType: "transit",
        elementType: "geometry.fill",
        stylers: [
          { hue: main_color },
          { visibility: "on" },
          { lightness: brightness_value },
          { saturation: saturation_value }
        ]
      },
      {
        featureType: "transit.station",
        elementType: "geometry.fill",
        stylers: [
          { hue: main_color },
          { visibility: "on" },
          { lightness: brightness_value },
          { saturation: saturation_value }
        ]
      },
      {
        featureType: "landscape",
        stylers: [
          { hue: main_color },
          { visibility: "on" },
          { lightness: brightness_value },
          { saturation: saturation_value }
        ]
      },
      {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [
          { hue: main_color },
          { visibility: "on" },
          { lightness: brightness_value },
          { saturation: saturation_value }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
          { hue: main_color },
          { visibility: "on" },
          { lightness: brightness_value },
          { saturation: saturation_value }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          { hue: main_color },
          { visibility: "on" },
          { lightness: brightness_value },
          { saturation: saturation_value }
        ]
      }
    ];
//done map styles
  	if (GoogleMaps.loaded()) {
      var latLng = Geolocation.latLng();
      return {
        center: new google.maps.LatLng(latLng.lat, latLng.lng),
        zoom: 15,
        styles: mapStyle,
        streetViewControl:false,
        mapTypeControl: false
      };
    }
  }
}
});
//     var latLng = Geolocation.latLng();
//     var pyrmont = new google.maps.LatLng(latLng.lat, latLng.lng)
//     // Initialize the map once we have the latLng.
//     console.log(pyrmont)
//   //   if (GoogleMaps.loaded() && latLng) {
//   //   	currentLocation = new google.maps.LatLng(latLng.lat, latLng.lng)
//   //   	// console.log(currentLocation)
// 	 //      return {
// 	 //        center: currentLocation,
// 	 //        zoom: MAP_ZOOM
// 	 //      };
//   //   }
//   // }
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: pyrmont,
//     zoom: 15
//   });

//   infowindow = new google.maps.InfoWindow();

//   var service = new google.maps.places.PlacesService(map);
//   service.nearbySearch({
//     location: pyrmont,
//     radius: 500,
//     types: ['store']
//   }, callback);

// function callback(results, status) {
//   if (status === google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       createMarker(results[i]);
//     }
//   }
// }

// function createMarker(place) {
//   var placeLoc = place.geometry.location;
//   var marker = new google.maps.Marker({
//     map: map,
//     position: place.geometry.location
//   });

// 	  google.maps.event.addListener(marker, 'click', function() {
// 	    infowindow.setContent(place.name);
// 	    infowindow.open(map, this);


Template.map.events({
	"submit .cash-submit": function(event){
		event.preventDefault();
		var info = {
			amount:11.00,
			customerId:'5000003'
		}

		Meteor.call('chargeSecondaryAcct', info)
	},
  'click #requestcash': function(event) {
    $('#successModal').openModal();
  },
  'click #requestconfirm': function(event) {
    var text = "<img class='pin' src='/pin.png' /><h5 class='center-align'>There are 5 vendors near you.</h5>";
    $('#successModal').closeModal();
    $('#howmuchtext').remove();
    $('#amountcash').remove();
    $('#cashamount-box').append(text);
    $('#requestcash').remove();
    $('#bottom-button').append("<a class='cyan accent-4 waves-effect waves-light btn center-align z-depth-2' id='arrivedButton'>Arrived!</a>");
  },
  'click #arrivedButton': function(event) {
    Router.go('/confirm');
  }
});

Template.map.onCreated(function() {
  GoogleMaps.ready('map', function(map) {
     var latLng = Geolocation.latLng();

     var marker = new google.maps.Marker({
     		position: new google.maps.LatLng(latLng.lat, latLng.lng),
        icon: {
          url:'/locationPin.png',
          scaledSize: new google.maps.Size(25,50)
        },
     		map: map.instance
     });
  });
});
// function initMap(){
// 		var latLng = Geolocation.latLng();
// 		var pyrmont = new google.maps.LatLng(latLng.lat, latLng.lng)

// 		map = new google.maps.Map(document.getElementById('map-canvas'), {
// 		    center: pyrmont,
// 		    zoom: 15
// 		  });

// 		infowindow = new google.maps.InfoWindow();

// 		// var text = event.target.submit.value;
// 		// var latLng = Geolocation.latLng();
// 			var service = new google.maps.places.PlacesService(map);
// 			service.nearbySearch({
// 				location: pyrmont,
// 				radius: 500,
// 				types: ['store']
// 			}, callback);
// 			console.log("initMap")
// }			// })
// 		 //  var request = {
// 		 //    location: pyrmont,
// 		 //    radius: '500',
// 		 //    types: ['store']
// 		 //  };

// 		 //  // console.log(currentLocation)
// 		 //  service = new google.maps.places.PlacesService(map);
// 		 //  service.nearbySearch(request, callback);
		  
// 		function callback(results, status) {
// 		  if (status == google.maps.places.PlacesServiceStatus.OK) {
// 		    for (var i = 0; i < results.length; i++) {
// 		      var place = results[i];
// 		      createMarker(results[i]);
// 		    }
// 		  }
// 		}
function initMap(){
		var latLng = Geolocation.latLng();
		var pyrmont = new google.maps.LatLng(latLng.lat, latLng.lng)

		map = new google.maps.Map(document.getElementById('map-canvas'), {
		    center: pyrmont,
		    zoom: 15
		  });

		infowindow = new google.maps.InfoWindow();

		// var text = event.target.submit.value;
		// var latLng = Geolocation.latLng();
			var service = new google.maps.places.PlacesService(map);
			service.nearbySearch({
				location: pyrmont,
				radius: 500,
				types: ['store']
			}, callback);
			console.log("initMap")
}			// })
		 //  var request = {
		 //    location: pyrmont,
		 //    radius: '500',
		 //    types: ['store']
		 //  };

		 //  // console.log(currentLocation)
		 //  service = new google.maps.places.PlacesService(map);
		 //  service.nearbySearch(request, callback);

		function callback(results, status) {
		  if (status == google.maps.places.PlacesServiceStatus.OK) {
		    for (var i = 0; i < results.length; i++) {
		      var place = results[i];
		      createMarker(results[i]);
		    }
		  }
		}

// function initialize() {
// 	map = new google.maps.Map(document.getElementById('map'),{
// 		center: currentLocation,
// 		zoom: 15
// 	});

// 	var request = {
// 	    		location: currentLocation,
// 	    		radius: '500',
// 	    		types: ['mosque']
// 	    	};

// 	    	// infowindow = new google.maps.InfoWindow();
// 	    	service = new google.maps.places.PlacesService(map);
// 	    	service.nearbySearch(request, callback);
// }
