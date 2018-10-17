# Uses python3
n = int(input())
def FibFast(n):
    k = [0, 1]
    for i in range (2, n+1):
        k.append(k[-1] + k[-2])
    if n == 0:
        return 0
    else: 
        return k[-1]
print(FibFast(n))