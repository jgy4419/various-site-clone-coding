import React from 'react';

const Post = ({id, title, body}) => {
    return (
        <>
            <h3>
                {id}. {title}
            </h3>
            <p>{body}</p>
        </>
    );
};

export default Post;