import React from "react";
import "../Card.css";

export default function Card({
  title,
  text,
  children,
  icon_1,
  icon_2,
  icon_3,
  btnIcon,
  startEvent,
  cardHeader = true,
  cardText,
}) {
  return (
    <div className="card" style={{maxWidth:400}}>
      {cardHeader && <div className="card-header">{"test"}</div>}
      <div>
        <p>{cardText}</p>
        {children}
      </div>
    </div>
  );
}
