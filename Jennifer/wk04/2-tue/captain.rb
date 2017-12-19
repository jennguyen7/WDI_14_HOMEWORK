=begin
Arrays

Starting with the following array...

planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]
Access the second value in planeteers.

# Your answer here
Add "Heart" to the end of planeteers.

# Your answer here
Remove "Captain Planet" from the array (without using a method).

# Your answer here
Combine planeteers with rangers = ["Red", "Blue", "Pink", "Yellow", "Black"] and save the result in a variable called heroes.

# Your answer here
Alphabetize the contents of heroes using a method. The Ruby documentation might help.

# Your answer here
Randomize the contents of heroes using a method. The Ruby documentation might help.

# Your answer here
Bonus

Select a random element from heroes using a method. The Ruby documentation might help.

# Your answer here
Select all elements in heroes that begin with "B" using a method. The Ruby documentation might help.

# Your answer here
Hashes

Initialize a hash called ninja_turtle with the properties name, weapon and radical. They should have values of "Michelangelo", "Nunchuks" and true respectively.

# Your answer here
Add a key age to ninja_turtle. Set it to whatever numerical value you'd like.

# Your answer here
Remove the radical key-value pair from ninja_turtle.

# Your answer here
Add a key pizza_toppings to ninja_turtle. Set it to an array of strings (e.g., ["cheese", "pepperoni", "peppers"]).

# Your answer here
Access the first element of pizza_toppings.

# Your answer here
Produce an array containing all of ninja_turtle's keys using a method. The Ruby documentation might help.

# Your answer here
Bonus

Print out each key-value pair in the following format - "KEY's is equal to VALUE" -- using a method. The Ruby documentation might help.

# Your answer here

=end

require "pry"

planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]
#Access the second value in planeteers.
# planeteers[1]

#Add "Heart" to the end of planeteers.
#planeteersHeart = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]

#Remove "Captain Planet" from the array (without using a method).
#planeteers["Captain Planet"] = "Captain"

#Combine planeteers with rangers = ["Red", "Blue", "Pink", "Yellow", "Black"] and save the result in a variable called heroes.
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]
heroes = planeteers.concat(rangers)

#Alphabetize the contents of heroes using a method. The Ruby documentation might help.
heroes.sort

#Randomize the contents of heroes using a method. The Ruby documentation might help.
heroes.sample






binding.pry






