import React from "react";

export default function Footer() {
  return (
    <footer className="bg-body-tertiary text-center">
      <div className="container p-4"></div>

      <div
        className="text-center p-3"
        style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}
      >
        © 2024 Copyright 
        <a className="text-body" href="https://github.com/suhas991" style={{
            backgroundColor:"lightgrey",
            borderRadius:"5px",
            padding:"5px",
            margin:"5px"
        }}>
           nsuhas991
        </a>
      </div>
    </footer>
  );
}
