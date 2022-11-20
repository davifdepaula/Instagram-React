import React from 'react'

import './navbar.css'

function Navbar() {
  return (
    <header>
        <div className="headerContainer">
            <div className="left">
                <ion-icon name="logo-instagram"></ion-icon>
                <img src="/assets/logo.png" alt="logo"/>
            </div>

            <div className="center">
                <input type="search" placeholder="Pesquisar" /> 
            </div>

            <div className="right">
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="compass-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>                
            </div>
        </div>


        <div className="headerContainerMobile">
            <div className="left">
                <ion-icon name="logo-instagram"></ion-icon>
            </div>

            <div className="center">
                <img src="/assets/logo.png" alt="logo"/>
            </div>

            <div className="right">
                <ion-icon name="person-outline"></ion-icon>                
            </div>
        </div>
    </header>
  )
}

export default Navbar