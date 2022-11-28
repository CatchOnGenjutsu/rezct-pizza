import "./App.css";

import { PizzaBlock, Header, Categories, SortPopup } from "./components";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories
              // onClick={(item) => console.log(item)}
              items={[
                "Мясные",
                "Вегетарианская",
                "Гриль",
                "Острые",
                "Закрытые",
              ]}
            />
            <SortPopup />
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
      </div>
    </div>
  );
}

export default App;
