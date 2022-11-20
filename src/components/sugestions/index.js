import React from 'react'
import "./sugestions.css"

function Sugestions(props) {
    const {image, userName, isFollow} = props
  return (
        <aside className="sideBar">
            <div className="sugestionUser">
            <div className="sugestionContainer">
                <div className="sugestionImg">
                    <img src={image} />
                </div>

                <div className="sugestionTitle">
                    <div className="titleName"><a href="#">{userName}</a></div>
                    <div className="isFollow">{isFollow}</div>    
                </div>

            </div>
            <div className="follow">
                <a href="#">Seguir</a>
            </div>
        </div>
        </aside>
  )
}

export default Sugestions