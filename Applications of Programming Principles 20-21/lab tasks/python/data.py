"""A single line docstring has text straight after the quotes."""
"""Heading of a multi-line is followed by a blank line.

Then other information can appear below that.
For example, function parameters and return types go here.
And the closing quotes go below on a line of their own.
"""

print("Hello World!")
print(__doc__)

print("\na)")
num1 = int(3.14159265358979323846)
num2 = float(3.14159265358979323846)
num3 = True
num4 = str("Hey, Siri")

print(type(num1))
print(type(num2))
print(type(num3))
print(type(num4))

print("\nb)")
title = str("OLD MAN AND SEA")
year = int(1952)
price = float(233.58)
brandNew = True
book = []
book.append(title)
book.append(year)
book.append(price)
book.append(brandNew)

print(book)

employee = {'name':'jerry',
            'age':18,
            'salary':'$6300'}

month = {1:'Jan',
         2:'Feb',
         3:'Mar',
         4:'Apr',
         5:'May',
         6:'Jun',
         7:'Jul',
         8:'Aug',
         9:'Sep',
         10:'Oct',
         11:'Nov',
         12:'Dec'}
print(month[3])


print("\nc)")
fruit = ("apple", "balala", "grape")    #a tuple cannot change the value,immutable
#fruit[1] = ("banana")

device = ["pc", "mobile", "laptop"]     #a list can change the value
device[2] = "laptop"

brand = {"Apple":"iphone",  #dictionary can change the value
         "Amazon":"Kindle",
         "Tesla":"fish"}
brand.update({"Tesla":"Model Y"})

print(fruit)
print(device)
print(brand)

print("\nd)")
print(len(fruit))
print(max(fruit))
print(min(fruit))

print(len(device))
print(max(device))
print(min(device))

print("")
device.pop(2)   #delete an element
print(device)
device.append("TV")
print(device)
device.remove("pc")
print(device)

print("")
device[1] = "hello kitty"
print(device)
device.append("Mickey Mouse")
print(device)
device.reverse()
print(device)