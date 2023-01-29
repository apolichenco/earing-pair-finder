class UserSerializer < ActiveModel::Serializer
  attributes :name
end


# rails generate migration RemoveFieldNameFromTableName field_name:datatype