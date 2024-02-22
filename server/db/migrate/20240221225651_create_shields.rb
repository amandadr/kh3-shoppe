class CreateShields < ActiveRecord::Migration[7.1]
  def change
    create_table :shields do |t|
      t.string :name
      t.integer :strength
      t.integer :fire
      t.integer :blizzard
      t.integer :thunder
      t.integer :water
      t.integer :aero
      t.integer :dark
      t.text :abilities
      t.text :location
      t.integer :price

      t.timestamps
    end
  end
end
