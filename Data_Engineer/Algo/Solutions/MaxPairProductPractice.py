# Uses python3
n = int(input())
a = [int(x) for x in input().split()]
product = 0
for i in range(n):
    for j in range(i + 1, n):
        product = max(product, a[i] * a[j])

print(product)


# Uses python3
n = int(input())
a = [int(x) for x in input().split()]
a = sorted(a)
answer = max(a[0] * a[1], a[-2] * a[-1])
print(answer)