class Earing < ApplicationRecord

    has_many :listings
    has_many :users, through: :listings
    validates :color, presence: true, uniqueness: {scope: :shape}
    validates :shape, presence: true
    before_save :downcase_fields

    def downcase_fields
       self.color = color.downcase.capitalize()
       self.shape = shape.downcase.capitalize()
    end

end
