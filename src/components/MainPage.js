import React from "react";
import ItemsSection from "./ItemsSection";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <ItemsSection
          section="Pizzas"
          itemsImages={this.props.pizzasImages}
          items={this.props.pizzas}
          handleShowItemFullImage={this.props.handleShowItemFullImage}
        />
        <ItemsSection
          section="Salads"
          itemsImages={this.props.saladsImages}
          items={this.props.salads}
          handleShowItemFullImage={this.props.handleShowItemFullImage}
        />
        <ItemsSection
          section="Soups"
          itemsImages={this.props.soupsImages}
          items={this.props.soups}
          handleShowItemFullImage={this.props.handleShowItemFullImage}
        />
        <ItemsSection
          section="Desserts"
          itemsImages={this.props.dessertsImages}
          items={this.props.desserts}
          handleShowItemFullImage={this.props.handleShowItemFullImage}
        />
        <ItemsSection
          section="Drinks"
          itemsImages={this.props.drinksImages}
          items={this.props.drinks}
          handleShowItemFullImage={this.props.handleShowItemFullImage}
        />
      </div>
    );
  }
}

export default MainPage;
