import React from "react";
const Pagination=({perpageimages,totalposts,paginate})=>{
    const pagenumber=[];
    for(let i=1;i<=Math.ceil(totalposts/perpageimages);i++){
        pagenumber.push(i);
    }
    return(
        <>
        <nav style={{display:"flex",justifyContent:"flex-end",marginRight:"50px"}}>
                {pagenumber.map((item)=>{
                    return(
                        <button onClick={()=>{paginate(item)}}><a key={item}>{item}</a></button>
                        
                    )  
                })}

        </nav>
        </>
    )
}
export default Pagination;