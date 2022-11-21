import React from 'react'
import Stories from '../stories'
import Posts from '../posts'
import User from '../user'
import Sugestions from '../sugestions'

import "./body.css"
import SideBar from '../sidebar'

const postsContainer = [
    {
      image: "/assets/leiaBolinhadepelo.jpeg",
      postImg: "/assets/leiaBolinhadepelo.jpeg",
      userName: "Leia Organa",
      likedFor: "Ahsoka Tano",
      likedForImg: "/assets/ahsoka-tano.jpg",
      likedQuantity: 189523,
    },
  
    {
      image: "/assets/eu.jpeg",
      postImg: "/assets/love.jpeg",
      userName: "Davi Ferreira",
      likedFor: "_be.larissa",
      likedForImg: "/assets/amor.jpeg",
      likedQuantity: 800000,
    },
  
    {
      image: "/assets/mando.jpg",
      postImg: "/assets/banana.png",
      userName: "omandaloriano",
      likedFor: "Davi Ferreira",
      likedForImg: "/assets/eu.jpeg",
      likedQuantity: 189523,
    },
  ]

function Body() {
  return (
    <main>
      <div className='leftPage'>
      <Stories/>
      {
        postsContainer.map((post, index)=>{
          return (
            <Posts 
            key = {index}
            image = {post.image}
            postImg = {post.postImg}
            userName = {post.userName}
            likedFor = {post.likedFor}
            likedForImg = {post.likedForImg}
            likedQuantity = {post.likedQuantity}
          />
          )
        })
      }
      </div>
      <div className='rightPage'>
        <SideBar />
      </div>

    </main>
  )
}

export default Body