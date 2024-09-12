import React from 'react'
import { useState,useEffect } from 'react'
import NewsItem from './NewsItem';
import "./comp.css"

export default function NewsBoard({category}) {

  const [articles,setArticles] = useState([]);  
  

  useEffect(()=>{
    let url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=623ee87c748a4aedb79c8beceb175f32`;
    fetch(url)
    .then(response => response.json())
    .then(data => setArticles(data.articles));
  },[category])
  
  
  return (
    <div>
        <marquee behavior="alternate" bgcolor="red" scrollamount="20"><h2 className='text-white p-2'>LATEST NEWS</h2></marquee>
        <div className='card-collections'>
        {
            articles.map((data,index)=>{
               return <NewsItem key={index} title={data.title} description={data.description} url={data.url} urltoimg={data.urlToImage}/>
            })
        }
        </div>
    </div>
  )
}
