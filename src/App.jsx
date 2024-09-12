import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Navbars from './components/Navbars'
import NewsBoard from './components/NewsBoard'
import Slider from './components/Slider'
import TopNews from './components/TopNews'

function App() {

  const [category,setCategory]=useState('general');

  return (
    <>
      <Navbars setCategory={setCategory}/>
      <NewsBoard category={category}/>
      <Footer/>
    </>
    
  )
}

export default App
