'''
Python sampler: loops
These are for practising loops in python
'''

fruit = ['apple', 'orange', 'banana']
people = {'P':'Peter', 'M':'Marry', 'T':'Tom', 'K':'Kitty'}

print('this is question b:')
for index, item in enumerate(fruit):
    print(str(index) + ': ' + item)

print('\nthis is question c:')
keys = people.keys()
print(keys)

values = people.values()
print(values)

items = people.items()
print(people.items())

unpacked_tuples = dict(zip(keys, values))   # what does unpacked tuple mean?
print(unpacked_tuples)

print('\nthis is question d:')
for i in range(10):
    print(i)

print('')
for i in range(1, 11):
    print(i)

print('')
for i in range(1, 11):
    if i%2 != 0:
        print(i, end = ' ')

print('\n')
for i in range(-100,-89):
    print(i)

print('\nthis is question e:')
numList = [2, 5, 50, 3, 4, 8, 9, 17, 22, 2, 7, 8, 8, 10, 3, 78]
newList = []
sum = 0
i = 0
while sum <= 100:
    sum = sum + numList[i]
    newList.append(i)
    i += 1
print('total: ' + str(sum))
print('quantity of numbers: ' + str(len(newList)))

print('\nthis is question f:')
numList = [2, 5, 50, 3, 4, 8, 9, 17, 22, 2, 7, 8, 8, 10, 3,78]
sum = 0
for i in numList:
    sum = sum + i

if sum >= 200:
    print('target was reached')
else:
    print('target wasn\'t reached')
print('total: ' + str(sum))