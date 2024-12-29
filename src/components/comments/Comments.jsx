import { useContext, useState } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";
import img from '../../assets/man (1).png';
import image from '../../assets/Stories.png';


const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  //Temporary
  const comment = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      name: "John Doe",
      userId: 1,
      profilePicture:img   },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      name: "Jane Doe",
      userId: 2,
      profilePicture:image},
      {
        id: 3,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        name: "John Doe",
        userId: 1,
        profilePicture:img   },
      {
        id: 4,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        name: "kimze ",
        userId: 2,
        profilePicture:image},
  ];

  const [comments ,setComments] = useState(comment)
  const [addComment ,setAddComment ] = useState('');

  const handleComment = ()=>{
    setComments(prev=>([...prev,{id:comments.length ,desc:addComment ,name:currentUser.name ,profilePicture:currentUser.profilePic}]))
  }
  
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" value={addComment} onChange={(e)=>setAddComment(e.target.value)}/>
        <button disabled={addComment===''} onClick={()=>handleComment()}>Submit</button>
      </div>
      {comments.map((comment,index) => (
        <div className="comment" key={index}>
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
