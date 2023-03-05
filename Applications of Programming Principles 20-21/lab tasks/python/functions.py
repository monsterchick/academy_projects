"""
Python sampler: Functions
"""

print('\nthis is for question b:')
def display_something_a_fixed_number_times():
    """b – Create a function loop to display something a fixed number of times"""
    count = 1
    max = 100
    while count <= max:
        print("2 x " + str(count) + "= " + str(2 * count))
        count += 1
    print("finishes!")
display_something_a_fixed_number_times()

print('\nthis is for question c:')
fruits = ['apple', 'orange', 'pear']    #list
awards = {'first': 'gold', 'second': 'silver', 'third': 'bronze'}   #dictionary
tom = ('male', 22)  #tuple
mobile = 'hello'   #string

def print_sequence(sequence):
    """
    c – Create a function that displays a sequence parameter.
    parameter is a list
    """
    for item in sequence:
        print(item)
    print('')
    for item in reversed(sequence):
        print(item)
    print('')

print_sequence(fruits)
print_sequence(awards)
print_sequence(tom)
print_sequence(mobile)

print('this is for question d:')
def get_user_input():
    """
    d – Create a function that gets user input
    this function gets user input.
    :return result is to take true or false from the user's answer
    """
    while True:
        ask = input("you are a boy, yes or no?")
        if ask in ('YES','yes', 'Yes', 'Y','y'):
            result = True
            break
        elif ask in ('NO', 'no', 'No', 'N','n'):
            result = False
            break
    return result
print(get_user_input())

print('\nthis is for question e:')
def do_you_have_one_pound(money):
    """
    e – Create a function with a boolean parameter
    this function is asking if the user a boy or not
    :param receive the answer of the user
    :return result is to show the consequence
    """
    if money in ('YES','yes', 'Yes', 'Y','y'):
        money = True
    elif money in ('NO', 'no', 'No', 'N','n'):
        money = False
    result = 'you have one pound is ' + str(money)
    return result
print(do_you_have_one_pound('n'))

print('\nthis is for question f:')
def displayString(string, quantity = 3):
    """
    f – Create a function with an optional parameter
    :param string is the string that user wants it to be display
    :param quantity is the number of times specified by the int parameter
    """
    count = 1
    for i in range(quantity):
        print('this is {}'.format(count) + ': ' + string)
        count += 1
displayString('Kelvin')
displayString('Kelvin', quantity = 10)

print('\nthis is for question g:')
def multiplication(num1, num2, num3):
    """
    g – Create a function does a calculation and is called using keywords
    :param num1, num2, num3 are the numbers to be multiplied
    :return result is the consequence of the calculation
    """
    answer = num1 * num2 * num3
    result = str(num1) + ' X ' + str(num2) + ' X ' + str(num3) + ' = ' + str(answer)
    return(result)
print(multiplication(382.5, 5, 4))

print('\nthis is for question h:')
def find_difference_between_age_and_shoe_size():
    '''
    h – Create a function that finds the difference between your age and shoe size
    '''
    askAge = float(input('What is your age?(number only)'))
    if askAge < 3:
        shoeSize = '0-23(EU)'
    elif askAge >= 3 and askAge < 6:
        shoeSize = '23-30.5(EU)'
    elif askAge >= 6 and askAge < 10:
        shoeSize = '30.5-38(EU)'
    elif askAge >= 10:
        shoeSize = 'this is only for the people whose age are less than 10.'
    else:
        shoeSize = 'cannot found it'
    return shoeSize
print(find_difference_between_age_and_shoe_size())
print(find_difference_between_age_and_shoe_size())
print(find_difference_between_age_and_shoe_size())


sportList = ['basketball', 'football', 'badminton', 'race', 'ride', 'ski', 'boxing', 'baseball', 'swimming']
nameList = ['Tom','Jack','Suzy','Jerry','Calvin','Ben','Marry', 'Jimmy','Emily']
numberList = [1,10,54]
#Use the 1st built-in function
#enumerate()
print('\n1st built-in function:')
for i, element in enumerate(sportList):
    print(i, element)

#Use the 2nd built-in function
#zip()
print('\n2nd built-in function:')
zipped = list(zip(nameList, sportList))
print(zipped)

#Use the 3rd built-in function
#all()
print('\n3rd built-in function:')
for i in numberList:
    allTheSame = all([i > 10])
    print(allTheSame)
