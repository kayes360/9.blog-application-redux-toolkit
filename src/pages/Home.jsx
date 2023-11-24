import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../features/blogs/blogsSlice";
import AsideLeft from "../components/AsideLeft";
import BlogCard from "../components/BlogCard";
import Notice from "../components/Notice";

export default function Home() {
  const dispatch = useDispatch();
  const [blogData, setBlogData] = useState(null);
  const { isLoading, isError, error, blogs } = useSelector(
    (state) => state.blogs
  );
  const sortKey = useSelector((state) => state.sort.sortKey);
  const filterKey = useSelector((state) => state.filter.filterKey);
  //sort system
  const sortBlogData = (sortKey) => {
    switch (sortKey) {
      case "newest":
        return [...blogs].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      case "most_liked":
        return [...blogs].sort((a, b) => b.likes - a.likes);
      case "default":
        return [...blogs];
      default:
        return [...blogs];
    }
  };

  //filter system
  const filterBlogData = (filterKey, blogs) => {
    if (filterKey === "saved") {
      return [...blogs].filter((blog) => blog.isSaved === true);
    }
    if (filterKey === "all") {
      return [...blogs];
    }
  };

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch, sortKey]);

  useEffect(() => {
    setBlogData(sortBlogData(sortKey));
  }, [blogs, sortKey, filterKey]);

  useEffect(() => {
    setBlogData(filterBlogData(filterKey, sortBlogData(sortKey)));
  }, [blogs, sortKey, filterKey]);

  //decide what to render
  let blogContent;

  if (isLoading) blogContent = <Notice message="Blogs Are Loading" />;
  if (!isLoading && isError) blogContent = <Notice message={error} />;
  if (!isLoading && !isError && blogData?.length === 0)
    blogContent = <Notice message="No Blog Found!" />;
  if (!isLoading && !isError && blogData?.length > 0)
    blogContent = blogData.map((blog) => (
      <BlogCard key={blog.id} blog={blog} />
    ));

  return (
    <>
      {/* <!-- main --> */}
      <section className="wrapper">
        <AsideLeft />
        {/* <!-- posts container  --> */}
        <main className="post-container" id="postContainer">
          {blogContent}
        </main>
        {/* <!-- posts container ends --> */}
      </section>
    </>
  );
}
