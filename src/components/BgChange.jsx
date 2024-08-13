import React from "react";
import "./BgChange.css";
import { useState } from "react";

const BgChange = () => {
    const [color, setColor]= useState("green")
    console.log(color)


  return (
    <div className="bgChange" style={{backgroundColor:color}}>
      <div className="btn-group">
        <div className="buttonDiv">
          <button onClick={()=>setColor("red")} style={{backgroundColor:"red", marginRight:"2px", border:"1px solid red", borderRadius:"5px", cursor:"pointer"}}>Red</button>
          <button onClick={()=>setColor("green")} style={{backgroundColor:"green", marginRight:"2px", border:"1px solid red", borderRadius:"5px", cursor:"pointer"}}>Green</button>
          <button onClick={()=>setColor("yellow")} style={{backgroundColor:"yellow", marginRight:"2px", border:"1px solid red", borderRadius:"5px", cursor:"pointer"}}>Yellow</button>
          <button onClick={()=>setColor("pink")} style={{backgroundColor:"pink", marginRight:"2px", border:"1px solid red", borderRadius:"5px", cursor:"pointer"}}>Pink</button>
        </div>
      </div>
    </div>
  );
};

export default BgChange;
