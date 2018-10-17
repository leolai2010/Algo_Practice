import urllib.request, urllib.parse, urllib.error
import xml.etree.ElementTree as ET

while True:
    address = input('Enter location: ')
    if len(address) < 1: break

    url = address
    print('Retrieving', url)
    uh = urllib.request.urlopen(url)
    data = uh.read()
    print('Retrieved', len(data), 'characters')
    tree = ET.fromstring(data)
    counts = tree.findall('.//count')
    count = 0
    sumof = 0
    for item in counts:
        count +=1
        sumof += int(item.text)
    print("Count:", count)
    print(sumof)