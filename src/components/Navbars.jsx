import React from "react";

export default function Navbars({setCategory}) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" >
          <div><span className="badge text-bg-secondary p-2 mb-2 bg-danger text-white"> News Point</span></div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-link "  onClick={()=>(setCategory("technology"))}>
            Technology
            </li>
            <li className="nav-link " onClick={()=>(setCategory("business"))}>
            Business
            </li>
            <li className="nav-link " onClick={()=>(setCategory("entertainment"))}>
            Entertainment
            </li>
            <li className="nav-link " onClick={()=>(setCategory("health"))}>
            Health
            </li>
            <li className="nav-link " onClick={()=>(setCategory("science"))}>
            Science
            </li>
            <li className="nav-link " onClick={()=>(setCategory("sports"))}>
            Sports
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}
