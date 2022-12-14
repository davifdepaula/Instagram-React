import React, { useState } from "react"

import "./posts.css"

function Posts(props) {
    const {image, postImg,userName, likedFor, likedForImg, likedQuantity} = props
    const [likeControl, setLikeControl] = useState(0)
    const [liked, setLiked] = useState(false)
    const [saved, setSaved] = useState(false)

    function showLiked() {
        if (liked) {
        setLikeControl(likeControl - 1)
        setLiked(false)
        } else {
        setLikeControl(likeControl + 1)
        setLiked(true)
        }
    }

    function onclickImg(){
      if(!liked){
        setLikeControl(likeControl + 1)
        setLiked(true)
      }
    }

    function savePost(){
      if (saved) {
        setSaved(false)}
      else{
        setSaved(true)        
      } 
    }

  return (
    <div className="posts">
      <div className="postsContainer" data-test="post">
        <div className="top">
          <div className="container">
            <div className="userImg">
              <img src={image} />
            </div>

            <div className="userName">{userName}</div>
          </div>

          <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </div>
        <div className="mid">
          <img
            data-test="post-image"
            src={postImg}
            onDoubleClick={() => onclickImg()}
          />
        </div>

        <div className="bottom">
          <div className="icones">
            <div className="leftIcones">
              <span
                data-test="like-post"
                onClick={showLiked}>
                {liked ? (
                  <span className="heart"><ion-icon name="heart"></ion-icon></span>
                ) : (
                  <ion-icon name="heart-outline"></ion-icon>
                )}
              </span>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>

            <div className="rigthIcones">
              <span
                data-test="save-post"
                onClick={() => savePost()}>
                {saved ? (
                  <ion-icon name="bookmark"></ion-icon>
                ) : (
                  <ion-icon name="bookmark-outline"></ion-icon>
                )}
              </span>
            </div>
          </div>

          <div className="likes">
            <div className="likeImg">
              <img src={likedForImg} />
            </div>

            <div className="likeText">
              Curtido por <span>{likedFor}</span> e{" "}
              <span data-test="likes-number">
                {new Intl.NumberFormat("pt-Br").format(
                  likedQuantity + likeControl
                )}
                pessoas
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posts;
