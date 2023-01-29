class Earing < ApplicationRecord

    has_many :listings
    validates :color, presence: true 
    validates :shape, presence: true

end
