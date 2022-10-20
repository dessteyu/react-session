import React from "react";

export function View(props) {
  return (
    <div
      style={{
        padding: 8,
        width: '100px',
        backgroundColor: "red",
        color: "white",
        borderRadius: "50%",
        textAlign: "center",
        margin: 8,
      }}
    >
      {props.count}
    </div>
  );
}
