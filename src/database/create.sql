create database delivery;
use delivery;

create table pizzas_ingredients (
    id int AUTO_INCREMENT,
    ingredients_list text,
    primary key(id)
);

create table pizzas (
    id int AUTO_INCREMENT,
    pizza_name text,
    pizza_weight int,
    pizza_price int,
    pizza_ingredients int,
    primary key(id),
    foreign key(pizza_ingredients) references pizzas_ingredients(id)
);

create table salads_ingredients (
    id int AUTO_INCREMENT,
    ingredients_list text,
    primary key(id)
);

create table salads (
    id int AUTO_INCREMENT,
    salad_name text,
    salad_weight int,
    salad_price int,
    salad_ingredients int,
    primary key(id),
    foreign key(salad_ingredients) references salads_ingredients(id)
);

create table soups_ingredients (
    id int AUTO_INCREMENT,
    ingredients_list text,
    primary key(id)
);

create table soups (
    id int AUTO_INCREMENT,
    soup_name text,
    soup_weight int,
    soup_price int,
    soup_ingredients int,
    primary key(id),
    foreign key(soup_ingredients) references soups_ingredients(id)
);

create table desserts (
    id int AUTO_INCREMENT,
    dessert_name text,
    dessert_weight int,
    dessert_price int,
    primary key(id)
);

create table drinks_ingredients (
    id int AUTO_INCREMENT,
    ingredients_list text,
    primary key(id)
);

create table drinks (
    id int AUTO_INCREMENT,
    drink_name text,
    drink_weight int,
    drink_price int,
    drink_ingredients int,
    primary key(id),
    foreign key(drink_ingredients) references drinks_ingredients(id)
);