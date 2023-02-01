import React from "react"; 
import { useState } from "react";
const Prodimages=({posts})=>{
    //console.log(posts[0]?.images[0]);
    const [display,setdisplay]=useState({display:"none"})
    return(
        <>
        <div>
            {posts && posts.map((post)=>{
                return(
                    <>
                    <img onMouseOver={()=>{setdisplay({display:"block"})}} onMouseOut={()=>{setdisplay({display:"none"})}}src={post.images[0]} alt="#img" style={{width:"250px",height:"250px"}}/>
                    <div style={display}>
                                Description : {post.description}
                        </div>
                    </>
                    
                ) 
            })}
        </div>
        
        </>
    )
}
export default Prodimages;