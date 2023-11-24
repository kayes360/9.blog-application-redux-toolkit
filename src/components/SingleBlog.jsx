import React, { useEffect, useState } from "react";
import TagText from "./TagText";
import { useDispatch } from "react-redux";
import { fetchUpdateBlog } from "../features/updateBlog/updateBlogSlice";

export default function SingleBlog({ blog }) {
  const [singleBlogData, setSingleBlogData] = useState(blog);
  const { id, image, title, tags, likes, isSaved, description } =
    singleBlogData;
  const dispatch = useDispatch();

  const handleSave = () => {
    //updating the local state of isSaved
    const updatedSingleBlog = { ...singleBlogData };
    updatedSingleBlog.isSaved = !updatedSingleBlog.isSaved;
    setSingleBlogData(updatedSingleBlog);

    const updatedData = { isSaved: !isSaved };
    dispatch(fetchUpdateBlog({ id, updatedData }));
  };

  const handleLike = () => { 
    
    const updatedSingleBlog = { ...singleBlogData };
    updatedSingleBlog.likes = updatedSingleBlog.likes + 1
    setSingleBlogData(updatedSingleBlog);
    const updatedData = { likes: likes+1 };
    dispatch(fetchUpdateBlog({ id, updatedData })); 
   }
  return (
    <div>
      <img
        src={image}
        alt={title}
        className="w-full rounded-md"
        id="megaThumb"
      />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="singleTitle">
          {title}
        </h1>

        <TagText tags={tags} />
         
        <div className="btn-group"> 
          <button className="like-btn" id="singleLinks"
          onClick={handleLike}
          >
            <i className="fa-regular fa-thumbs-up"></i> {likes}
          </button> 
          <button
            className={`save-btn gap-2 flex justify-center items-center ${isSaved ? "active" : ""}`}
            id="singleSavedBtn"
            onClick={handleSave}
          >
            <i className="fa-regular fa-bookmark  "></i>
            {isSaved ? "Saved" : "Save"}
          </button>
        </div>
        <div className="mt-6">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
