import React from "react";
import "../App.css";

export default function Footer(props) {
  return (
    <footer className="fixed-bottom page-footer font-small unique-color-dark pt-4">
      <div className="container">
        <ul className="list-unstyled list-inline text-center py-2">
          <li className="list-inline-item">
            <h5 className="mb-1">Register for free</h5>
          </li>
          <li className="list-inline-item">
            <a href="#!" className="btn btn-outline-white">
              Sign up!
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="#!"> {props.copyright}</a>
      </div>
    </footer>
  );
}
