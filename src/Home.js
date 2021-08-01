import {useEffect, useState} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';


const Home = () => {

    const { data, isLoading, error}= useFetch('http://localhost:8000/blogs');    
    // const [ blogs, setBlogs] = useState ( null);
        /*[
            { title: "My first React App", body: 'lorem ipsum...', author: "Aleks", id: 1},
            { title: "Junior web developer", body: 'lorem ipsum...', author: "Olga", id: 2},
            { title: "Coding for dummies", body: 'lorem ipsum...', author: "Lada", id: 3},
        ] */

   /*const deleteBlog = (id) => {
        const updatedBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(updatedBlogs);
    } */

    // const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState(null);

    return (  
        <div className="home">
            {error &&  <div>{error}</div>}
            {isLoading && <div>Data from DB is Loading</div>}
            { data /*false as start State is null*/ && < BlogList blogs = { data} title = "All blogs!" />}
        </div>
    );
}
 
export default Home;