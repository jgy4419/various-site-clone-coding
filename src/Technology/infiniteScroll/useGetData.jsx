import { useState, useEffect } from 'react';

const useGetDataBase = (num) => {
    const [dataBase, setDataBase] = useState([]);
    const [data, setData] = useState([]);
    const defaultCount = 9; // 초기, 요청 할 때 불러올 데이터의 개수

    // 요청이 올 때 마다 데이터 추가로 내보내주기.
    const updateData = () => {
        // 기존 Data에 호출된 데이터들을 concat으로 붙여주기.
        /*
            전제적으로 불러온 데이터(dataBase hook)에서 
            일정하게 불러올 데이터 * 기존 데이터 부터 -> (지금까지 불러와진 데이터들부터 시작.)
            일정하게 불러올 데이터 개수 * 호출되면서 불러올 데이터 까지 자르기 -> (이어서 불러올 9개 데이터까지 자르기.)
        */
        setData(data.concat(dataBase.slice(defaultCount * num, defaultCount * (num + 1))));
    }

    // 처음 불러온 데이터들을 모두 database state에 저장해주기.
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