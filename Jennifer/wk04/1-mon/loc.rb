=begin
	
line of code

write a program loc.rb to count and puts the number of lines of code in a file

eg. say you have a file data.txt with the following contents

cat
dog
rabbit
when I run the program, it should prompt for a filename

$ ruby loc.rb
$ Enter filename: data.txt
$ 3 line(s)
hint

lookup gets method and the readlines method
	
=end

lines = 0
puts "Enter file name: "
file_name = gets.chomp
File.readlines(file_name).each do |line|
  lines = lines + 1
end
puts "#{lines} line(s)"