import io
import segno
from PIL import Image

URL = 'https://ttclubs.github.io/'
LOGO = 'images/flagSmall.png'
OUTPUT = f'output/website.png'

# Make QR code
qrcode = segno.make_qr(URL, error='h')
qrcode.save(OUTPUT, scale=10, dark='mintcream', border=2, light='navy')

# Now open that png image to put the logo
img = Image.open(OUTPUT).convert("RGBA")
width, height = img.size

# How big the logo we want to put in the qr code png
logo_size = 100

# Open the logo image
logo = Image.open(LOGO).convert("RGBA")

# Calculate xmin, ymin, xmax, ymax to put the logo
xmin = ymin = int((width / 2) - (logo_size / 2))
xmax = ymax = int((width / 2) + (logo_size / 2))

# resize the logo as calculated
logo = logo.resize((xmax - xmin, ymax - ymin))

# put the logo in the qr code
img.paste(logo, (xmin, ymin, xmax, ymax))

#img.show()
img.save(OUTPUT)