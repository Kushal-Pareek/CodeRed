import base64
#app convert text to base32

text = input("Input Text : "))
encoded = base64.b64encode(text.encode(encoding='UTF-8'))
print(encoded)
