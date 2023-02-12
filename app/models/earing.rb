class Earing < ApplicationRecord

    has_many :listings
    validates :color, presence: true, uniqueness: {scope: :shape}
    validates :shape, presence: true


end
