import urllib.request, urllib.parse, urllib.error
from bs4 import BeautifulSoup
import ssl 
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = input('Enter -')
html = urllib.request.urlopen(url, context=ctx).read()
soup = BeautifulSoup(html, 'html.parser')
total = 0
nums = list()
tags = soup('span')
for tag in tags:
    newnums = int(tag.contents[0])
    total += newnums
print(total)