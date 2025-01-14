import axios from "axios";
import { useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";


export default function Searchbar() {
    const { search } = useGlobalContext();
    const [query, setQuery] = useState("");


    function handleInput(e) {
        setQuery(e.target.value)
    }

    function handleSearch(e) {
        e.preventDefault();
        search(query)
    }

    return (
        <form>
            <input type="search"
                placeholder="Search here"
                name="query"
                id="query"
                onChange={handleInput} />
            <button type="submit"
                name="search"
                id="search"
                onClick={handleSearch}>Search</button>
        </form>
    )
}
