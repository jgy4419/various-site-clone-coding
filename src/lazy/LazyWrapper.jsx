// Item 들을 그릴 컴포넌트
import React from 'react';

const LazyWrapper = ({ children }) => {
    const [value, setValue] = React.useState("")

    const handleChangeValue = (event) => {
        setValue(event.target.value);
        console.log('event', event, 'value', value)
    }
    return children({
        value, 
        onChange: handleChangeValue
    })
};

export default LazyWrapper;