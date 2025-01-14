import { useState, useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "../contexts/GlobalContext";

export default function Card() {

    const { movies } = useGlobalContext();


    // function getData() {
    //     axios.get(apiUrl + "/search/movies" + apiKey).then((res) => {
    //         console.log(res.data.results)
    //         setMovies(res.data.results)

    //     })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    //         .finally(() => {
    //             // console.log("Done");
    //         })
    // }

    return (
        <section className="container">
            <h2 className="m-3">Movies</h2>
            <div className="container">
                <div className="row card-deck">
                    {movies.map((movie) =>
                    (<div className="col-12 col-md-4 col-lg-3 m-3" key={movie.id} >
                        <div className="card h-100" >
                            <h6>{movie.title}</h6>
                            <p className="text-truncate d-inline-block">{movie.overview}</p>
                        </div>
                    </div>))
                    }
                </div>
            </div>
        </section>
    )
}