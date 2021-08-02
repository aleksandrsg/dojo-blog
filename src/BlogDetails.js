import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails= () => {

    const {id } = useParams();

    const {data:blog, isLoading, error } =useFetch('http://localhost:8000/blogs/' + id )
    const history = useHistory();

    const deleteBlog = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
    }

    return ( 
        <div className="blog-details">
                { isLoading && <div> The data is loading ....</div>}
                {error && <div> {error} </div>}
                Blog Details - { id }
                {blog && (
                    <article>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                        <div> {blog.body}</div>
                        <button onClick={deleteBlog}>Delete Blog</button>
                    </article>
                )}
        </div>
     );
}
 
export default BlogDetails;