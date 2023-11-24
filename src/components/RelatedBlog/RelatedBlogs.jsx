import React, { useEffect } from 'react' 
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedBlogs } from '../../features/relatedBlogs/relatedBlogsSlice';
import RelatedBlog from './RelatedBlog';
import Notice from '../Notice';

export default function RelatedBlogs({tags, currentBlogId}) {
 
 
const dispatch = useDispatch()


const { isLoading, isError, error, relatedBlogs } = useSelector(
  (state) => state.relatedBlogs
);
 
useEffect(() => {
  dispatch(fetchRelatedBlogs({tags, currentBlogId}))
}, [dispatch])

  //decide what to render
  let relatedBlogContent;

  if (isLoading) relatedBlogContent = <Notice message="Related Blog Content Is Loading" />;
  if (!isLoading && isError) relatedBlogContent = <Notice message={error} />;
  if (!isLoading && !isError && relatedBlogs.length===0) relatedBlogContent = <Notice message="No Related Blog Found"/> ;
  if (!isLoading && !isError && relatedBlogs.length>0) {

    relatedBlogContent = relatedBlogs.map((relatedBlog)=> <RelatedBlog key={relatedBlog.id} relatedBlog={relatedBlog} />)
  }

  return (
    <aside>
    <h4 className="mb-4 text-xl font-medium" id="relatedPosts">
      Related Posts
    </h4>
    <div className="space-y-4 related-post-container">
      {/* <!-- related post  --> */}
       {relatedBlogContent} 
      {/* <!-- related post ends --> */}
       
    </div>
  </aside>
  )
}
