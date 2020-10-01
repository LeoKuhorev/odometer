import React from "react";

export default function Header(props) {
  return (
    <header style={headerStyle}>
      <nav className="navbar fixed-top navbar-dark teal accent-4">
        <a className="navbar-brand" href="#!">
          <strong>{props.text}</strong>
        </a>
      </nav>
    </header>
  );
}

const headerStyle = {
  marginTop: "100px"
}