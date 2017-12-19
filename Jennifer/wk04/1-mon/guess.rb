#Title: Guess The Number

#Activity:

#You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.
#Specification:

#The user should be asked to guess a number
#If the user's guess is correct, the user should see a congratulatory message
#If the user's guess is not correct, the user should be asked to guess the number again.
#Extensions:

#Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
#Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"

require "pry"

secret_number = rand 10

guess_number = gets.to_i #gets returns a string to_i turns a string to an integer

loop
	puts ("Guess my secret number!")

	if guess_number > 5
		puts(guess_number)
		puts("Guess lower!")
	end

	if guess_number < 5
		puts(guess_number)
		puts("Guess higher") 
	end

	if guess_number == secret_number
		puts (guess_number)
		puts("You're right!")
		break
	end
end

#do it again with a while loop 

binding.pry

puts ("end of program")




