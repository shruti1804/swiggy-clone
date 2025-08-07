import { useOutletContext } from "react-router-dom";
import Carousel from "../Components/Carousel";
import "./../Style/Home.css";
import Card from "../Components/Card";
const Home = () => {
  const { restaurants } = useOutletContext();
    console.log("homne page", restaurants);

  return (
    <div className="home">
      <Carousel></Carousel>
      <h2 className="home__heading">
        Restaurants with online food delivery in Nagpur.
      </h2>
      <div className="home__card-container">
        {restaurants.map((res) => {
          return <Card show={true} res={res.info}></Card>;
        })}
      </div>
    </div>
  );
};

export default Home;