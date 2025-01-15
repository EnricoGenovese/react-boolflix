import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;


const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [tvSeries, setTvSeries] = useState([])

    const [searching, setSearching] = useState(false)

    function getData(query, endpoint) {
        axios.get(apiUrl + "/search/" + endpoint, {
            params: {
                api_key: apiKey,
                query,
                language: "it-IT",
            },
        }).then((res) => {
            if (endpoint === "movie") {
                setMovies(res.data.results);
            } else {
                setTvSeries(res.data.results);
            }
        }).catch((error) => {
            console.log(error)
        }).finally(() => {
            console.log("Done");
        })
    }

    function search(query) {
        if (!query) {
            setMovies([]);
            setTvSeries([]);
            setSearching(false)
        } else {
            getData(query, "movie");
            getData(query, "tv");
            setSearching(true);
        }

    };

    const data = { movies, tvSeries, search, searching }

    return (
        <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
    )
};




function useGlobalContext() {
    const globalContext = useContext(GlobalContext);
    return globalContext;
}

export { apiUrl, apiKey, GlobalProvider, useGlobalContext };