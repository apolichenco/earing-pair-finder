class Earing < ApplicationRecord

    has_many :listings
    validates :color, presence: true 
    validates :shape, presence: true

    def capitalized_shape
        @shape = self.shape.capitalize()
    end

    def capitalized_color
        @color = self.color.capitalize()
    end


end
