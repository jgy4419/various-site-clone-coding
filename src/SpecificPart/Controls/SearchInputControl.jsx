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
    const [inputState, setInputState] = useState(false);
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
        const namesCopy = [...names];
        setResults(
            namesCopy.filter(
                n => 
                    searchTerm === "" ||
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