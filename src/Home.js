const Home = () => {

    const handleClick = (e) => {
        console.log ('Hey Aleks', e.target);
    }

    const handleClickAgain = (name, e) => {
        console.log('Hi '+ name, e.target);
    }

    return (  
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick} >Click Me</button>
            <button onClick={ (e) => handleClickAgain('Olga', e)}> Click Me Again </button>
        </div>
    );
}
 
export default Home;