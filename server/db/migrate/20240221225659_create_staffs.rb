class CreateStaffs < ActiveRecord::Migration[7.1]
  def change
    create_table :staffs do |t|
      t.string :name
      t.integer :strength
      t.integer :magic
      t.text :abilities
      t.text :location
      t.integer :price

      t.timestamps
    end
  end
end
