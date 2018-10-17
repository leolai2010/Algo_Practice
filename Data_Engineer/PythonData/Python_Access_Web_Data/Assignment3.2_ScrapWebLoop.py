import urllib.request, urllib.parse, urllib.error
from bs4 import BeautifulSoup
import ssl 
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = input('Enter URL:')
position = int(input('Enter position:')) - 1
times = int(input('Enter process times:'))
while times > 0:
    html = urllib.request.urlopen(url, context=ctx).read()
    soup = BeautifulSoup(html, 'html.parser')
    tags = soup('a')
    url = tags[position].get('href', None)
    name = tags[position].contents[0]
    times -= 1
print('URL is:', url)
print("Name is:", name)