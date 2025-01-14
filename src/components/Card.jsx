import { useGlobalContext } from "../contexts/GlobalContext";

const imgPath = import.meta.env.VITE_IMG_PATH;
const flags = ["de", "en", "es", "fr", "it"];
export default function Card() {
    const { movies, tvSeries } = useGlobalContext();

    return (


        <>
            <section className="container my-3">
                <h2 className="m-3">Movies</h2>
                <div className="container">
                    <div className="row card-deck">
                        {movies.map((movie) =>
                        (
                            <div className="col-12 col-md-6 col-lg-3 g-4" key={movie.id} >
                                <div className="card h-100 position-relative">
                                    <img src={imgPath + movie.poster_path} alt={movie.title}
                                        className="card-img-top" />
                                    <div className="card-description h-100">
                                        <h5 className="title p-1">{movie.title}</h5>
                                        <p className="overview p-1">{movie.overview}</p>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <img src={`/images/flags/${movie.original_language}.png`} class="rounded mx-auto d-block" alt={movie.original_language}
                                                className="flag" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </section>
            <section className="container">
                <h2 className="m-3">TV Series</h2>
                <div className="container">
                    <div className="row card-deck">
                        {tvSeries.map((series) =>
                        (
                            <div className="col-12 col-md-6 col-lg-3 g-4" key={series.id} >
                                <div className="card h-100 position-relative">
                                    <img src={imgPath + series.poster_path} alt={series.name}
                                        className="card-img-top" />
                                    <div className="card-description h-100">
                                        <h4>{series.name}</h4>
                                        <p className="overview">{series.overview}</p>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <img src={`/images/flags/${series.original_language}.png`} class="rounded mx-auto d-block" alt={series.original_language}
                                                className="flag" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </section>
        </>

    )
}