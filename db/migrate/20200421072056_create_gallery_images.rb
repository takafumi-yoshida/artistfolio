class CreateGalleryImages < ActiveRecord::Migration[5.2]
  def change
    create_table :gallery_images do |t|
      t.string      :photo, null: false
      t.references  :gallery, null: false, foreign_key: true
      t.timestamps
    end
  end
end
