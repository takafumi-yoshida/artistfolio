class Gallery < ApplicationRecord

  belongs_to :user
  has_many :gallery_images, dependent: :destroy

  accepts_nested_attributes_for :gallery_images, allow_destroy: true
  validates_associated :gallery_images
  

end
