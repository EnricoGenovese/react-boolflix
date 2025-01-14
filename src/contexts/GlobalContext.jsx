import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;


const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const [movies, setMovies] = useState([]);

    function getData(query) {
        axios.get(apiUrl + "/search/movie", {
            params: {
                api_key: apiKey,
                query,
            },
        }).then((res) => {
            console.log(res.data.results)
            setMovies(res.data.results);

        }).catch((error) => {
            console.log(error)
        }).finally(() => {
            console.log("Done");
        })
    }

    function search(query) {
        getData(query);
    };

    const data = { movies, search }

    return (
        <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
    )
};




function useGlobalContext() {
    const globalContext = useContext(GlobalContext);
    return globalContext;
}

export { apiUrl, apiKey, GlobalProvider, useGlobalContext };