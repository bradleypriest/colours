Pusher.log = function(message) {
  window.console.log(message);
};

var pusher = new Pusher(ENV.PUSHER_APP_KEY);
var channel = pusher.subscribe('colours');

channel.bind('create', function(data) {
  Colours.router.store.load(Colours.Colour, data);
});
channel.bind('update', function(data) {
  Colours.router.store.load(Colours.Colour, data);
});
channel.bind('destroy', function(data) {
  Colours.Colour.find(data['id']).deleteRecord()
})