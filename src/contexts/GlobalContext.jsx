import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;


const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const [movies, setMovies] = useState([]);
    const [tvSeries, setTvSeries] = useState([])

    function getMoviesData(query) {
        axios.get(apiUrl + "/search/movie", {
            params: {
                api_key: apiKey,
                query,
                language: "it-IT",
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

    function getSeriesData(query) {
        axios.get(apiUrl + "/search/tv", {
            params: {
                api_key: apiKey,
                query,
                language: "it-IT",
            },
        }).then((res) => {
            console.log(res.data.results)
            setTvSeries(res.data.results);

        }).catch((error) => {
            console.log(error)
        }).finally(() => {
            console.log("Done");
        })
    }

    function search(query) {
        getMoviesData(query);
        getSeriesData(query)
    };

    const data = { movies, tvSeries, search }

    return (
        <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
    )
};




function useGlobalContext() {
    const globalContext = useContext(GlobalContext);
    return globalContext;
}

export { apiUrl, apiKey, GlobalProvider, useGlobalContext };