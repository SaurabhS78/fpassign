import React from "react";

const DetailsCard = ({ data }) => {
  const { title, desc, list } = data;

  return (
    <div className="details-card">
      {title !== "" ? <div className="fs-20 fw-600">{title}</div> : null}
      {desc !== "" ? <p className="fw-500 fs-12">{desc}</p> : null}
      {list !== [] ? (
        <ul>
          {list.map((d) => (
            <li className="fs-12 fw-400" key={list.indexOf(d)}>
              {d}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default DetailsCard;
