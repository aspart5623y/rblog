import React from 'react'
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { uiActions } from '../../store/reducers/ui-slice';
import Footer from '../Footer';
import Navbar from '../Navbar'
import { ScrollRestoration } from "react-router-dom";
import NavbarSearch from "../NavbarSearch";
import { useState } from "react";


function AppLayout() {
  const darkMode = useSelector(state => state.ui.darkMode);
  console.log(darkMode);
  const dispatch = useDispatch()
  
  const toggleDarkMode = () => {
      dispatch(uiActions.toggleDarkMode())
  }

  const [searchState, setSearchState] = useState(false);
    const toggleSearchState = (e) => {
        e.preventDefault()
        setSearchState(!searchState)
    }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <ScrollRestoration />
      <div className='dark:bg-black bg-white'>
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} toggleSearchState={toggleSearchState} />
        <Outlet />
        <Footer />
      </div>

      { searchState && <NavbarSearch toggleSearchState={toggleSearchState} /> }
    </div>
  )
}

export default AppLayout
