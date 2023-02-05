class UserSerializer < ActiveModel::Serializer
  attributes :name, :password_digest
end


# rails generate migration RemoveFieldNameFromTableName field_name:datatype