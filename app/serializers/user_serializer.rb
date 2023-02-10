class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :listing_amount

end


# rails generate migration RemoveFieldNameFromTableName field_name:datatype