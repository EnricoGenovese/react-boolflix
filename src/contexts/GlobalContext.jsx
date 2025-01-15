import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;


const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [tvSeries, setTvSeries] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [popularSeries, setPupularSeries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searching, setSearching] = useState(false);

    useEffect(() => {
        getPopular
    }, []);

    function getData(query, endpoint) {
        setLoading(true)
        axios.get(apiUrl + "search/" + endpoint, {
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

    function getPopular(endpoint) {
        axios.get(apiUrl + endpoint + "/popular", {
            params: {
                api_key: apiKey,
                language: "it-IT",
            },
        }).then((res) => {
            if (endpoint === "movie") {
                // console.log(res.data)
                setPopularMovies(res.data.results);
            } else {
                // console.log(res.data)
                setPupularSeries(res.data.results);
            }
        }).catch((error) => {
            console.log(error)
        }).finally(() => {
            console.log("Done");
        })
    }

    function search(query) {
        if (!query) {
            getPopular("movie");
            getPopular("tv");
            setMovies([]);
            setTvSeries([]);

            setSearching(false)
        } else {

            getData(query, "movie");
            getData(query, "tv");
            setSearching(true);
        }

    };

    const data = { movies, tvSeries, popularMovies, popularSeries, search, searching, loading }

    return (
        <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
    )
};




function useGlobalContext() {
    const globalContext = useContext(GlobalContext);
    return globalContext;
}

export { apiUrl, apiKey, GlobalProvider, useGlobalContext };