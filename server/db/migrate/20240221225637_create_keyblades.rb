class CreateKeyblades < ActiveRecord::Migration[7.1]
  def change
    create_table :keyblades do |t|
      t.string :name
      t.integer :strength
      t.integer :magic
      t.text :abilities
      t.text :location

      t.timestamps
    end
  end
end
