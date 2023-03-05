class EaringSerializer < ActiveModel::Serializer
  attributes :id, :shape, :color

  # has_many :users, through: :listings

end
