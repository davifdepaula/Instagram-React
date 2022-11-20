import React, { useState } from 'react'
import "./user.css"

function User() {
  const [userName, setUserName] = useState("Davi Ferreira")
  const [userImg, setUserImg] = useState("/assets/eu.jpeg")

  function changeUserImg(){
    const newImg = prompt("digite o endereço da nova imagem de perfil: ")
    if(newImg) setUserImg(newImg)
  }

  function changeUserName(){
    const newName = prompt("digite o endereço da nova imagem de perfil: ")
    if(newName) setUserName(newName)
  }
  return (
    <div className="user" data-test="user">
      <div className="userImg">
        <img 
        data-test="profile-image" 
        src={userImg}
        onClick = {() => changeUserImg()}
        />
      </div>
      
      <div className="userText">
        <div className="userTitle">
            <a href="#"> <h4>davi.fdepaula</h4></a>
        </div>

        <div className="userSubTitle">
            <span data-test="name">{userName}</span> 
            <span data-test="edit-name" onClick={() => changeUserName()}> 
              <ion-icon name="pencil-outline"></ion-icon> 
            </span>
        </div>
      </div>

    </div>
  )
}

export default User