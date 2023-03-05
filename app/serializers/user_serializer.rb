class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :listing_amount

  has_many :listings, serializer: UserListingsSerializer

end

