"""
Python sampler: Exceptions
these program is for practising exceptions
"""

print('This is question b:')


def display_num_of_lines(filename):
    """
    b – Write a function to open a file and display the number of lines it contains
    :param filename is the file name for reading
    """
    result = ''
    try:
        file = open(filename, 'r')
        text = len(file.readline())
        file.close()
        result = text
    except FileNotFoundError:
        result = 'cannot find the file'
    finally:
        print('program finished!')
        return result

print(display_num_of_lines("file_to_open.txt"))

print('\nThis is question c:')


def display_num_of_words(filename):
    """
    c – Write a function to open a file and display the number of words in the first line
    :param filename is the file name for reading
    """

    try:
        file = open(filename, 'r')
        text = file.readline()
        word_list = text.split()
        num_of_words = len(word_list)
        file.close()
        print('the number of words in first line is: ' + str(num_of_words))
    except FileNotFoundError:
        print('the file is not found!')
    except UnicodeDecodeError:
        print('unicode decodes are wrong')
    except Exception:
        print('there is something wrong')
    finally:
        print('program finished!\n')


# a file that is existent with some text
display_num_of_words("file_to_open.txt")

# a file that is not plain text
display_num_of_words('E://PyCharm 2020.3.3//bin//pycharm64.exe')

# a non-existent file
display_num_of_words("bournemouth.txt")

# an existent folder
display_num_of_words('test_folder')

print('This is question d:')


def add_two_parameters(para1, para2):
    result = para1 + para2
    return result


# test with two ints
print(add_two_parameters(1, 99))

# test with two floats
print(add_two_parameters(0.55, 5.45))

# test with an int and a float
print(add_two_parameters(15, 1.99))

# test with two strings
print(add_two_parameters('I love ', 'bournemouth'))

# test with a string and an int (eg. '2' and an int)
# print(add_two_parameters('2', 2))      # case in a string and a int is not work

# test with two booleans
print(add_two_parameters(True, True))

print('\nThis is question e:')


def divide_two_parameter(para1, para2):
    global result
    try:
        result = para1 / para2

    except Exception as e:
        print('there is a wrong:', e)
    finally:
        return result


# 10 as the dividend and 3 as the divisor (i.e. 10 ÷ 3)
print(divide_two_parameter(10, 3))

# 21 as the dividend and 0 as the divisor
print(divide_two_parameter(21, 0))

print('\nThis is question f:')


def explore_exception_syntax_have_not_used():
    num1 = 25
    num2 = 10
    result = ''

    try:
        result = num1 / num2
    except ZeroDivisionError as e:
        result = 'result cannot be calculated out because ' + str(e)
    finally:
        return result
print(explore_exception_syntax_have_not_used())

