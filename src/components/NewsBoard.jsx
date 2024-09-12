import React from 'react'
import { useState,useEffect } from 'react'
import NewsItem from './NewsItem';
import "./comp.css"
import TopNews from './TopNews';

export default function NewsBoard({category}) {

  const [articles,setArticles] = useState([]);  
  

  useEffect(()=>{
    //
    let url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=f8ae3f922a614822a5d6725079e48133`;
    fetch(url)
    .then(response => response.json())
    .then(data => setArticles(data.articles));
  },[category])
  
  let type = category.toUpperCase();
  
  return (
    <div>
        <marquee behavior="alternate" bgcolor="red" scrollamount="20"><h2 className='text-white p-2'>LATEST NEWS</h2></marquee>
        <div className='headingList'>
        <div className='aside'><TopNews/>  </div>
        <div className='collections'>
        <div className='headings'><h2>{`${type} HEADLINES`}</h2></div>
        <div className='card-collections'>
        {
            articles.map((data,index)=>{
               return <NewsItem key={index} title={data.title} description={data.description} url={data.url} urltoimg={data.urlToImage}/>
            })
        }
        </div>
        </div>
        </div>
    </div>
  )
}
