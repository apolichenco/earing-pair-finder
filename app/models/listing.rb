class Listing < ApplicationRecord

    belongs_to :earing
    belongs_to :user

    validates :earing_id, presence: true
    validates :user_id, presence: true, uniqueness: {scope: :earing_id}
    validates :price, presence: true, numericality: {less_than_or_equal_to: 150}

end
