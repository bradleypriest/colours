Colours.Colour = DS.Model.extend({
  label: DS.attr('string'),
  value: DS.attr('string'),
  likesCount: DS.attr('number', {
    defaultValue: 0
  })
});

Colours.Colour.reopenClass({
  findPending: function(hash){
    return this.find().filterProperty('isSaving').find( function(colour){
      return colour.get('label') === hash.label && colour.get('value') === hash.value
    })
  }
})