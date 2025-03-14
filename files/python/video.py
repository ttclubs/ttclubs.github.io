import io
import segno
from PIL import Image

URL = 'https://drive.google.com/file/d/1n37BjrFwoye9JcYggHu7QcVYtz7Ji24l/view?usp=sharing'
LOGO = 'images/circle.png'
OUTPUT = f'output/video.png'

# Make QR code
# color reference: https://en.wikipedia.org/wiki/Web_colors
qrcode = segno.make_qr(URL, error='h')
qrcode.save(OUTPUT, scale=10, dark='Gainsboro', border=2, light='DarkCyan')

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