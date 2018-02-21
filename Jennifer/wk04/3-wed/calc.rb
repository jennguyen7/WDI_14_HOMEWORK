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


# def calculator
#     puts "what operators do you want to use(+,-,*,/,**,sqrt,quit)?"
#     op = gets.chomp
#
#     while op != 'quit'
#         puts "type the first number"
#         first_num = gets.chomp.to_i
#         puts "type the second number.(if you select sqrt, never mind ths)"
#         second_num = gets.chomp.to_i
#
#         case op
#          when '+'
#            result = first_num + second_num
#          when '-'
#            result = first_num - second_num
#          when '*'
#            result = first_num * second_num
#          when '/'
#            result = first_num / second_num
#          when '**'
#            result = first_num ** second_num
#         when 'sqrt'
#           result = Math.sqrt(first_num)
#         end
#         puts "result is #{result}"
#
#         puts "what operators do you want to use(+,-,*,/,**,sqrt,quit)?"
#         op = gets.chomp
#     end
# end
# calculator

def multi_calculation
  puts "what operators do you want to use(+,-,*,/,**,sqrt,quit)?" # 2 + 2 * 3
  op = gets.chomp.gsub(/\s+/,"").split('')

  new_arr = []
  op.each do |elem|
    if elem.match(/\d/)
      elem = elem.to_i
      new_arr << elem
    elsif elem == "+"
      r = '+'.to_sym
      p r
    end
  end
  p new_arr
  # p new_arr.inject(r)
end
multi_calculation



