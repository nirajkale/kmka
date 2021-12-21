import random

search_space = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'

def generate_password(size=20):
    pwd = ''
    m = len(search_space)
    for i in range(size):
        pwd += search_space[random.randint(0,m-1)]
    return pwd

if __name__ == "__main__":
    
    print(generate_password())
    print(generate_password())
    print(generate_password())
    print(generate_password())
