# pip install segno qrcode-artistic
import segno
qrcode = segno.make("https://ttclubs.github.io/files/evaluation/report.pdf", error='h')
qrcode.to_artistic(background='images/doc.png', target='report.png', scale=10, dark='mintcream', border=2, light='navy')