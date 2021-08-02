import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Olga');

    return (  
        <div className="create">
            <h2>Add New Blog</h2>
            <form>
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