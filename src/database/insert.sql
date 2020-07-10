insert into pizzas_ingredients(ingredients_list)
values(
    "dough, salmon, cream sauce, mozzarella cheese,
    parmesan cheese, spinach"
),(
    "dough, cream, champignon mushrooms,
    mozzarella cheese, chicken fillet, truffle oil"
),(
    "dough, mozzarella cheese, parmesan cheese, dor blue cheese,
    edam cheese"
),(
    "dough, mozzarella cheese, chicken fillet,
    red pepper, marinated mushrooms,
    mayonnaise, pizza sauce, basil, olive oil"
),(
    "dough, pizza sauce, basil, olive oil,
    mayonnaise, mozzarella cheese, chicken meat,
    dor blue cheese, spinach, cabanos sausages,
    gogoshary"
),(
    "dough, bacon, chicken fillet, salami, 
    mozzarella cheese, gogoshary, pizza sauce,
    barbeque sauce"
),(
    "dough, mozzarella cheese, cabanos sausages,
    ostrova sausages, spicy pepper, gogoshary,
    mushrooms, green olives, salami, pizza sauce,
    basil, olive oil"
),(
    "dough, mozzarella cheese, salami, 
    ground pepper, chili pepper, pizza sauce,
    basil, olive oil"
),(
    "dough, mozzarella cheese, ham, 
    marinated mushrooms, black olives,
    pizza sauce, basil, olive oil"
);

insert into pizzas(pizza_name, pizza_weight,
pizza_price, pizza_ingredients)
values(
    "Salmon Pizza",
    460,
    90,
    1
),(
    "Funghi",
    500,
    90,
    2
),(
    "Four Cheeses",
    380,
    72,
    3
),(
    "Rancho",
    580,
    72,
    4
),(
    "Mario",
    550,
    72,
    5
),(
    "Barbeque",
    560,
    76,
    6
),(
    "Diablo",
    520,
    72,
    7
),(
    "Pepperoni",
    475,
    72,
    8
),(
    "Neapolitana",
    510,
    72,
    9
);

insert into salads_ingredients(ingredients_list)
values(
    "canned tuna, egg, lolo salad, 
    iceberg salad, red onion, cherry tomatoes,
    soy sauce, olive oil, lemon,
    kalamata olives, black pepper"
),(
    "cherry tomatoes, cucumbers, bell pepper,
    red onion, kalamata olives,
    cow cheese, olive oil, lime juice,
    oregano, basil"
),(
    "iceberg salad, spinach, caeasar sauce,
    chicken, cherry tomatoes, toast, quail egg,
    parmesan cheese"
),(
    "iceberg salad, caeasar sauce, shrimps,
    thyme, cherry tomatoes, toast, quail egg,
    parmesan cheese"
);

insert into salads(salad_name, salad_weight,
salad_price, salad_ingredients)
values(
    "Tuna Salad",
    310,
    68,
    1
),(
    "Greek Salad",
    290,
    51,
    2
),(
    "Caesar With Chicken",
    280,
    63,
    3
),(
    "Caeasar With Shrimps",
    280,
    80,
    4
);

insert into soups_ingredients(ingredients_list)
values(
    "chicken bouillon, chicken fillet, 
    homemade noodles, pepper, celery root, 
    greenery, sour cream, hot pepper"
),(
    "sausage assortiment, beef, tomato juice,
    marinaded cucumbers, olives, parsley,
    chicken bouillon, sour cream, lemon"
),(
    "beans, garlic, olive oil, vegetable bouillon,
    spices, green onion, crackers"
),(
    "beef bouillon, beef, bell pepper, onion,
    corn, beans, parsley, spices, chili pepper,
    nachos"
),(
    "chicken bouillon, bun, chicken thigh,
    champignon mushrooms, bechamel sauce,
    cream, olive oil, black pepper, parsley"
);

insert into soups(soup_name, soup_weight, 
soup_price, soup_ingredients)
values(
    "Chicken Zama",
    350,
    38,
    1
),(
    "Solyanka",
    300,
    39,
    2
),(
    "Bean Soup",
    340,
    38,
    3
),(
    "Mexica Soup",
    350,
    46,
    4
),(
    "Chicken Cream Soup",
    300,
    46,
    5
);

insert into desserts(dessert_name, dessert_weight, 
dessert_price)
values(
    "Poppy Seed Cheesecake",
    140,
    38
),(
    "Cheesecake",
    140,
    38
),(
    "Sacher Cake",
    140,
    38
),(
    "Tiramisu",
    120,
    38
),(
    "Cherry Mania",
    200,
    31
),(
    "Mr Nico",
    200,
    31
),(
    "Fruit Salad",
    290,
    34
),(
    "Greek Yogurt",
    225,
    31
),(
    "Tropic Mango",
    260,
    31
);

insert into drinks_ingredients(
    ingredients_list
)
values(
    "ice-cream, mango juice, banana"
),(
    "chocolate ice-cream, milk"
),(
    "strawberry ice-cream, strawberry sauce,
    milk"
),(
    "vanilla ice-cream, milk"
),(
    "water, limon juice, limon"
),(
    "water, orange juice, orange"
),(
    "orange juice"
),(
    "coffee, milk"
),(
    "coffee milk"
);

insert into drinks(drink_name, drink_weight, 
drink_price, drink_ingredients)
values(
    "Banana Mango Milk Shake",
    300,
    25,
    1
),(
    "Chocolate Milk Shake",
    300,
    25,
    2
),(
    "Strawberry Milk Shake",
    300,
    25,
    3
),(
    "Vanilla Milk Shake",
    300,
    25,
    4
),(
    "Limonade",
    420,
    24,
    5
),(
    "Orangeade",
    420,
    24,
    6
),(
    "Orange Juice",
    350,
    31,
    7
),(
    "Cappuccino",
    150,
    18,
    8
),(
    "Latte",
    250,
    18,
    9
);