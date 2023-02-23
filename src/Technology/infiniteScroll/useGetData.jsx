import { useState, useEffect } from 'react';

const useGetDataBase = (num) => {
    const [dataBase, setDataBase] = useState([]);
    const [data, setData] = useState([]);
    const defaultCount = 9;

    // 요청이 올 때 마다 데이터 추가로 내보내주기.
    const updateData = () => {
        setData(data.concat(dataBase.slice(defaultCount * num, defaultCount * (num + 1))));
    }

    useEffect(() => {
        (async () => {
        await fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(dataBase => {
                setDataBase(dataBase);
                setData(dataBase.slice(0, 9));
            });
        })();
    }, []);

    return {
        data,
        updateData
    };
};

export default useGetDataBase;