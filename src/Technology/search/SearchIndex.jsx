import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import Card from './Card';

const Search = () => {
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    return (
        <>
            <SearchBar setData={setData} setSearchValue={setSearchValue} />
            {
                data.filter((item) => {
                    if (searchValue === '') {
                        return item;
                    } else if (item.title.toLowerCase().includes(searchValue.toLowerCase())) {
                        return item
                    }
                }).map((item, index) => (
                    <Card key={index} item={item} />                    
                ))
            }
        </>
    );
};

export default Search;

