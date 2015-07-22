class SumSquareDifference
  attr_reader :answer

  def initialize(range)
    @range = range
    @answer = difference
  end

  def difference
    square_of_sum - sum_of_squares
  end

  def sum_of_squares
    @range.map { |n| n**2 }.reduce(:+)
  end

  def square_of_sum
    (@range.reduce(:+))**2
  end
end

puts SumSquareDifference.new(1..10).answer
puts SumSquareDifference.new(1..100).answer
