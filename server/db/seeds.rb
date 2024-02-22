# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

require 'json'

# Helper function to parse and load a JSON file
def load_json_data(file_path)
  file = File.read(file_path)
  JSON.parse(file)
end

# Helper function to parse and handle nested chests data
def parse_chests(chests_data)
  chests_data.transform_values do |chest_numbers|
    chest_numbers.map { |num| "Chest ##{num}" }
  end
end

# Clear out existing data (optional, for development)
Accessory.delete_all
Armor.delete_all
Item.delete_all
Keyblade.delete_all
Shield.delete_all
Staff.delete_all


# Seed Accessories
data_path = 'db/data/accessories.json'
accessories_data = load_json_data(data_path)

accessories_data.each do |accessory|
  Accessory.create!(accessory)
end

# Seed Armor
arm_data_path = 'db/data/armor.json'
armor_data = load_json_data(arm_data_path)

armor_data.each do |armor|
  Armor.create!(armor)
end

# Seed Items
item_data_path = 'db/data/items.json'
items_data = load_json_data(item_data_path)

items_data.each do |item|
  item["chests"] = parse_chests(item["chests"]) if item["chests"]
  Item.create!(item)
end

# Seed Keyblades
key_data_path = 'db/data/keyblades.json'
keyblades_data = load_json_data(key_data_path)

keyblades_data.each do |keyblade|
  Keyblade.create!(keyblade)
end

# Seed Shields
sh_data_path = 'db/data/shields.json'
shields_data = load_json_data(sh_data_path)

shields_data.each do |shield|
  Shield.create!(shield)
end

# Seed Staves
st_data_path = 'db/data/staves.json'
staves_data = load_json_data(st_data_path)

staves_data.each do |staff|
  Staff.create!(staff)
end

puts "Seeding complete!"