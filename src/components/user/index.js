import React, { useState } from 'react'
import "./user.css"

function User() {
  const [userName, setUserName] = useState("Davi Ferreira")
  const [userImg, setUserImg] = useState("/assets/eu.jpeg")
  return (
    <div className="user">
      <div className="userImg">
        <img src={userImg}
        onClick = {() => setUserImg(prompt("digite o endereço da nova imagem de perfil: "))}
        />
      </div>
      
      <div className="userText">
        <div className="userTitle">
            <a href="#"> <h4>davi.fdepaula</h4></a>
        </div>

        <div className="userSubTitle">
            {userName} 
            <span onClick={() => {setUserName(prompt("Digite o novo nome de usuario"))}}> 
              <ion-icon name="pencil-outline"></ion-icon> 
            </span>
        </div>
      </div>

    </div>
  )
}

export default User