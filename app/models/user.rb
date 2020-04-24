class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
         
  has_many :gallaries
  
   mount_uploader :image, ImageUploader

   
   with_options presence: true do
    validates :artistname, uniqueness: true, length: { maximum: 10 }
    validates :email, uniqueness: true 
    validates :encrypted_password
  end

    validates :realname,       length: { maximum: 18 }
    validates :profession,     length: { maximum: 12 }
    validates :birthplace,     length: { maximum: 12 }
    validates :activityBase,   length: { maximum: 12 }
end
