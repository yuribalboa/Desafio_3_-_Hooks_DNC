import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/section/Header.jsx'
import Footer from './components/section/Footer.jsx'
import Introduction from './components/section/Introduction.jsx'
import Blog from './components/section/Blog.jsx'
import Projects from './components/section/Projects.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Introduction/>
    <Blog/>
    <Projects/>
    <Footer/>
  </React.StrictMode>,
)
