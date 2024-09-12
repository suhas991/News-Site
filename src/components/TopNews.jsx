import React, { useEffect, useState } from "react";
import "./comp.css";

export default function TopNews() {
  const [topNews, setTopNews] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=f8ae3f922a614822a5d6725079e48133`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setTopNews(data.articles));
  });

  const dateEx =(value)=>{
    let date = new Date(value)
    const extractedDate = date.toISOString().split('T')[0];
    return extractedDate;
  }

  return (
    <div className="container">
      <>
        <div className="card text-center">
          <div className="card-header" style={{color:"black", fontSize:"20px"}}>Featured Top 10 News</div>
          {topNews.map((data, index) => {
            return (
              <div className="holder">
                <div>
                  <img src={data.urlToImage} alt="" style={{width:"150px"}}/>
                </div>
                <div className="card-body">
                  <div><h5 className="card-title" > <a href={data.url}> {data.title} </a></h5></div>
                  <div>
                  <p className="card-text">
                    {
                        data.description
                    }
                  </p>
                  </div>
                  {/* <a href={data.url} className="btn btn-primary">
                    Explore
                  </a> */}
                </div>
                <div className="card-footer text-body-secondary">
                  {
                    dateEx(data.publishedAt)
                  }
                </div>
              </div>
            );
          })}
        </div>
      </>
    </div>
  );
}
