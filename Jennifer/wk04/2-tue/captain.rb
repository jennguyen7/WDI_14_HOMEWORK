planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]
#Access the second value in planeteers.
puts planeteers[1]
#Add "Heart" to the end of planeteers.
puts planeteers.push("Heart")
#Remove "Captain Planet" from the array (without using a method).
new = []
planeteers.each do |t|
  if(t!="Captain Planet")
    new << t
  end
end
puts new
#Combine planeteers with rangers = ["Red", "Blue", "Pink", "Yellow", "Black"] and save the result in a variable called heroes.
heroes = []
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]
heroes << planeteers
heroes << rangers
print heroes.flatten
#Alphabetize the contents of heroes using a method
heroes = heroes.flatten.sort
print heroes
# #Randomize the contents of heroes using a method.
shuffled = heroes.shuffle
print shuffled
#Select a random element from heroes using a method.
puts heroes.sample
#Select all elements in heroes that begin with "B" using a method.
array_for_b = []
heroes.each do |elem|
  if elem.start_with?('B')
    array_for_b << elem
  end
end
puts array_for_b

#hashes
#Initialize a hash called ninja_turtle
ninja_turtle = {
  :name => 'Michelangelo',
  :weapon => 'Nunchucks',
  :radical => true
}
ninja_turtle[:age] = 593
puts ninja_turtle
#Remove the radical key-value pair from ninja_turtle.
puts ninja_turtle.reject { |key,value| key == :radical}
puts ninja_turtle
# Add a key pizza_toppings to ninja_turtle. Set it to an array of strings (e.g., ["cheese", "pepperoni", "peppers"]).
ninja_turtle[:pizza_toppings] = ["cheese", "pepperoni", "peppers"]
# Access the first element of pizza_toppings.
puts ninja_turtle[:pizza_toppings][0]
#Produce an array containing all of ninja_turtle's keys using a method.
new_arr = []
ninja_turtle.each do | key,value|
  new_arr << key
end
print new_arr
#Print out each key-value pair in the following format
ninja_turtle.each do | key,value|
 puts "#{key}'s is equal to #{value} "
end

#original homework outline

# =begin
# Arrays

# Starting with the following array...

# planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]
# Access the second value in planeteers.

# # Your answer here
# Add "Heart" to the end of planeteers.

# # Your answer here
# Remove "Captain Planet" from the array (without using a method).

# # Your answer here
# Combine planeteers with rangers = ["Red", "Blue", "Pink", "Yellow", "Black"] and save the result in a variable called heroes.

# # Your answer here
# Alphabetize the contents of heroes using a method. The Ruby documentation might help.

# # Your answer here
# Randomize the contents of heroes using a method. The Ruby documentation might help.

# # Your answer here
# Bonus

# Select a random element from heroes using a method. The Ruby documentation might help.

# # Your answer here
# Select all elements in heroes that begin with "B" using a method. The Ruby documentation might help.

# # Your answer here
# Hashes

# Initialize a hash called ninja_turtle with the properties name, weapon and radical. They should have values of "Michelangelo", "Nunchuks" and true respectively.

# # Your answer here
# Add a key age to ninja_turtle. Set it to whatever numerical value you'd like.

# # Your answer here
# Remove the radical key-value pair from ninja_turtle.

# # Your answer here
# Add a key pizza_toppings to ninja_turtle. Set it to an array of strings (e.g., ["cheese", "pepperoni", "peppers"]).

# # Your answer here
# Access the first element of pizza_toppings.

# # Your answer here
# Produce an array containing all of ninja_turtle's keys using a method. The Ruby documentation might help.

# # Your answer here
# Bonus

# Print out each key-value pair in the following format - "KEY's is equal to VALUE" -- using a method. The Ruby documentation might help.

# # Your answer here

# =end

# require "pry"

# planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]
# #Access the second value in planeteers.
# #planeteers[1]

# #Add "Heart" to the end of planeteers.
# #planeteersHeart = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]

# #Remove "Captain Planet" from the array (without using a method).
# #planeteers["Captain Planet"] = "Captain"

# #Combine planeteers with rangers = ["Red", "Blue", "Pink", "Yellow", "Black"] and save the result in a variable called heroes.
# rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]
# #heroes = planeteers.concat(rangers)

# #Alphabetize the contents of heroes using a method. The Ruby documentation might help.
# #heroes.sort

# #Randomize the contents of heroes using a method. The Ruby documentation might help.
# #heroes.shuffle!
# #if you put in heroes.shuffle then it returns a new array. heroes.shuffle! shuffles within the same array.

# #Select a random element from heroes using a method. The Ruby documentation might help.
# #heroes.sample

# #Select all elements in heroes that begin with "B" using a method. The Ruby documentation might help.
# #this finds the first instance
# #heroes.find { |hero| hero.include?("B") }

# #this finds all elements within the array that start with B into a NEW array
# #heroes.select { |hero| hero.include?("B") }

# #Initialize a hash called ninja_turtle with the properties name, weapon and radical. They should have values of "Michelangelo", "Nunchuks" and true respectively.
# #this is an object, not hash

# ninja_turtle = {
# 	name: "Michelangelo",
# 	weapon: "Nunchuks",
# 	radical: true
# }


# #new hash
# ninja_turtle_hash = {"name" => "Michelangelo", "weapon" => "Nunchuks", "radical" => true}

# #Add a key age to ninja_turtle. Set it to whatever numerical value you'd like.
# #ninja_turtle_hash["age"] = 5

# #ninja_turtle[:age] = 5

# #Remove the radical key-value pair from ninja_turtle.



# binding.pry






