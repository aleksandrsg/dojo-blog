import {useState} from 'react';
import BlogList from './BlogList';


const Home = () => {

    const [ blogs, setBlogs] = useState (
        [
            { title: "My first React App", body: 'lorem ipsum...', author: "Aleks", id: 1},
            { title: "Junior web developer", body: 'lorem ipsum...', author: "Olga", id: 2},
            { title: "Coding for dummies", body: 'lorem ipsum...', author: "Lada", id: 3},
        ]
    );

    return (  
        <div className="home">
            < BlogList blogs = { blogs} title = "All blogs!"/>
            < BlogList blogs = { blogs.filter((blog) => blog.author === 'Aleks')} title = "Aleks Blogs"/>
        </div>
    );
}
 
export default Home;