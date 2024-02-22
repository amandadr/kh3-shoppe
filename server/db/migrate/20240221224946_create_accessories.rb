class CreateAccessories < ActiveRecord::Migration[7.1]
  def change
    create_table :accessories do |t|
      t.string :name
      t.integer :strength
      t.integer :magic
      t.integer :ap
      t.text :abilities
      t.text :location
      t.integer :price
      t.string :synthesis

      t.timestamps
    end
  end
end
