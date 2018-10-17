# 6.5 Write code using find() and string slicing (see section 6.10) to extract the number at the end of the line below. 
# Convert the extracted value to a floating point number and print it out.
text = "X-DSPAM-Confidence:    0.8475"
fn = text.find('0')
ln = text.find('5')
combine = text[fn:ln+1]
float(combine)
print(combine)

# 7.1 Write a program that prompts for a file name, 
# then opens that file and reads through the file, 
# and print the contents of the file in upper case. 
# Use the file words.txt to produce the output below.
fname = "words.txt"
fh = open(fname)
for line in fh:
    line = line.rstrip()
    info = fh.read()
    biginfo = info.upper()
    print(biginfo)

# 7.2 Write a program that prompts for a file name, 
# then opens that file and reads through the file, looking for lines of the form:
# X-DSPAM-Confidence:    0.8475
# Count these lines and extract the floating point values from each of the lines
# and compute the average of those values and produce an output as shown below. 
# Do not use the sum() function or a variable named sum in your solution.
# Use the file name mbox-short.txt as the file name
fname = "mbox-short.txt"
fh = open(fname)
total = 0
count = 0
for line in fh:
    if line.startswith("X-DSPAM-Confidence:"):
        count += 1
        total += float (line[20:26])
avg = str(total/count)
print("Average spam confidence: " + avg)

# 8.4 Open the file romeo.txt and read it line by line. 
# For each line, split the line into a list of words using the split() method. 
# The program should build a list of words. 
# For each word on each line check to see if the word is already in the list and if not append it to the list. 
# When the program completes, sort and print the resulting words in alphabetical order.
fname = "romeo.txt"
fh = open(fname)
lst = list()
for line in fh:
    line.rstrip()
    word = line.split()
    for element in word:
    	[lst.append(element) for word in line if element not in lst]
lst.sort()
print(lst)

# 8.5 Open the file mbox-short.txt and read it line by line. When you find a line that starts with 'From '
# You will parse the From line using split() 
# and print out the second word in the line (i.e. the entire address of the person who sent the message). 
# Then print out a count at the end.
fname = "mbox-short.txt"
if len(fname) < 1 : fname = "mbox-short.txt"

fh = open(fname)
count = 0
for line in fh:
    if line.startswith('From '):
        words = line.split()
        print(words[1])
        count += 1
print("There were", count, "lines in the file with From as the first word")

# 9.4 Write a program to read through the mbox-short.txt and figure out who has the sent the greatest number of mail messages. 
# The program looks for 'From ' lines and takes the second word of those lines as the person who sent the mail. 
# The program creates a Python dictionary that maps the sender's mail address to a count of the number of times they appear in the file. 
# After the dictionary is produced, the program reads through the dictionary using a maximum loop to find the most prolific committer.
name = "mbox-short.txt"
if len(name) < 1 : name = "mbox-short.txt"

handle = open(name)
counts = dict()
wordlist = list()
for line in handle:
    if line.startswith('From '):
        line = line.split()
        wordlist.append(line[1])
for word in wordlist:
        counts[word] = counts.get(word,0) + 1
bigcount = None 
bigword = None
for word,count in counts.items():
    if bigcount is None or count > bigcount:
        bigword = word 
        bigcount = count
print(bigword, bigcount)

# 10.2 Write a program to read through the mbox-short.txt and 
# figure out the distribution by hour of the day for each of the messages. 
# You can pull the hour out from the 'From ' line by finding the time and then splitting the string a second time using a colon.
name = "mbox-short.txt"
if len(name) < 1 : name = "mbox-short.txt"
handle = open(name)

counts = dict()
wordlist = list()
timelist = list()
for line in handle:
    if line.startswith('From '):
        time = line.split()[5].split(":")
        counts[time[0]] = counts.get(time[0],0) + 1
clist = list()
for key, val in counts.items():
    newlist = (key, val)
    clist.append(newlist)
clist = sorted(clist)
for key, val in clist:
    print(key, val)