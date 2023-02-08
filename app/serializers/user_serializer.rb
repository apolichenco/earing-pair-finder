class UserSerializer < ActiveModel::Serializer
  attributes :id, :name
end


# rails generate migration RemoveFieldNameFromTableName field_name:datatype