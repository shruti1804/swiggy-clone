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
