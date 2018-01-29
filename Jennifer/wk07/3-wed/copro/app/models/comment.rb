class Comment < ApplicationRecord
	belongs_to :user #teaches Active Record to link Comments to User tables.The databse doesn't know.

	
end
