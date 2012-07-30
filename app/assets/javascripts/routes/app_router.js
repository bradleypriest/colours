Colours.Router = Ember.Router.extend({
  root: Ember.Route.extend({
    index: Ember.Route.extend({
      route: '/',
      connectOutlets: function(router) {
        router.get('applicationController').connectOutlet("colours", Colours.Colour.find());
      }

      // Layout your routes here...
    })
  })
});

