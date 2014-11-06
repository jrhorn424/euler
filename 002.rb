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
  if n == 0 || n == 1
    1
  else
    fibonacci(n-2) + fibonacci(n-1)
  end
end

def even?(n)
  n % 2 == 0
end

puts sum_even_fibonacci_numbers(4000000)
