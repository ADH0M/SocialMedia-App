import Post from "../post/Post";
import "./posts.scss";
import image from '../../assets/Stories.png'

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic:image,
      desc: "Lorem ipsum dolor ",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      id: 2,
      name: "Jane Doe",
      userId: 2,
      profilePic:image,
      desc: "Tenetur iste voluptates",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",

    },
    {
      id: 4,
      name: "John Doe",
      userId: 1,
      profilePic:image,
      desc: "Lorem ipsum dolor ",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      id: 3,
      name: "Jane Doe",
      userId: 2,
      profilePic:image,
      desc: "Tenetur iste voluptates",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",

    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
