Router.configure({
  layoutTemplate: 'layout'
//   // ,
//   // notFoundTemplate: 'notFound'
//   // ,
//   // loadingTemplate: 'loading'
});

Router.map(function() {
	this.route('landing', {
		path: '/'
	});
	this.route('home', {
		path: '/home'
	});
  this.route('map', {
		path: '/map'
	});
  this.route('confirm', {
    path: '/confirm'
  })
})

