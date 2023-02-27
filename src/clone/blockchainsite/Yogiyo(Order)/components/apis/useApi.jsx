import React, {useEffect} from 'react';

const useApi = () => {
    const [data, setData] = React.useState([]);
    const [error, setError] = React.useState(null);

    const fetchData = async () => {
        try {   
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setData(data);
            console.log(data);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return{
        data
    }
};

export default useApi;