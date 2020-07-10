import React from "react";
import * as R from "ramda";
import { createStore } from "redux";
import { Provider } from "react-redux";
import counter from "./reducer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import MainPage from "./components/MainPage";
import AboutUs from "./components/AboutUs";
import Delivery from "./components/Delivery";
import Contacts from "./components/Contacts";
import ItemsSection from "./components/ItemsSection";
import Footer from "./components/Footer";
import CartModal from "./components/CartModal";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SalmonPizza from "./utils/images/pizzas/Salmon Pizza.png";
import Rancho from "./utils/images/pizzas/Rancho.png";
import Pepperoni from "./utils/images/pizzas/Pepperoni.png";
import Neapolitana from "./utils/images/pizzas/Neapolitana.png";
import Mario from "./utils/images/pizzas/Mario.png";
import Funghi from "./utils/images/pizzas/Funghi.png";
import FourCheeses from "./utils/images/pizzas/Four Cheeses.png";
import Diablo from "./utils/images/pizzas/Diablo.png";
import Barbeque from "./utils/images/pizzas/Barbeque.png";
import CaeasarWithChicken from "./utils/images/salads/Caeasar With Chicken.png";
import CaeasarWithShrimps from "./utils/images/salads/Caeasar With Shrimps.png";
import GreekSalad from "./utils/images/salads/Greek Salad.png";
import TunaSalad from "./utils/images/salads/Tuna Salad.png";
import BeansSoup from "./utils/images/soups/Beans Soup.png";
import ChickenCreamSoup from "./utils/images/soups/Chicken Cream Soup.png";
import ChickenZama from "./utils/images/soups/Chicken Zama.png";
import MexicaSoup from "./utils/images/soups/Mexica Soup.png";
import Solyanka from "./utils/images/soups/Solyanka.png";
import BananaMangoMilkShake from "./utils/images/drinks/Banana Mango Milk Shake.png";
import Cappuccino from "./utils/images/drinks/Cappuccino.png";
import ChocolateMilkShake from "./utils/images/drinks/Chocolate Milk Shake.png";
import Latte from "./utils/images/drinks/Latte.png";
import Limonade from "./utils/images/drinks/Limonade.png";
import OrangeJuice from "./utils/images/drinks/Orange Juice.png";
import Orangeade from "./utils/images/drinks/Orangeade.png";
import StrawberryMilkShake from "./utils/images/drinks/Strawberry Milk Shake.png";
import VanillaMilkShake from "./utils/images/drinks/Vanilla Milk Shake.png";
import Cheesecake from "./utils/images/desserts/Cheesecake.png";
import CherryMania from "./utils/images/desserts/Cherry Mania.png";
import FruitSalad from "./utils/images/desserts/Fruit Salad.png";
import GreekYogurt from "./utils/images/desserts/Greek Yogurt.png";
import MrNico from "./utils/images/desserts/Mr Nico.png";
import PoppySeedCheesecake from "./utils/images/desserts/Poppy Seed Cheesecake.png";
import SacherCake from "./utils/images/desserts/Sacher Cake.png";
import Tiramisu from "./utils/images/desserts/Tiramisu.png";
import TropicMango from "./utils/images/desserts/Tropic Mango.png";
import { Route, HashRouter } from "react-router-dom";

let store = createStore(counter);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.headerRef = React.createRef();
    this.state = {
      counter: {},
      showCartModal: false,
      pizzasImages: [
        SalmonPizza,
        Funghi,
        FourCheeses,
        Rancho,
        Mario,
        Barbeque,
        Diablo,
        Pepperoni,
        Neapolitana,
      ],
      pizzas: [],
      saladsImages: [
        TunaSalad,
        GreekSalad,
        CaeasarWithChicken,
        CaeasarWithShrimps,
      ],
      salads: [],
      soupsImages: [
        ChickenZama,
        Solyanka,
        BeansSoup,
        MexicaSoup,
        ChickenCreamSoup,
      ],
      soups: [],
      drinksImages: [
        BananaMangoMilkShake,
        ChocolateMilkShake,
        StrawberryMilkShake,
        VanillaMilkShake,
        Limonade,
        Orangeade,
        OrangeJuice,
        Cappuccino,
        Latte,
      ],
      drinks: [],
      dessertsImages: [
        PoppySeedCheesecake,
        Cheesecake,
        SacherCake,
        Tiramisu,
        CherryMania,
        MrNico,
        FruitSalad,
        GreekYogurt,
        TropicMango,
      ],
      desserts: [],
    };
  }

  handleShowCartModal = () => {
    this.setState({
      showCartModal: !this.state.showCartModal,
    });
  };
  componentDidMount() {
    axios
      .all([
        axios.get("http://127.0.0.1:5000/get/pizzas"),
        axios.get("http://127.0.0.1:5000/get/salads"),
        axios.get("http://127.0.0.1:5000/get/soups"),
        axios.get("http://127.0.0.1:5000/get/desserts"),
        axios.get("http://127.0.0.1:5000/get/drinks"),
      ])
      .then(
        axios.spread((...responses) => {
          let pizzasData = responses[0].data.reduce(
            (accumulator, currentValue) => {
              return accumulator.concat(
                R.zipObj(
                  ["id", "name", "price", "weight", "ingredients"],
                  currentValue
                )
              );
            },
            []
          );
          let saladsData = responses[1].data.reduce(
            (accumulator, currentValue) => {
              return accumulator.concat(
                R.zipObj(
                  ["id", "name", "price", "weight", "ingredients"],
                  currentValue
                )
              );
            },
            []
          );
          let soupsData = responses[2].data.reduce(
            (accumulator, currentValue) => {
              return accumulator.concat(
                R.zipObj(
                  ["id", "name", "price", "weight", "ingredients"],
                  currentValue
                )
              );
            },
            []
          );
          let dessertsData = responses[3].data.reduce(
            (accumulator, currentValue) => {
              return accumulator.concat(
                R.zipObj(["id", "name", "weight", "price"], currentValue)
              );
            },
            []
          );
          let drinksData = responses[4].data.reduce(
            (accumulator, currentValue) => {
              return accumulator.concat(
                R.zipObj(
                  ["id", "name", "price", "weight", "ingredients"],
                  currentValue
                )
              );
            },
            []
          );
          this.setState({
            pizzas: pizzasData,
            salads: saladsData,
            soups: soupsData,
            desserts: dessertsData,
            drinks: drinksData,
          });
          let itemsArr = [];
          pizzasData.map((pizza) => {
            itemsArr.push(pizza.name);
          });
          saladsData.map((salad) => {
            itemsArr.push(salad.name);
          });
          soupsData.map((soup) => {
            itemsArr.push(soup.name);
          });
          dessertsData.map((dessert) => {
            itemsArr.push(dessert.name);
          });
          drinksData.map((drink) => {
            itemsArr.push(drink.name);
          });
          this.createCounters(itemsArr);
        })
      )
      .catch((errors) => {
        console.error(errors);
      });
  }
  handleScroll = () => {
    setTimeout(() => {
      this.headerRef.current.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };
  createCounters = (arr) => {
    let counters = {};
    arr.map((item) => {
      counters[item] = { counter: 1 };
    });
    this.setState({
      counters: counters,
    });
    store.dispatch({
      type: "INITIALIZE_STORE",
      counters: counters,
    });
  };

  render() {
    let allItems = [];
    allItems.push(...this.state.pizzas);
    allItems.push(...this.state.soups);
    allItems.push(...this.state.salads);
    allItems.push(...this.state.desserts);
    allItems.push(...this.state.drinks);
    let allImages = [];
    allImages.push(...this.state.pizzasImages);
    allImages.push(...this.state.soupsImages);
    allImages.push(...this.state.saladsImages);
    allImages.push(...this.state.dessertsImages);
    allImages.push(...this.state.drinksImages);
    return (
      <HashRouter>
        <Provider store={store}>
          <div className="App">
            <Header
              headerRef={this.headerRef}
              handleShowCartModal={this.handleShowCartModal}
            />
            <Menu />
            <Route
              exact
              path="/"
              component={() => (
                <MainPage
                  pizzasImages={this.state.pizzasImages}
                  pizzas={this.state.pizzas}
                  saladsImages={this.state.saladsImages}
                  salads={this.state.salads}
                  soupsImages={this.state.soupsImages}
                  soups={this.state.soups}
                  drinksImages={this.state.drinksImages}
                  drinks={this.state.drinks}
                  dessertsImages={this.state.dessertsImages}
                  desserts={this.state.desserts}
                />
              )}
            />
            <Route path="/about" component={AboutUs} />
            <Route path="/delivery" component={Delivery} />
            <Route path="/contacts" component={Contacts} />
            <Route
              path="/pizzas"
              component={() => (
                <ItemsSection
                  section="Pizzas"
                  itemsImages={this.state.pizzasImages}
                  items={this.state.pizzas}
                />
              )}
            />
            <Route
              path="/salads"
              component={() => (
                <ItemsSection
                  section="Salads"
                  itemsImages={this.state.saladsImages}
                  items={this.state.salads}
                />
              )}
            />
            <Route
              path="/soups"
              component={() => (
                <ItemsSection
                  section="Soups"
                  itemsImages={this.state.soupsImages}
                  items={this.state.soups}
                />
              )}
            />
            <Route
              path="/desserts"
              component={() => (
                <ItemsSection
                  section="Desserts"
                  itemsImages={this.state.dessertsImages}
                  items={this.state.desserts}
                />
              )}
            />
            <Route
              path="/drinks"
              component={() => (
                <ItemsSection
                  section="Drinks"
                  itemsImages={this.state.drinksImages}
                  items={this.state.drinks}
                />
              )}
            />
            <Footer handleScroll={this.handleScroll} />
            {this.state.showCartModal && (
              <CartModal
                handleShowCartModal={this.handleShowCartModal}
                allItems={allItems}
                allImages={allImages}
              />
            )}
          </div>
        </Provider>
      </HashRouter>
    );
  }
}

export default App;
