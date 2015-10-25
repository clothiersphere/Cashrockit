Template.confirm.events({
  'click #done': function(event) {
    Router.go('/');
  }
})
Template.confirm.helpers({
	totalCharge: function(){
		var amount = CustomerRequests.findOne();
		return amount.amount + 2;
	},
	serviceFee: function(){
		return 2;
	},
	cashAmount: function(){
		var amount = CustomerRequests.findOne();
		return amount.amount;
	}

})