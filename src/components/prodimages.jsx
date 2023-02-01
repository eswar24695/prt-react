import React from "react"; 
const Prodimages=({posts})=>{
    //console.log(posts[0]?.images[0]);
    return(
        <>
        <div>
            {posts && posts.map((post)=>{
                return(
                    <img src={post.images[0]} alt="#img" style={{width:"250px",height:"250px"}}/>
                ) 
            })}
        </div>
        
        </>
    )
}
export default Prodimages;