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
                        <div className="col-12 col-md-6 col-lg-3 g-4" key={movie.id} >
                            <div className="card h-100 position-relative">
                                <img src={imgPath + movie.poster_path} alt={movie.title}
                                    className="card-img-top" />
                                <div className="card-description h-100">
                                    <h4>{movie.title}</h4>
                                    <p>{movie.overview}</p>
                                </div>
                            </div>
                        </div>))
                    }
                </div>
            </div>
        </section>
    )
}