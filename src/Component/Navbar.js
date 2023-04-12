import React, { useState } from 'react'
import { Links } from './Links';
import { Link } from 'react-router-dom';
import image from '../image/logo.jpg'
import './Navbar.css'
function Navbar() {
  const[clicked,setCliked]=useState(false)
  const handlClick=()=>{
    setCliked(!clicked)
  } 
  return (
    <div >
    <div className='nav-menu' >
          <div className="logo">
           <img src={image} className='photo' alt='img' />
           <h1>Royaume du maroc</h1>
           <p>Ministère de l'intérieur</p>
            </div>
            <div className='menu-icon' onClick={handlClick}>
               <i className={clicked ? "fa-sharp fa-solid fa-circle-xmark " : "fas fa-bars"}>
               </i>
            </div>
              <ul className={clicked ? "navbar-menu" : "navbar-menu active" }>
                 {Links.map((item,index)=>{
                     return(
                       <li key={index}>
                         <Link className={item.cName} to={item.url}>
                          <i className={item.icon}></i>
                          {item.title}
                       
                          </Link> 
                         
                       </li>

                          )
                  })}
             </ul>
             <div className='light__mode'>
            <span>
            <i class="fa-sharp fa-solid fa-sun fa-xl"></i>  Light Mode
             </span>
    </div>
            
    </div>
    
    </div>
  )
}

export default Navbar