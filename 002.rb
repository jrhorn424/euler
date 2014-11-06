# See:
#
#   * http://stackoverflow.com/a/12586717/402618
#   * http://stackoverflow.com/a/12180829/402618

def sum_even_fibonacci_numbers(upto)
  generate_fibonacci_array(upto).select(&:even?).reduce(:+)
end

def generate_fibonacci_array(upto)
  arr = []
  i = 0
  while fibonacci(i) < upto
    arr.push fibonacci(i)
    i += 1
  end
  arr
end

def fibonacci(n)
  fibonacci_r(0, 1, n)
end

def fibonacci_r(a, b, n)
  n == 0 ? a : fibonacci_r(b, a + b, n - 1)
end

def even?(n)
  n % 2 == 0
end

puts sum_even_fibonacci_numbers(4000000)
