"""
Python sampler: Files (optional)
these are to make some practising of Files
"""
import os

print('this is question b:')


def read_file():
    """
    all the lines of a file into a list
    Iterate through that list displaying each line prefixed with a line number
    """
    list = []
    line_count = 0
    file = open('file_to_open.txt')
    text = file.read()
    file.close()
    textSplit = text.split('\n')

    for i in textSplit:
        line_count += 1
        list.append(str(line_count) + ':' + i)
    print(list)


read_file()
print('\nthis is question c:')


def with_open_way_read_file():
    list = []
    line_count = 0
    with open('file_to_open.txt', 'r') as file:
        text = file.read()
        textSplit = text.split('\n')
        for i in textSplit:
            line_count += 1
            list.append(str(line_count) + ':' + i)
        file.close()
        print(list)


with_open_way_read_file()
print('\nthis is question d:')

# can only read first line of the file!
def find_str_in_file(filename, stringtofind):       #can only search the word in first line
    """
    d – Write a function which finds a string in a file. (Hint: this can be done in 6 lines of code.)
    :param filename is the file that you want to find a string
    :param stringtofind is the string that you want to find out from a file
    """
    with open(filename, 'r') as file:
        for line in file:
            if stringtofind in line:
                return stringtofind
            else:
                return None


print(find_str_in_file("file_to_open.txt", 'Kelvin'))
print(find_str_in_file("file_to_open.txt", 'Hello'))

print('\nthis is question e:')


def copy_file(filename, filecopy):
    """
    this function is to copy a file's content into another text file
    :param filename is the file that to copy content from
    :param filecopy is the file that to copy into
    """
    with open (filename, 'r') as file:
        text = file.read()
        file.close()
    with open(filecopy, 'w') as filecopied:
        textsplit = text.split('\n')
        for word in textsplit:
            filecopied.write(word + '\n')

    print('copy finished!')
    filecopied.close()


copy_file('file_to_open.txt', 'copied_file.txt')
print('\nthis is question f:')


def write_text_into_file(filename):
    with open(filename, 'w') as file:
        words = input('please input any text you want to write into the file: ')
        wordToSave = words.split('.')
        for i in wordToSave:
            file.write(i + '\n')
        file.close()
    print('save finished!')


write_text_into_file("file_to_write.txt")
print('\nthis is question g:')


def setting_to_current_directory(pathToGo):
    os.chdir(pathToGo)
    print('current directory is ' + os.getcwd())      # to get the current directory

    fileInDir = os.listdir('.') # to show out all file in the specific path
    print(fileInDir)

setting_to_current_directory('C:\\Users\\Monster Chick\\OneDrive - Bournemouth University\\term2\\Python\\Sampler\\test_folder')