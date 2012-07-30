Colours.Colour = DS.Model.extend({
  label: DS.attr('string'),
  value: DS.attr('string'),
  likesCount: DS.attr('number', {
    defaultValue: 0
  })
});