import {useState} from 'react';


const Home = () => {

    const [ blogs, setBlogs] = useState (
        [
            { title: "My first React App", body: 'lorem ipsum...', author: "Aleks", id: 1},
            { title: "Junior web developer", body: 'lorem ipsum...', author: "Aleks", id: 2},
            { title: "Coding for dummies", body: 'lorem ipsum...', author: "Aleks", id: 3},
        ]
    );

    return (  
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview">
                    <h2>{blog.title}</h2>
                    <p> {blog.author}</p>
                    <p> {blog.body}</p>
                </div>
            ))
            }
        </div>
    );
}
 
export default Home;