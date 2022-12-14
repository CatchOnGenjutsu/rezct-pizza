import { React, useState } from "react";

function Categories({ items }) {
  const [active, setActive] = useState(null);

  const onSelectItem = (index) => {
    setActive(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={active === null ? "active" : ""}
          onClick={() => onSelectItem(null)}
        >
          Все
        </li>
        {items &&
          items.map((item, index) => (
            <li
              onClick={() => onSelectItem(index)}
              className={active === index ? "active" : ""}
              key={`${item}_${index}`}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
