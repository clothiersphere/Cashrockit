CustomerRequests = new Mongo.Collection('customerrequests')

// var now = new Date().getTime();

// var tomId = Meteor.users.insert({
// 	profile: { name: 'Tom Coleman' }
// });
// var tom = Meteor.users.findOne(tomId);

// var sachaId = Meteor.users.insert({
// 	profile: { name: 'Sacha Greif' }
// });
// var sacha = Meteor.users.findOne(sachaId);

// // var ianId = Meteor.users.insert({
// //   profile: { name: 'Ian Goober' }
// // });
// Meteor.methods({
// 	customerRequestInsert: function(customerRequestInsertAttributes) {
// 		var user = Meteor.user();
// 		var customerRequest = _.extend(customerRequestInsertAttributes, )
var ian = Meteor.users.findOne();
console.log(ian._id)
console.log(ian.username)

CustomerRequests.insert({
    customerId: ian._id,
    customerName: ian.username,
    // submitted: new Date(now - 5 * 3600 * 1000),
    completed: 0,
    amount: 50.000
});

