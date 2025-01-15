import { useGlobalContext } from "../contexts/GlobalContext";
import List from "./List";
import Loader from "./Loader";

export default function Main() {

    const { movies, tvSeries, popularMovies, popularSeries, searching, loading } = useGlobalContext()
    return (
        < main className="d-flex flex-column">
            {!searching ? (
                <>
                    <List section="Popular Movies" list={popularMovies} />
                    <List section="Popular TV Series" list={popularSeries} />
                </>
            ) : (
                <>
                    <List section="Movies" list={movies} />
                    <List section="TV Series" list={tvSeries} />
                    <List section="Popular Movies" list={popularMovies} />
                    <List section="Popular TV Series" list={popularSeries} />
                </>
            )}
        </main >
    )
}