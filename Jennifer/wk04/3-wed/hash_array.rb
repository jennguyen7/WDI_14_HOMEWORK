=begin
Array and Hash access

A. Given the following data structure:

a = ["Anil", "Erik", "Jonathan"]
How would you return the string "Erik"?
How would you add your name to the array?
B. Given the following data structure:

h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
How would you return the string "One"?
How would you return the string "Two"?
How would you return the number 2?
How would you add {3 => "Three"} to the hash?
How would you add {:four => 4} to the hash?
C. Given the following data structure:

is = {true => "It's true!", false => "It's false"}
What is the return value of is[2 + 2 == 4]?
What is the return value of is["Erik" == "Jonathan"]?
What is the return value of is[9 > 10]?
What is the return value of is[0]?
What is the return value of is["Erik"]?
D. Given the following data structure:

users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}
How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
How would you add the number 7 to Erik's favorite numbers?
How would you add yourself to the users hash?
How would you return the array of Erik's favorite numbers?
How would you return the smallest of Erik's favorite numbers?
How would you return an array of Anil's favorite numbers that are also even?
How would you return an array of the favorite numbers common to all users?
How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?

=end

require "pry"

a = ["Anil", "Erik", "Jonathan"]
#How would you return the string "Erik"?
#a[1]

#How would you add your name to the array?
#a.push("Jen")

#B. Given the following data structure:

h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
#How would you return the string "One"?
#h[1]

#How would you return the string "Two"?
#h[:two]

#How would you return the number 2?
#h["two"]

#How would you add {3 => "Three"} to the hash?
#h[3]= "Three"

#How would you add {:four => 4} to the hash?
#h[:four] = 4

=begin
input = 4
h[input.to_sym] =4
=end

is = {true => "It's true!", false => "It's false"}
#What is the return value of is[2 + 2 == 4]?
#It's true

#What is the return value of is["Erik" == "Jonathan"]?
#It's false

#What is the return value of is[9 > 10]?
#It's false

#What is the return value of is[0]?
#It's true WRONG! This is an object NOT an array
#nil

#What is the return value of is["Erik"]?
#nil WRONG!
#unintialised constant

users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

#How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
#users["Jonathan"][:twitter]

#How would you add the number 7 to Erik's favorite numbers?
#users["Erik"][:favorite_numbers].push(7)

#How would you add yourself to the users hash?
#users["Jen"] = {:twitter => jenjen, :favourite_numbers => [3, 2]}

#How would you return the array of Erik's favorite numbers?
#users["Erik"][:favorite_numbers]

#How would you return the smallest of Erik's favorite numbers?
#users["Erik"][favorite_numbers].min

#How would you return an array of Anil's favorite numbers that are also even?
new_fave = []
users["Anil"][:favorite_numbers].each do |value|
  if value.even?
    new_fave.push(value) 
    puts value
  end
end
#each doesnt return an array. Use another method. Use map

fave_even = users["Anil"][:favorite_numbers].select do |number|
  return number.even?
end

p fave_even #or print fave_even

fave_even = users["Anil"][:favorite_numbers].select {|number| number.even?}



#only integers have an 'even' method. NOT arrays!

#How would you return an array of the favorite numbers common to all users?
#users["Jonathan"][:favorite_numbers] & users["Erik"][:favorite_numbers] & users["Anil"][:favorite_numbers]



#How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
total_fave = users["Jonathan"][:favorite_numbers] +users["Erik"][:favorite_numbers] + users["Anil"][:favorite_numbers]
total_fave = total_fave.sort.uniq!

#use uniq! to create a new array


binding.pry










