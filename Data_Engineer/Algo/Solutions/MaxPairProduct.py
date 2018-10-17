# Uses python3
n = int(input())
a = [int(x) for x in input().split()]
a = sorted(a)
answer = max(a[0] * a[1], a[-2] * a[-1])
print(answer)