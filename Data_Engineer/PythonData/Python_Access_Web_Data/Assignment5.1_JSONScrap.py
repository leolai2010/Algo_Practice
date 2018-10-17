import urllib.request, urllib.parse, urllib.error
import json

while True:
    address = input('Enter location: ')
    if len(address) < 1: break

    url = address
    print('Retrieving', url)
    uh = urllib.request.urlopen(url)
    data = uh.read().decode()
    print('Retrieved', len(data), 'characters')
    js = json.loads(data)
    count = 0 
    sumof = 0
    for counts in js["comments"]:
        count +=1
        sumof += int(counts['count'])
    print("Count:", count)
    print(sumof)