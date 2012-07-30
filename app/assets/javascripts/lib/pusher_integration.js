Pusher.log = function(message) {
  window.console.log(message);
};

function loadColour(data) {
  if(Colours.Colour.findPending(data)){ return; }
  Colours.router.store.load(Colours.Colour, data);
}

Pusher.host    = 'localhost';
Pusher.ws_port = 8080;
var pusher = new Pusher(ENV.PUSHER_APP_KEY);
var channel = pusher.subscribe('colours');

channel.bind('create', function(data) {
  loadColour(data);
});
channel.bind('update', function(data) {
  loadColour(data);
});
channel.bind('destroy', function(data) {
  colour = Colours.Colour.find(data['id'])
  if(!colour.get('isDeleted')){
    colour.deleteRecord();
  }
});

