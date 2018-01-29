class Project < ApplicationRecord
  belongs_to :user
  mount_uploader :preview, PreviewUploader
  has_many :comments
  has_many :likes
end
