Colours.ColourView = Ember.View.extend({
  templateName: 'colour',
  attributeBindings: ['style'],

  style: function(){
    if(!this.get('content.value')){ return };
    return "color:"+this.get('content.value')
  }.property('content.value'),

  click: function(event){
    event.preventDefault();
    colour = this.get('content')
    count = colour.get('likesCount')
    count++
    colour.set('likesCount', count)
    colour.transaction.commit()
  },

  deleteRecord: function(event){
    event.preventDefault()
    event.stopPropagation()
    colour = this.get('content')
    colour.deleteRecord()
    colour.get('transaction').commit()
  }
});
