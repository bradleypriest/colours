Colours.ColoursView = Ember.View.extend({
  templateName: 'colours',
  content: null,
  isEditing: false,
  addNew: function(event){
    event.preventDefault()
    this.setProperties({
      'content': Colours.Colour.createRecord(),
      'isEditing': true
    })
  },
  save: function(event){
    event.preventDefault()
    this.get('content.transaction').commit()
    this.set('isEditing', false)
  },
  cancel: function(event){
    event.preventDefault()
    this.get('content.transaction').rollback()
    this.set('isEditing', false)
  }
});
