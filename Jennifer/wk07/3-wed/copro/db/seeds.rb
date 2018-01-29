# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#everytime seed is run, it deletes the records and makes 10 new ones.
Project.delete_all
User.delete_all

arr1 = ['unicorn', 'rainbow', 'lollies', 'donuts']
arr2 = ['blossom', 'sprinkles', 'thyme', 'puff']

user = User.new
user.email = 'jen@unicorn.com'
user.save

10.times do
	Project.create(
		title: "#{arr1.sample} #{arr2.sample}", 
		user_id: user.id
	)
end