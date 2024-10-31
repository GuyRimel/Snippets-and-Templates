from datetime import datetime

name = 'Robby'
age = 23

print(name, 'is', age)

number: int = 10

def show_datetime():
    print(datetime.now())


print('this is the current date and time: ')

show_datetime()


def greet(name: str) -> None:
    print(f'Hello, {name}!')


greet(name)

class Car:
    def __init__(self, color: str, HP: int) -> None:
        self.color = color
        self.HP = HP

volvo: Car = Car('red', 300)

print(volvo.color)

for letter in name:
    print(letter)