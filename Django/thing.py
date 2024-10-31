class User:
    def __init__(self, id: int, first_name: str, last_name: str):
        self.id = id
        self.first_name = first_name
        self.last_name = last_name

    def __str__(self):
        return f'User ID: {self.id} \nFirst Name: {self.first_name} \nLast Name: {self.last_name}'


fruits = ['apple', 'orange', 'lime']
basket = []

for fruit in fruits:
    basket.append(fruit)
    for letter in fruit:
        print(letter)

print(basket)