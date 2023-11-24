import React from "react";
import thumbNail from "../../images/ai.jpg";
import TagText from "../TagText";
import { Link } from "react-router-dom";

export default function RelatedBlog({ relatedBlog }) {
  const {id, image, title, tags, createdAt } = relatedBlog; 
  return (
    <div className="card"> 
      <Link to={`/post/${id}`}>
        <img src={image} className="card-image" alt="" />
      </Link>
      <div className="p-4">
        <Link  to={`/post/${id}`} className="text-lg post-title RelatedPostTitle">
          {title}
        </Link>
        <TagText tags={tags}/> 
        {/* <div className="mb-0 tags">
        </div> */}
        <p>{createdAt}</p>
      </div>
    </div>
  );
}
