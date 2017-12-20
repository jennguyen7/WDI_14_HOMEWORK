=begin
	
Calculator

Explanation

You will be building a CLI calculator. Which means it will be a command line text based program. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
Specification:

A user should be given a menu of operations
A user should be able to choose from the menu
A user should be able to enter numbers to perform the operation on
A user should be shown the result
This process should continue until the user selects a quit option from the menu
Phase 1

Calculator functionality
Calculator should be able to do basic arithmetic (+,-, *, /)
Phase 2

Advanced Calculator functionality
Calculator should be able to do basic arithmetic (exponents, square roots)
Phase 3

User should be given a menu of Calculator functionality
User should be able to choose intended functionality
Optional Extensions

Does your calculator allows addition of more then 2 numbers in one go? eg: 2 + 3 + 4
	
=end

#choose number
#is there an operator?
#choose and operator ELSE evaluate
#is there another number?
#choose another number ELSE evaluate


require "pry"

puts "Please enter number"
initial_input = gets

puts "What operator would you like to choose? + - * /"
operators = ["+", "-", "*", "/", "="]
operator_input = gets
if operators[operator_input].nil?
	puts "Choose again"
else
	puts "Is there another number?"
	next_number = gets
	if next_number isn't a number
		puts "Choose again"
	else 
		return initial_input + operator.to_sym + next_number

binding.pry




