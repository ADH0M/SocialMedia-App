import "./rightBar.scss";
import img from '../../assets/userImg.png';
import image from '../../assets/man (1).png';

import React, { useCallback, useState } from "react";
const RightBar = () => {
  const [suggestions ,setSuggestions]= useState([
    {username:'Jone Do' , img:img ,id :1223  ,isFolow:false},
    {username:'kimz   ' , img:img ,id :1244  ,isFolow:false},
    {username:'Jone Do' , img:img ,id :12523 ,isFolow:false},
    {username:'kimz   ' , img:img ,id :1294  ,isFolow:false},
  ]);

  const [follow ,setFollow ]=useState(false);

  const hanldDissmis= (id)=>setSuggestions(prev=>{
    return prev.filter(item => item.id !== id);
  });

  const handleFollow =useCallback(  (id)=>{
    return setSuggestions((prev => prev.map(item =>{
      if(item.id === id){
        return {...item , isFolow:!item.isFolow}
        
      }else{
        return item
      }
    })))
  },[]);

  

  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          {suggestions .length <= 0 && <div className="noSuggestions">there Are No Suggestions</div>}
          {suggestions?.map(item =>(
              <div className="user" key={item.id}>

              <div className="userInfo">
                <img
                  src={item.img}
                  alt="useimg"
                />
                <span>{item.username}</span>
              </div>
  
              <div className="buttons">
                <button className={`${item.isFolow ?'isFllow':'notFollow'}`} onClick={()=>{handleFollow(item.id)}}
                >follow</button>
                <button onClick={()=> hanldDissmis(item.id)}>dismiss</button>
              </div>
            </div>
          ))}




        </div>
        <div className="item">
          <span>Latest Activities</span>

          <div className="user">
            <div className="userInfo">
              <img
                src={image}
                alt=""
              />
              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>

         

        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src={img}
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={image}
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={img}
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={image}
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(RightBar);
