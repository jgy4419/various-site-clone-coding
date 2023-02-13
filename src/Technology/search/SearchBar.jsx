const SearchBar = ({ setData, setSearchValue }) => {

    return (
        <input type="text" placeholder="Search"
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
        />
    );
};

export default SearchBar;



