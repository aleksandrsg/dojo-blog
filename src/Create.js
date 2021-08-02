import { useState } from "react";
import { useHistory } from "react-router";


const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Olga');
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = { title, body, author};

        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
          }).then(() => {
            console.log('new blog added');
            history.push('/');
          })
    }

    return (  
        <div className="create">
            <h2>Add New Blog</h2>
            <form onSubmit = {handleSubmit}>
                <label> Blog Title:</label>
                <input type="text" 
                required
                value = {title}
                onChange ={(e) => setTitle(e.target.value)}
                />
                <label> Blog Body:</label>
                <textarea required
                value = {body}
                onChange ={(e) => setBody(e.target.value)}
                ></textarea>
                <label> Blog Author:</label>
                <select 
                    value={author}
                    onChange ={(e) => setAuthor(e.target.value)}
                >
                    <option value="Olga">Olga</option>
                    <option value="Aleks">Aleks</option>
                </select>
                <button>Add New Blog</button>
            </form>
            <p> {title}</p>
            <p> {body}</p>
            <p> {author}</p>
        </div>

    );
}
 
export default Create;