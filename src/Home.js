import {useEffect, useState} from 'react';
import BlogList from './BlogList';


const Home = () => {

    const [ blogs, setBlogs] = useState ( null
        /*[
            { title: "My first React App", body: 'lorem ipsum...', author: "Aleks", id: 1},
            { title: "Junior web developer", body: 'lorem ipsum...', author: "Olga", id: 2},
            { title: "Coding for dummies", body: 'lorem ipsum...', author: "Lada", id: 3},
        ] */
    );

   /*const deleteBlog = (id) => {
        const updatedBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(updatedBlogs);
    } */

    const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
        setTimeout( () => {
            fetch('http://localhost:8000/blogs') // this requets returns the Promise
            .then(response => { // for Promise we can use method .then
                return response.json() // this line passes the JSON into a Javascript object for us
            }) 
            .then((data) =>{
                setBlogs(data);
                setIsLoading(false);
            });
        }, 2000)
    }, []);

    return (  
        <div className="home">
            {isLoading && <div>Data from DB is Loading</div>}
            { blogs /*false as start State is null*/ && < BlogList blogs = { blogs} title = "All blogs!" />}
        </div>
    );
}
 
export default Home;