import React from "react";

const HC1 = ({ data }) => {
  const { formatted_title, formatted_description, icon, bg_color } = data;

  return (
    <div className="hc1" style={{ backgroundColor: bg_color }}>
      <div className="flex-row">
        <img src={icon.image_url} alt="" />
        <div>
          <p className="fs-14">{formatted_title.text}</p>
          {formatted_description ? (
            <p
              className="fs-14"
              style={{
                color: formatted_description.entities[0].color,
                fontStyle: formatted_description.entities[0].font_style,
              }}
            >
              {formatted_description.entities[0].text}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default HC1;
