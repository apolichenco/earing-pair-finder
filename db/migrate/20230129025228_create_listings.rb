class CreateListings < ActiveRecord::Migration[6.1]
  def change
    create_table :listings do |t|
      t.integer :price
      t.integer :user_id
      t.integer :earing_id

      t.timestamps
    end
  end
end
