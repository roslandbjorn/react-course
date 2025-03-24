import React from "react";

export default function MyList() {
  const items = ["Item 1", "Item 2", "Item 3"];
  return (
    <>
      <div className="title">MyList</div>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </>
  );
}
