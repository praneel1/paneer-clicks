import os

folder_path = r'C:\Users\Praneel Maitra\Desktop\random_shit\edu_chain\portfolio\src\images'

images = sorted([f for f in os.listdir(folder_path) if f.lower().endswith(('.jpg', '.jpeg', '.png'))])


for i, img in enumerate(images, start=1):
    ext = os.path.splitext(img)[1]
    new_name = f'photo{i:02}{ext}'  # Rename with leading zeros
    os.rename(os.path.join(folder_path, img), os.path.join(folder_path, new_name))
    print(f'Renamed: {img} ➡️ {new_name}')
