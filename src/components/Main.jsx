import { useGlobalContext } from "../contexts/GlobalContext";
import List from "./List";


export default function Main() {

    const { movies, tvSeries, searching } = useGlobalContext()
    return (
        < main className="d-flex flex-column">
            {!searching ? (
                <h2> Prova a cercare un film o una serie TV</h2>
            ) : (
                <>
                    <List section="Movies" list={movies} />
                    <List section="TV Series" list={tvSeries} />
                </>
            )}
        </main >
    )
}