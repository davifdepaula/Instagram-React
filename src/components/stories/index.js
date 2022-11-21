import React from 'react'
import "./stories.css"

const storiesUser = [
    { 
        "image" : "/assets/leiaOrgana.jpg",
        "userName": "Leia"
    },

    {   
        "image" : "/assets/amor.jpeg",
        "userName": "_be.larissa"
    },

    {   
        "image" : "/assets/yoda.jpeg",
        "userName": "Yoda"
    },

    {   
        "image" : "/assets/luke.jpg",
        "userName": "Luke"
    },

    {   
        "image" : "/assets/ahsoka-tano.jpg",
        "userName": "Ahsoka"
    },

    {   
        "image" : "/assets/anakin.jpg",
        "userName": "Anakin"
    },

    {   
        "image" : "/assets/vader.jpg",
        "userName": "Darth"
    },

    {   
        "image" : "/assets/windu.jpeg",
        "userName": "Windu"
    },

    {   
        "image" : "/assets/mando.jpg",
        "userName": "Mando"
    },

    {   
        "image" : "/assets/leiaOrgana.jpg",
        "userName": "Leia"
    }
]


function Stories() {

  return (
    <div className="stories">
        {storiesUser.map((storie, index) => {
            return (
                <div key= {index} className="storiesContainer"> {/*story*/}
                    <div className="imgContainer">
                        <div className="storiesCircle"> 
                            <img src= {storie.image} /> 
                        </div>
                    </div>

                    <div className="textContainer">
                        {storie.userName}
                    </div>
                </div>
            )
        })}

        <ion-icon name="chevron-forward-outline"></ion-icon>
    </div>
  )
}

export default Stories