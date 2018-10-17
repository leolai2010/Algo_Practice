name = "mbox-short.txt"
if len(name) < 1 : name = "mbox-short.txt"
handle = open(name)

counts = dict()
timelist = list()
wordlist = list()
for line in handle:
    if line.startswith('From '):
        line = line.split()
        wordlist.append(line[5])
for time in wordlist:
	time = time.split(":") 
timelist.append(time)
for word in wordlist:
        counts[word] = counts.get(word,0) + 1
print(timelist)
print(counts)
bigcount = None 
bigword = None
for word,count in counts.items():
    if bigcount is None or count > bigcount:
        bigword = word 
        bigcount = count
print(bigword, bigcount)