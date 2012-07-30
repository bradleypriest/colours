class ColourSerializer < ActiveModel::Serializer
  attributes :id, :label, :value, :likes_count
end
