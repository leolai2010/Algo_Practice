import re
name = "regex_sum_107121.txt"
handle = open(name, "r")
total = 0
for line in handle:
    info = re.findall('[0-9]+', line)
    for nums in info:
        total += int(nums)
print(total)