import React, { useEffect, useState } from "react";
import asset15 from "../assets/Asset 15.svg";
import CTA from "../components/actionCTA";
import IconButton from "./iconButton";
import remind from "../assets/remind.svg";
import dismiss from "../assets/dismiss.svg";
import useLongPress from "./longPressHandler";

const HC3 = ({ data, id }) => {
  const [showButtons, setShowButtons] = useState(false);
  const [showCard, setShowCard] = useState(true);
  const handleLongPressClick = useLongPress(
    () => setShowButtons(!showButtons),
    500
  );

  useEffect(() => {
    const is_dismissed =
      localStorage.getItem("hideCard") === "true"
        ? JSON.parse(localStorage.getItem("hideCard"))
        : false;
    const card_id = is_dismissed
      ? JSON.parse(localStorage.getItem("cardId"))
      : null;

    if (is_dismissed && card_id === 16) {
      setShowCard(false);
    }
  }, []);

  const handleIconButtonClick = () => {
    localStorage.setItem("hideCard", true);
    localStorage.setItem("cardId", id);
    setShowCard(false);
  };

  return (
    <>
      {showCard ? (
        <div className="hc3-wrapper flex-row">
          {showButtons ? (
            <div className="iconbtn-wrapper flex-column">
              <IconButton
                label="remind later"
                icon={remind}
                action={handleIconButtonClick}
              />
              <IconButton
                label="dismiss now"
                icon={dismiss}
                action={handleIconButtonClick}
              />
            </div>
          ) : null}
          <div
            className="hc3"
            {...handleLongPressClick}
            style={{ backgroundColor: data.bg_color }}
          >
            <img src={asset15} alt={asset15} />
            <p
              className="hc3-hero-text"
              style={{ color: data.formatted_title.entities[1].color }}
            >
              <span style={{ color: data.formatted_title.entities[0].color }}>
                {data.formatted_title.entities[0].text}
              </span>{" "}
              {data.formatted_title.entities[1].text}
            </p>
            <p
              className="fs-12"
              style={{ color: data.formatted_description.entities[0].color }}
            >
              {data.formatted_description.entities[0].text}
            </p>
            <CTA
              lable={data.cta[0].text}
              action={data.cta[0].url}
              style={{ backgroundColor: data.cta[0].bg_color }}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default HC3;
