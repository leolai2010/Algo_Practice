# Naive
n = int(input())
def FibRecurs(n):
    if(n <= 1):
        return (n) 
    else:
        return (FibRecurs(n-1) + FibRecurs(n-2))
print(FibRecurs(n))

# Efficient
def FibFast(n):
    k = [0, 1]
    for i in range (2, n+1):
        k.append(k[-1] + k[-2])
    return k[-1]
print(FibFast(n))

# Explanation for Efficient Fibonacci
# if n = 3 
# initial array = [0, 1]
# i is running through loop of index 2 and index 4 (n=3)
# what is n at index of 2? it is 0 + 1 
# appended to array 
# array is now = [0, 1, 1] 
# what is n at index of 3? it is 1 + 1 
# appended to array 
# array is now = [0, 1, 1, 2]

