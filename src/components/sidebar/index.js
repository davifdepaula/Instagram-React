import React from 'react'
import User from '../user'
import Sugestions from '../sugestions'
import Footer from '../footer'
import "./sidebar.css"

const sugestionsContainer = [
    {   
        image: "/assets/novaesperanca.jpg",
        userName: "Star Wars",
        isFollow: "Segue Você"
    },

    {   
        image: "/assets/hamsolo.jpg",
        userName: "Ham Solo",
        isFollow: "Segue Você"
    },

    {   
        image: "/assets/chewbaka.jpg",
        userName: "Chewbacca",
        isFollow: "Segue Você"
    },

    {   
        image: "/assets/palpatine.jpg",
        userName: "Palpatine",
        isFollow: "Segue Você"
    },

    {   
        image: "/assets/Cal-Kestis.jpg",
        userName: "Cal Kestis",
        isFollow: "Segue Você"
    }
  ]


function SideBar() {
  return (
    <aside className="sideBar">
        <User />

        <div className="sugestion">
            <div className="sugestionForYou">
                Sugestões para você
            </div>

            <div className="seeAll">
                <a href="#">Ver tudo</a>
            </div>    
        </div>

        {sugestionsContainer.map((sugestion, index) => {
            return (
                <Sugestions 
                key = {index}
                image = {sugestion.image}
                userName = {sugestion.userName}
                isFollow = {sugestion.isFollow}
                />
            )
        })}

        <Footer/>
        
    </aside>
  )
}

export default SideBar