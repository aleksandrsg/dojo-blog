import {useState} from 'react';


const Home = () => {
    // let name = 'Aleks';
    const [name, setName] = useState('Olga');
    const [age, setAge] = useState(39);
    const handleClick = () => {
        setName('Lada');
        setAge(5);
    }

    return (  
        <div className="home">
            <h2>Homepage</h2>
            <p> {name} + {age} </p>
            <button onClick={handleClick} >Click Me</button>
        </div>
    );
}
 
export default Home;