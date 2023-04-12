import React from 'react';

function Second({str}) {
    console.log(str);
    return (
        <>
        <h1>??</h1>
        </>
    )
}

export default React.memo(Second)