import os

def list_files_in_directory(directory_path):
    # List all the files in the provided directory
    files = os.listdir(directory_path)
    counter = 1
    li = []
    for i in files:
        str1 = f"import bag{str(counter)} from '../images/calendars/{str(counter)}.png';"
        counter += 1
        li.append(str1)
    
    return li

# Input the directory path

directory = "F:\\mld-main\\src\\images\\calendars"
# Get the list of .jpg files
files = list_files_in_directory(directory)

# Print the list of file names
print("Files found in the directory:")
li = sorted(files)
for i in files:
    print(i)
