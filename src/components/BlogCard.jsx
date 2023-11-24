import React from "react";
 
import { Link } from "react-router-dom";
import TagText from "./TagText";
export default function BlogCard({ blog }) {
  const { id, image, createdAt, likes, title, isSaved, tags } = blog;
  return (
    <div className="card">
      <Link to={`/post/${id}`}>
        <img src={image} className="card-image" alt="" />
      </Link>
      <div className="p-4">
        <div className="card-header">
          <p className="publishedDate">{createdAt}</p>
          <p className="likeCount">
            <i className="fa-regular fa-thumbs-up"></i>{likes}
          </p>
        </div>
        <Link to={`/post/${id}`} className="postTitle">
          {title}
        </Link>

       <TagText tags={tags}/>
        {/* <!-- Show this element if post is saved --> */}
        {isSaved && (
          <div className="flex gap-2 mt-4">
            <span className="badge"> Saved </span>
          </div>
        )}
        {/* <!-- Show this element if post is saved Ends --> */}
      </div>
    </div>
  );
}
