class CreateColours < ActiveRecord::Migration
  def change
    create_table :colours do |t|
      t.string :label
      t.string :value
      t.integer :likes_count

      t.timestamps
    end
  end
end
