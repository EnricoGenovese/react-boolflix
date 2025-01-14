import { useGlobalContext } from "../contexts/GlobalContext";

const imgPath = import.meta.env.VITE_IMG_PATH;

export default function Card() {

    const { movies } = useGlobalContext();


    return (
        <section className="container">
            <h2 className="m-3">Movies</h2>
            <div className="container">
                <div className="row card-deck">
                    {movies.map((movie) =>
                    (
                        <div className="col-12 col-md-4 col-lg-3 m-3" key={movie.id} >
                            <div className="card h-100" >
                                <img src={imgPath + movie.poster_path} alt={movie.title} />
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