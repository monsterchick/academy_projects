"""
Python sampler: logic
these are for logic practising in python
"""

print("this is question a:")
a = 10
b = 3.1415
c = False
d = "Hi"
print(type(a))
print(type(b))
print(type(c))
print(type(d))

print('\nthis is question b:')
# integer
age = 21
if age == 21:
    match = True
else:
    match = False
print('you are {}'.format(age) + ' years old is ' + str(match))

# float
salary = 30000.99
if salary == 30000.99:
    match = True
else:
    match = False
print('you salary is {}'.format(salary) + ', that is ' + str(match))

# boolean
response = ''
password_valid = True
if password_valid == True:
    response = 'correct'
else:
    response = 'incorrect'
print(response)

# string
horse = 'animal'
if horse == 'animal':
    match = True
else:
    match = False
print('horse is {}'.format(horse) + ', that is ' + str(match))

print('\nthis is question c:')
# integer
age = 81
if age == 21:
    match = True
else:
    match = False
print('you are {}'.format(age) + ' years old is ' + str(match))

# float
salary = 255.11
if salary == 30000.99:
    match = True
else:
    match = False
print('you salary is {}'.format(salary) + ', that is ' + str(match))

# boolean
password_valid = False
if password_valid == True:
    response = 'correct'
else:
    response = 'incorrect'
print(response)

# string
horse = 'music'
if horse == 'animal':
    match = True
else:
    match = False
print('horse is {}'.format(horse) + ', that is ' + str(match))

print('\nthis is question d:')
# integer
apple = 21
if apple < 0:
    response = 'invalid quantity'
if apple >= 0 and apple < 11:
    response = 'quantity of apple is/are between 0 and 10'
elif apple >= 11 and apple <= 20:
    response = 'quantity of apple are between 11 and 20'
elif apple > 20:
    response = 'quantity of apple is more than 20, which is too more'
print(response)

# float
salary = 9998.5
if salary < 0:
    response = 'no job'
if salary >= 0 and salary < 401:
    response = 'low salary'
elif salary >= 401 and salary <= 1200:
    response = 'normal salary'
elif salary > 1200:
    response = 'high salary'
print(response)


# string
animal = 'monkey'
ask = input('please input an animal: ')
response = ''
if ask == animal:
    response = '{} is ROSS''s pet!'.format(ask)
else:
    response = '{} is not ROSS\'''s pet'.format(ask)
print(response)

print('\nthis is question e: ')
for i in range(40, 101):
    print(i)

monkey = 'dddd'
guess = True
if monkey == 'animal' or monkey == 'living thing':
    response = 'correct'
elif monkey == 'fruit' and guess == True:
    response = 'good attempt'
elif not monkey == 'animal' or monkey == 'living thing':
    response = 'incorrect'
else:
    pass
print(response)
