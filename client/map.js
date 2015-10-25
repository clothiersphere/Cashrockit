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
      return {
        center: new google.maps.LatLng(latLng.lat, latLng.lng),
        zoom: 15
      };
    }
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
// 	  });
// 	}
	}
});

Template.map.events({
	"submit .cash-submit": function(event){
		event.preventDefault();

		var info = {
			amount:11.00,
			customerId:'5000003'
		}

		Meteor.call('chargeSecondaryAcct', info)
	}
	
	// "submit ": function(){

	// }

});

Template.map.onCreated(function() {  
  GoogleMaps.ready('map', function(map) {
     var latLng = Geolocation.latLng();

     var marker = new google.maps.Marker({
     		position: new google.maps.LatLng(latLng.lat, latLng.lng),
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


