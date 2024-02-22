class CreateArmors < ActiveRecord::Migration[7.1]
  def change
    create_table :armors do |t|
      t.string :name
      t.integer :defense
      t.string :fire
      t.string :blizzard
      t.string :thunder
      t.string :water
      t.string :aero
      t.string :dark
      t.text :abilities
      t.text :location
      t.integer :price
      t.string :synthesis

      t.timestamps
    end
  end
end
