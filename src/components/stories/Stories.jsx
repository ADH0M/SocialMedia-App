import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";
import image from '../../assets/man (1).png';
import image1 from '../../assets/Stories.png';
import image2 from '../../assets/man (1).png';
import image4 from '../../assets/Stories.png';


const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "kimze",
      img: image,
    },
    {
      id: 2,
      name: "John Doe",
      img: image1,
    },
    {
      id: 3,
      name: "John Doe",
      img: image2,
    },
    {
      id: 4,
      name: "John Doe",
      img: image4,
    },
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src={currentUser?.profilePic || image1 } alt="" />
          <span>{currentUser?.name || 'john do'}</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories