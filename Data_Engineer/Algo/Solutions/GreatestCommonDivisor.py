# Naive

def naivegcd():
    a = int(input())
    b = int(input())
    for d in range(1, (a+b)):
        if a%d == 0 and b%d == 0:
            num = d
    return num
print(naivegcd())

#efficient
#Euclidean Algorithm    
a = int(input())
b = int(input())
def EuclidGCD(a, b):
    if b == 0:
        return a 
    else:
        return EuclidGCD(b, a%b)
print(EuclidGCD(a, b))

# Explanation for Efficient GCD
# recursion method
# assume b = 40
# and a = 80
# base case if b is 0 then return a 
# forward case is: if b is not 0 then a modulus by b 
# and put back in the function as (40, 0) because (b, a)
# then this case returns 40 because a in position of b is now 0 
# what if a = 120 and b is 80?
# b is not 0 then a modulus b have 40 as remainder 
# plug it back into the recursive function (80, 40) = same case as above
# what if a = 80 and b = 120?
# b is not 0 then a modulus b have 80 as remainder
# plug it back into the recursive function (120, 80) = same case as above