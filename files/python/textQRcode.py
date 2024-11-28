# pip install segno qrcode-artistic
import segno
qrcode = segno.make_qr("https://ttclubs.github.io/", error='h')
qrcode.save(f"output/web2.png", scale=10, dark='mintcream', border=2, light='navy')