import React, {useState, useEffect} from 'react';
import './SearchInputControl.scss';

// database
const names = [
    'jgy',
    'mjh',
    'sws',
    'test',
    'abc',
    'tt',
    'mm',
    'm',
    'mmm'
];

// custom-hook
const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);
    return debouncedValue;
}


// --------------------------- components ---------------------------
const AutoSuggest = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);
    // 검색창에 값이 있는지 없는지의 상태 (상태에 따른 스타일 변경)
    const [inputState, setInputState] = useState(false);
    // custom-hook 가져와서 input에 입력된 값, debounce 될 시간 인자로 보내주기.
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    const handleSearched = e => {
        e.target.value === '' 
            ? setInputState(false)
            : setInputState(true)
        setSearchTerm(e.target.value);
    }
    const handleClicked = (name) => {
        setSearchTerm(name);
    }

    useEffect(() => {
        const namesCopy = [...names]; // database에 있는 값 가져옴.
        setResults(
            // 검색창에 입력한 값들을 DataBase에 있는 값들 기준으로 필터링
            namesCopy.filter(
                n => 
                    // 대, 소문자를 구분하기 위해서 DB값 검색창 값 모두 소문자로 변경해서 포함된 값 반환.
                    n.toLowerCase().includes(searchTerm.toLowerCase())
            )
        )
    }, [debouncedSearchTerm, searchTerm]);

    return (
        
        <SearchInputControl
            handleSearched={handleSearched}
            handleClicked={handleClicked}
            results={results}
            searchTerm={searchTerm}
            inputState={inputState}
        />
    )
}

// 실제 보여질 UI 구성.
const SearchInputControl = ({
    handleSearched,
    handleClicked,
    results,
    searchTerm,
    inputState
}) => {
    return (
        <>
            <div className="search_input_control_contain">
                <div className="search_input_control_inner">
                    <section className="search_input_control_content">
                        <h1 className='search_input_control_title'>JGYGLE</h1>
                        <input 
                            className={inputState === false ? 'search_input_control_input' : 'search_input_control_input focus' }
                            value={searchTerm} 
                            spellCheck={false}
                            type="text" 
                            onChange={handleSearched}
                        />
                        <div className={inputState === true ? 'menu open' : 'menu'}>
                            <ul className='result_lists'>
                            {
                                results.map((name) => {
                                    return (
                                        <li 
                                            className='result_list'
                                            key={name}
                                            onClick={() => handleClicked(name)}
                                        >
                                            {name}
                                        </li>
                                    )
                                })
                            }
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default AutoSuggest;