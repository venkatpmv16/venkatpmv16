import React from "react"

import { dumplogs } from "./Utils";

  const BlogCard =(props)=>{
    dumplogs(props)
    return(
      <div className='BlogCard'>
      <h5>{props.id}</h5>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      </div> 
    )
}

export default BlogCard;