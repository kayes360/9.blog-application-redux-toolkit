import React, { useEffect } from "react";  
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog } from "../features/blog/blogSlice";
import Notice from "../components/Notice";
import SingleBlog from "../components/SingleBlog"; 
import RelatedBlogs from "../components/RelatedBlog/RelatedBlogs";

export default function Post() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchBlog(id));
  }, [dispatch,id]);

  const { isLoading, isError, error, blog } = useSelector(
    (state) => state.blog
  );
   
 
  //decide what to render
  let singleBlogContent;

  if (isLoading)
    singleBlogContent = <Notice message="Blog Content Is Loading" />;
  if (!isLoading && isError) singleBlogContent = <Notice message={error} />;
  if (!isLoading && !isError && blog) {

    singleBlogContent = (
      <>
        <SingleBlog blog={blog} />
      </>
    );
  }

  return (
    <>
      {/* <!-- Go Home / Go Back --> */}
      <div className="container mt-8">
        <Link
          to="/"
          className="inline-block text-gray-600 home-btn"
          id="goHome"
        >
          <i className="mr-2 fa-solid fa-house"></i>Go Home
        </Link>
      </div>
      <section className="post-page-container">
        {/* <!-- detailed post  --> */}
        <main className="post">{singleBlogContent}</main>
        {/* <!-- detailed post ends --> */}

        <RelatedBlogs tags={blog.tags} currentBlogId={id}/>
      </section>
    </>
  );
}
