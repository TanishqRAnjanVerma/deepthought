import React from 'react'
import '../Navbar/navbar.css'
import { FaHome } from 'react-icons/fa'
import { FaTools } from 'react-icons/fa'
import { FaBell } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { HiDotsVertical } from 'react-icons/hi'
import { FaBinoculars } from "react-icons/fa";


const Navbar = () => {
   return (
      <div>
         <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
               <a class="navbar-brand" href="#">
                  <img src="https://deepthought.education/assets/images/logo/logo.svg" alt="Logo" className="d-inline-block align-text-top" />
               </a>
               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                     <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"><FaHome /></a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"> <FaBinoculars /></a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"> <FaTools /></a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"> <FaBell /></a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"> <CgProfile /></a>
                     </li>

                  </ul>
                  <div class="options">
                     <button> <HiDotsVertical /></button>
                  </div>

               </div>
            </div>
         </nav>

      </div>


   )
}

export default Navbar
