import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css"

const Header = () => {
    return (
      <div className='holder'>
          <header className='header'>
              <Navbar />
              <div className='header-content flex flex-c text-center text-white'>
                  <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                  <p className='header-text fs-18 fw-3'>“Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.” ― John Green, The Fault in Our Stars</p>
                  <SearchForm />
              </div>
          </header>
      </div>
    )
  }
  

export default Header