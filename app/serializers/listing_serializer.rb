class ListingSerializer < ActiveModel::Serializer
  attributes :id, :price

  belongs_to :user
  belongs_to :earing
end
