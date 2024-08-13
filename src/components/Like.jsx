import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoHeartSharp } from "react-icons/io5";
const Like = () => {
  const [isLike, setIsLike] = useState(false);
  console.log(isLike)
  

  const handleLike = () => {
    setIsLike(!isLike);
  };

  return (

  <div onClick={handleLike}>
    {
        isLike ? <FaRegHeart/> : <span style={{color:"red"}}><IoHeartSharp/></span>
    }
  </div>
    
  );
};

export default Like;

