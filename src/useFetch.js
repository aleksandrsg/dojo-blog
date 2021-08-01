import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [ data, setData] = useState ( null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout( () => {
            fetch(url) // this requets returns the Promise
            .then(response => { // for Promise we can use method .then
                if(!response.ok) {
                    throw Error('Unable to fetch data from Server');
                }
                return response.json() // this line passes the JSON into a Javascript object for us
            }) 
            .then((data) =>{
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch( err => {
                setIsLoading(false);
                setError(err.message);
            })
        }, 2000);
    }, [url]);

    return {data, isLoading, error}
}

export default useFetch;