JsonRoutes.add("get", "/amount/:id", function (req, res, next){
  var customerId = req.params.id
  var account = Customerrequests.findOne(customerId)
  var object = {amount:acccount.amount, customerName:account.customerName}
  console.log("GOT A GET")
  JsonRoutes.sendResult(res, 200, object)
});

JsonRoutes.add("post", "/transaction/:id", function (req, res, next){
  var customer_guid = req.customer_guid
  var amount = req.amount
  var merchantId = req.params.id
  console.log("GOT A POST")
  JsonRoutes.sendResult(res, 200, object)
});

var cashRocketsecureNetID = 8005209  
// var secureNetKey = 'ZdzVYAYIWmIo';

// var Authkey = new Buffer('8005209:ZdzVYAYIWmIo').toString('base64');
var cashrocketMerchantKey = Base64.encode('8005209:ZdzVYAYIWmIo')
var coffeeMerchantKey = Base64.encode('8005221:jxnJcnWabxCx')
// console.log(Authkey1)
// console.log(Authkey)
// var test = Base64.encode()

Meteor.methods({
	chargeSecondaryAcct: function (info){
    var base_url = 'https://gwapi.demo.securenet.com/api/Payments/Charge'
    

    var options = {
      headers: {
        'Authorization': 'Basic '+ cashrocketMerchantKey
        // 'Authorization': 'Basic '+ cashrocketMerchantKey
      },
      data: {
        'amount':11.00,
        'paymentVaultToken': {
          // 'customerId':'5000003',
          'customerId':'5000004',
          'paymentMethodID':'1'
        },
        'vaultCredentials':{
         //'secureNetID':8005209,
           'secureNetID':8005221,
        // 'secureNetKey':'ZdzVYAYIWmIo'
           'secureNetKey':'jxnJcnWabxCx'
        },
        'extendedInformation': {
          'typeOfGoods': 'PHYSICAL'
        },
        'developerApplication': {
          'developerId': 12345678,
          'version': '1.2'
        }
      } 
    }

   Meteor.http.post(base_url, options, function (error, response){
      if (error) { 
        console.log(error)
      } else {
        console.log(response);
      }
    })  

  }
  

});


  // 'makeRequest': function(postAttributes){
 //    var user = Meteor.user();

 //    var request = _.extend(postAttributes,{
 //      userId: user._id,
 //      author: user.username,
 //      submitted: new Date(),
 //      completed:0
 //    }); 
    
 //    var postId = CustomerRequests.insert(request);
 //  }
  // ,

  // 'completeRequest': function(){
  //   var postId = CustomerRequests.findOne({_id:this._id});
  //   CustomerRequests.update(postId)
  // }

  // searchNearby: function (){
 //  	var currentLocation = new google.maps.LatLng(latLng.lat, latLng.lng)

 //  	map = new google.maps.Map(document.getElementById('map'),{
	// 		center: currentLocation,
	// 		zoom:15  		
 //  	});

 //  	var request = {
 //  		location: currentLocation,
 //  		radius: '500',
 //  		types: ['mosque']
 //  	};

 //  	service = new google.maps.places.PlacesService(map);
 //  	service.nearbySearch(request, callback);
 //  },

 //  callback:function (results, status) {
 //  	if (status == google.maps.places.PlacesServiceStatus.OK) {
 //  	  for (var i = 0; i < results.length; i++) {
 //  	    var place = results[i];
 //  	    createMarker(results[i]);
 //  	  }
 //  	}
 //  }