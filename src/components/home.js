import React, { useState } from "react";
import logo from "../assets/fampaylogo.svg";
import HC3 from "./bigDisplayCard";
import HC6 from "./smallCardWithArrow";
import HC5 from "./imgCard";
import HC4 from "./centerCard";
import HC1 from "./smallDisplayCard";
import DetailsScreen from "./detailsScreen";

const Home = ({ data }) => {
  const [screen, setScreen] = useState("home");

  if (screen === "home") {
    return (
      <>
        <div className="logo-wrapper">
          <img src={logo} alt="logo" />
        </div>
        <div className="home-section">
          {data.map((d) => {
            switch (d.design_type) {
              case "HC1":
                return (
                  <div
                    className={`hc1-card-wrapper ${
                      d.is_scrollable ? "scroll" : "no-scroll"
                    }`}
                    key={d.id}
                  >
                    {d.cards.map((card) => (
                      <HC1
                        key={d.id + "." + d.cards.indexOf(card)}
                        data={card}
                      />
                    ))}
                  </div>
                );
              case "HC3":
                return d.cards.map((card) => (
                  <HC3
                    key={d.id + "." + d.cards.indexOf(card)}
                    data={card}
                    id={d.id}
                  />
                ));
              case "HC4":
                return d.cards.map((card) => (
                  <HC4 key={d.id + "." + d.cards.indexOf(card)} data={card} />
                ));
              case "HC5":
                return d.cards.map((card) => (
                  <HC5
                    key={d.id + "." + d.cards.indexOf(card)}
                    data={card}
                    setScreen={setScreen}
                  />
                ));
              case "HC6":
                return d.cards.map((card) => (
                  <HC6
                    key={d.id + "." + d.cards.indexOf(card)}
                    data={card}
                    setScreen={setScreen}
                  />
                ));
              default:
                return null;
            }
          })}
        </div>
      </>
    );
  } else if (screen === "challenge") {
    return (
      <DetailsScreen
        key={"SavingsChallenge"}
        data={data.filter((d) => d.design_type === "HC5")}
        type={"Savings Challenge"}
        setScreen={setScreen}
      />
    );
  } else {
    return (
      <DetailsScreen
        key={"SpinWheel"}
        type={"Your Rewards"}
        setScreen={setScreen}
      />
    );
  }
};

export default Home;
