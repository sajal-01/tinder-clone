import React from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

const TinderCards = () => {
  const [cars, setCars] = React.useState([
    {
      id: 1,
      name: "Lambo",
      url: "https://www.cnet.com/a/img/resize/862eaaa847a0696e00837d55d55a8e46f268a6db/hub/2020/12/15/26e4c6dd-bd5e-4036-8bd0-69bcc05075ea/lamborghini-sc20-supercar-136.jpg?auto=webp&width=1200",
    },
    {
      id: 2,
      name: "LamboP1",
      url: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    {
      id: 3,
      name: "Tesla",
      url: "https://cdn.motor1.com/images/mgl/VA0z9/s3/tesla-roadster.jpg",
    },
    {
      id: 4,
      name: "Ferarri",
      url: "https://s1.cdn.autoevolution.com/images/models/FERRARI_296-GTS-2022_main.jpg",
    },
    {
      id: 5,
      name: "McLaren",
      url: "https://imgd.aeplcdn.com/0x0/n/cw/ec/95143/exterior-left-front-three-quarter.jpeg",
    },
    {
      id: 6,
      name: "Lambo",
      url: "https://www.cnet.com/a/img/resize/862eaaa847a0696e00837d55d55a8e46f268a6db/hub/2020/12/15/26e4c6dd-bd5e-4036-8bd0-69bcc05075ea/lamborghini-sc20-supercar-136.jpg?auto=webp&width=1200",
    },
    {
      id: 7,
      name: "LamboP1",
      url: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    {
      id: 8,
      name: "Tesla",
      url: "https://cdn.motor1.com/images/mgl/VA0z9/s3/tesla-roadster.jpg",
    },
    {
      id: 9,
      name: "Ferarri",
      url: "https://s1.cdn.autoevolution.com/images/models/FERRARI_296-GTS-2022_main.jpg",
    },
    {
      id: 10,
      name: "McLaren",
      url: "https://imgd.aeplcdn.com/0x0/n/cw/ec/95143/exterior-left-front-three-quarter.jpeg",
    },
  ]);

  return (
    <div className="card-container">
      {cars.map((car) => (
        <TinderCard
          className="swipe"
          key={car.id}
          preventSwipe={["up", "down"]}
        >
          <div style={{ backgroundImage: `url(${car.url})` }} className="card">
            <h2>{car.name}</h2>
          </div>
        </TinderCard>
      ))}
    </div>
  );
};

export default TinderCards;
