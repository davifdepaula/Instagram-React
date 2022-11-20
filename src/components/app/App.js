import Navbar from '../navbar';
import Posts from '../posts';
import Stories from '../stories';
import './App.css';

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
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Stories/>
      {
        postsContainer.map((post)=>{
          return (
            <Posts 
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
  );
}

export default App;
