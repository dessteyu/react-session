import React from "react";

export function View({ children, ...props }) {
  return (
    <div
      style={{
        padding: 8,
        backgroundColor: "bisque",
        color: "white",
        textAlign: "center",
        margin: 8,
        display: "flex",
        alignItems: "center",
        fontSize: 24,
        fontWeight: "bold",
        justifyContent: "center",
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export default View;
