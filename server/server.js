Meteor.users.allow({
  'insert': function (userId,doc){
    return true;
  }
});

Meteor.users.insert({
  profile: { name: 'Ian Goober', customerId:'7sRKSmS3jseSXbvnf'}
});

var ian = Meteor.users.findOne();

JsonRoutes.add("post", "/amount/:id", function (req, res, next){
  var customerId = req.params.id
  var account = CustomerRequests.findOne({customerId:'7sRKSmS3jseSXbvnf'})
  console.log(account.customerName)
  var object = {cost:account.amount, customerName:account.customerName}
  JsonRoutes.sendResult(res, 200, object)
  console.log(object)
});

JsonRoutes.add("post", "/transaction/:id", function (req, res, next){
  // console.log(req)
  var customer_guid = req.body.customer_guid
  var amount = '50.00'
  var merchantId = req.params.id
  console.log(customer_guid)
  console.log(merchantId)
  console.log(req.body.amount)
  JsonRoutes.sendResult(res, 200, object)
});

var ian = Meteor.users.findOne();

// Meteor.users.update({_id:ian._id },{ $set:{_id:"7sRKSmS3jseSXbvnf"}})
CustomerRequests.insert({
    customerId: '7sRKSmS3jseSXbvnf',
    customerName: ian.username,
    completed: 0,
    amount: '50.00'
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