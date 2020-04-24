class GalleryImage < ApplicationRecord

  belongs_to :gallery

  mount_uploader :photo, ImageUploader

  validates :photo, presence: true

  
end
