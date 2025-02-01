import os

def rename_images_in_directory(directory_path):
    # List all the files in the provided directory
    files = os.listdir(directory_path)
    
    # Initialize a counter for naming the files
    counter = 1
    
    # Loop through each file in the directory
    for file in files:
        # Check if the file is a .jpg image
        if 1:
            # Create the new file name in the format new_bag_#.png
            new_name = f"cal_{counter}.png"
            
            # Get the full paths for the old and new file names
            old_file_path = os.path.join(directory_path, file)
            new_file_path = os.path.join(directory_path, new_name)
            
            # Rename the file
            os.rename(old_file_path, new_file_path)
            
            # Increment the counter
            counter += 1
            
    print("Renaming complete.")


directory = "F:\\mld-main\\src\\images\\calendars"
# Call the function to rename images
rename_images_in_directory(directory)
