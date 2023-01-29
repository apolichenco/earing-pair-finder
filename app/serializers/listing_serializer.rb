class ListingSerializer < ActiveModel::Serializer
  attributes :price

  belongs_to :user
  belongs_to :earing
end
