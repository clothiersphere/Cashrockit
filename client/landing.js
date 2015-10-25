Template.landing.events({
  'click #login': function(event) {
    console.log('go to map');
    Router.go('/map');
  }
})
