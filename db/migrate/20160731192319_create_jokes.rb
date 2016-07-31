class CreateJokes < ActiveRecord::Migration[5.0]
  def change
    create_table :jokes do |t|
      t.string :joke
      t.string :categories

      t.timestamps
    end
  end
end
