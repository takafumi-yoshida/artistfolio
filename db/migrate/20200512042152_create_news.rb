class CreateNews < ActiveRecord::Migration[5.2]
  def change
    create_table :news do |t|
      t.string :date, null: false
      t.text :content, null: false
      t.references  :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
