class CreateItems < ActiveRecord::Migration[7.1]
  def change
    create_table :items do |t|
      t.string :name
      t.text :description
      t.jsonb :chests
      t.text :locations
      t.integer :price
      t.string :synth

      t.timestamps
    end
  end
end
