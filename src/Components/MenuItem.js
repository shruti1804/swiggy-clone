<<<<<<< HEAD
import MenuItemShow from "./MenuItemShow.js";

const MenuItem = ({ res, cartItems, addItem, removeItem }) => {
  if (!res) return null;
  const title = res.title || "Untitled";
  
  return (
    <div className="restaurant__menu-category" key={title}>
      <div className="restaurant__menu-title">
        <p>
          {title} ({res.itemCards.length})
        </p>
      </div>
      <div className="restaurant__menu-items">
        {res.itemCards && res.itemCards.map((r, index) => {
            return (
              <MenuItemShow 
              key={`${r.card.info.id || "no-id"}-${res.title}-${index}`}
              r={r.card.info} 
              cartItems={cartItems}
              addItem={addItem}
              removeItem={removeItem}
              ></MenuItemShow>
            );
          })}
      </div>
    </div>
  );
};

export default MenuItem;
=======
import MenuItemShow from "C:/Users/ASUS/Desktop/coding/REACT/swiggy-clone/src/Components/MenuItem.js";

const MenuItem = ({ res, cartItems, addItem, removeItem }) => {
  if (!res) return null;
  const title = res.title || "Untitled";
  
  return (
    <div className="restaurant__menu-category" key={title}>
      <div className="restaurant__menu-title">
        <p>
          {title} ({res.itemCards.length})
        </p>
      </div>
      <div className="restaurant__menu-items">
        {res.itemCards &&
          res.itemCards.map((r, index) => {
            return (
              <MenuItemShow
                key={`${r?.card?.info?.id}-${index}`}
                r={r.card.info}
                cartItems={cartItems}
                addItem={addItem}
                removeItem={removeItem}
              ></MenuItemShow>
            );
          })}
      </div>
    </div>
  );
};

export default MenuItem;
>>>>>>> 7d587c8fc36730a4000ab0f5d52e5eea72006c88
