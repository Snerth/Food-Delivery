from flask import Flask
from flask_mysqldb import MySQL
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config["MYSQL_HOST"] = "localhost"
app.config["MYSQL_USER"] = "root"
app.config["MYSQL_PASSWORD"] = "1234"
app.config["MYSQL_DB"] = "delivery"

mysql = MySQL(app)

def fetchData(sql):
  cur = mysql.connection.cursor()
  cur.execute(sql)
  fetchdata = cur.fetchall()
  cur.close()
  return json.dumps(fetchdata)

@app.route('/get/pizzas')
def get_pizzas(): 
  return fetchData("select p.id, p.pizza_name, p.pizza_price, p.pizza_weight, i.ingredients_list from pizzas p join pizzas_ingredients i on p.pizza_ingredients = i.id")

@app.route('/get/salads')
def get_salads():
  return fetchData("select s.id, s.salad_name, s.salad_price, s.salad_weight, i.ingredients_list from salads s join salads_ingredients i on s.salad_ingredients = i.id")

@app.route('/get/soups')
def get_soups():
  return fetchData("select s.id, s.soup_name, s.soup_price, s.soup_weight, i.ingredients_list from soups s join soups_ingredients i on s.soup_ingredients = i.id")

@app.route('/get/drinks')
def get_drinks():
  return fetchData("select d.id, d.drink_name, d.drink_price, d.drink_weight, i.ingredients_list from drinks d join drinks_ingredients i on d.drink_ingredients = i.id")

@app.route('/get/desserts')
def get_desserts():
  return fetchData("select * from desserts")

if (__name__) == "__main__":
  app.run(debug=True)

