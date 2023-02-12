import React, { useState, useEffect } from 'react';
import Posts from './Posts';

const PaginationMain = () => {
    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []);

    const postsProps = {
        posts,
        limit,
        setLimit,
        offset,
        page,
        setPage
    }

    return (
        <div>
            <Posts {...postsProps} />
        </div>
    );
};

export default PaginationMain;