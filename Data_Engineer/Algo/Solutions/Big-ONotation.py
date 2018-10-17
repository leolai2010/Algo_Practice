n = int(input())
def FibFast(n): #<- O(n)
    k = [0, 1] #<- O(2)
    for i in range (2, n+1): #<- O(n)
        k.append(k[-1] + k[-2]) #<- O(n)
    return k #<- O(1)
print(FibFast(n))

# O(n) + O(2) + O(n) * O(n) + O(1) = O(n^2)

