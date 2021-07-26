import {useEffect, useState} from 'react';
import BlogList from './BlogList';


const Home = () => {

    const [ blogs, setBlogs] = useState (
        [
            { title: "My first React App", body: 'lorem ipsum...', author: "Aleks", id: 1},
            { title: "Junior web developer", body: 'lorem ipsum...', author: "Olga", id: 2},
            { title: "Coding for dummies", body: 'lorem ipsum...', author: "Lada", id: 3},
        ]
    );

    const deleteBlog = (id) => {
        const updatedBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(updatedBlogs);
    }

    const [name, setName ] = useState('Olga');

    useEffect( () => {
        console.log ('Rerendered')
    }, [name]);

    return (  
        <div className="home">
            < BlogList blogs = { blogs} title = "All blogs!" deleteBlog= {deleteBlog}/>
            < BlogList blogs = { blogs.filter((blog) => blog.author === 'Aleks')} title = "Aleks Blogs" deleteBlog= {deleteBlog}/>
            <p> {name}</p>
            <button onClick ={ () => {setName('Aleks')} }> Change name</button>
        </div>
    );
}
 
export default Home;