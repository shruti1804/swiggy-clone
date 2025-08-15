<<<<<<< HEAD
const RestaurantInfo = ({ restaurant }) => {
  return (
    <div className="restaurant__info">
      <p>{restaurant?.info?.name}</p>
      <div className="restaurant__services">
        <p>Order Online</p>
        <p>Dineout</p>
      </div>
      <div className="restaurantInfo">
        <div className="restaurantInfoContainer">
          <div className="primary">
            <p>
              Uh-oh! Outlet is not accepting orders at the moment. They should
              be back by 11:00 AM tomorrow
            </p>
          </div>
          <div className="secondary">
            <div className="secondaryInfo">
              <h4>
                {restaurant?.info?.avgRatingString} (
                {restaurant?.info?.totalRatingsString} ratings)
              </h4>
              <span>•</span>
              <h4> {restaurant?.info?.costForTwo}</h4>
            </div>
            <p>South Indian, Chinese</p>
            <div>
              <p>Outlet</p>
              <p>Crossing Republic</p>
            </div>
            <span>Closed & not delivering</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
=======
const RestaurantInfo = ({ restaurant }) => {
  return (
    <div className="restaurant__info">
      <p>{restaurant?.info?.name}</p>
      <div className="restaurant__services">
        <p>Order Online</p>
        <p>Dineout</p>
      </div>
      <div className="restaurantInfo">
        <div className="restaurantInfoContainer">
          <div className="primary">
            <p>
              Uh-oh! Outlet is not accepting orders at the moment. They should
              be back by 11:00 AM tomorrow
            </p>
          </div>
          <div className="secondary">
            <div className="secondaryInfo">
              <h4>
                {restaurant?.info?.avgRatingString} (
                {restaurant?.info?.totalRatingsString} ratings)
              </h4>
              <span>•</span>
              <h4> {restaurant?.info?.costForTwo}</h4>
            </div>
            <p>South Indian, Chinese</p>
            <div>
              <p>Outlet</p>
              <p>Crossing Republic</p>
            </div>
            <span>Closed & not delivering</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
>>>>>>> 7d587c8fc36730a4000ab0f5d52e5eea72006c88
