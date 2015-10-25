Meteor.methods({
	searchNearby: function (){
  	var currentLocation = new google.maps.LatLng(latLng.lat, latLng.lng)

  	map = new google.maps.Map(document.getElementById('map'),{
			center: currentLocation,
			zoom:15  		
  	});

  	var request = {
  		location: currentLocation,
  		radius: '500',
  		types: ['mosque']
  	};

  	service = new google.maps.places.PlacesService(map);
  	service.nearbySearch(request, callback);
  },

  callback:function (results, status) {
  	if (status == google.maps.places.PlacesServiceStatus.OK) {
  	  for (var i = 0; i < results.length; i++) {
  	    var place = results[i];
  	    createMarker(results[i]);
  	  }
  	}
  }
});