import React from "react";
import { PizzaBlock, Categories, SortPopup } from "../components";

function Home() {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          // onClick={(item) => console.log(item)}
          items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}
        />
        <SortPopup items={["популярности", "цене", "алфавиту"]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        <PizzaBlock />
        <PizzaBlock />
        <PizzaBlock />
        <PizzaBlock />
        <PizzaBlock />
        <PizzaBlock />
        <PizzaBlock />
        <PizzaBlock />
        <PizzaBlock />
      </div>
    </div>
  );
}

export default Home;
