class User < ApplicationRecord

    has_many :listings
    has_many :earings, through: :listings

    has_secure_password

    validates :name, presence: true, uniqueness: true
    validates :password, presence: true 

    def listing_amount
        self.listings.count
    end

end
