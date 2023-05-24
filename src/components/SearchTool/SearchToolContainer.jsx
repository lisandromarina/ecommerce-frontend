import React, { useState, useRef, useEffect } from 'react';
import SearchToolComponents from './SearchToolComponents';
import { fetchOptionsForSearchTool } from '../../redux/actions/productAction';
import { useDispatch } from "react-redux";

function SearchToolContainer({ className }) {
    const [search, setSearch] = useState("");
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    function handleOnChange(text) {
        setSearch(text);
    };


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setIsFocused(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleFocus = () => {
        setIsFocused(true);
        console.log(filteredOptions)
    };

    async function fetchFilteredOptions() {
        let aux = await dispatch(fetchOptionsForSearchTool(search))
        setFilteredOptions(aux.data);
    }

    useEffect(() => {
        if (search.length > 2) fetchFilteredOptions()
    }, [search]);

    return (
        <SearchToolComponents
            className={className}
            isFocused={isFocused}
            inputRef={inputRef}
            handleFocus={handleFocus}
            options={filteredOptions}
            handleOnChange={handleOnChange}
        />
    )
}

export default SearchToolContainer
