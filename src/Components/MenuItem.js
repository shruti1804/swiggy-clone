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
