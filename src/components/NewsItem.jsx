import React from "react";
import def from "../assets/default.jpg"
export default function NewsItem({title,description,url,urltoimg}) {
  return (
      <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 " style={{width:"380px"}}>
        <img src={urltoimg?urltoimg:def} className="card-img-top" alt={urltoimg} style={{height: "200px", width:"360px"}} />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,50)}</h5>
          <p className="card-text">
            {description?description.slice(0,90):"Description not found open the link to read more"}...
          </p>
          <a href={url} className="btn btn-primary">
            Explore
          </a>
        </div>
      </div>
  );
}
