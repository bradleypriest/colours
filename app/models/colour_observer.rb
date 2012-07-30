class ColourObserver < ActiveRecord::Observer
  def after_create(colour)
    Pusher['colours'].trigger!('create', colour.to_json)
  end

  def after_update(colour)
    Pusher['colours'].trigger!('update', colour.to_json)
  end

  def after_destroy(colour)
    Pusher['colours'].trigger!('destroy', colour.to_json)
  end
end
