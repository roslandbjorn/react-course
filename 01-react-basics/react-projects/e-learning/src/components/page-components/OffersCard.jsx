import React from "react";
import Button from "../Button";
import "../../Card.css";

export default function OffersCard({
  title,
  text,
  children,
  icon_1,
  icon_2,
  icon_3,
  btnIcon,
  startEvent,
  cardHeader = true,
  cardBody = true,
  cardFooter = false,
}) {
  return (
    <div className="card offer text-center" style={{ maxWidth: 400 }}>
      {cardHeader && (
        <div className="card-header bg-transparent">
          {icon_1}
          {icon_2}
          {icon_3}
        </div>
      )}

      <div className="card-body">
        <h3 className="card-title">{title ? title : "Card title"}</h3>
        <p className="card-text">{text}</p>
        {children}
      </div>

      {cardFooter && (
        <div className="card-footer">
          <Button
            classes={"btn-secondary"}
            text={"Start learning"}
            icon={btnIcon}
            onClick={startEvent}
          ></Button>
        </div>
      )}
    </div>
  );
}
