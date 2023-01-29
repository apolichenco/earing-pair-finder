class CreateEarings < ActiveRecord::Migration[6.1]
  def change
    create_table :earings do |t|
      t.string :color
      t.string :shape

      t.timestamps
    end
  end
end
