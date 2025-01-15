import { FaRegStar, FaStar } from "react-icons/fa";

const imgPath = import.meta.env.VITE_IMG_PATH;
const flags = ["de", "en", "es", "fr", "it", "ja",];

export default function Card({ elem }) {
    const overview = elem.overview === "" ?
        "No description avaiable for this product"
        : elem.overview

    const flag = flags.includes(elem.original_language) ?
        elem.original_language + ".png" : "other.png"

    const img = elem.poster_path ?
        imgPath + elem.poster_path : "/images/placeholder/placeholder.png"

    function ratingStars() {
        let rating = [];
        for (let s = 1; s <= 5; s++) {
            const star = s < Math.ceil(elem.vote_average / 2) ?
                (
                    <FaStar key={s} />
                ) :
                (
                    <FaRegStar key={s} />
                );
            rating.push(star);
        }
        return rating;
    }

    return (
        <>
            <div className="card h-100 position-relative">
                <img src={img} alt={elem.title || elem.name}
                    className="card-img-top" />
                <div className="card-description h-100">
                    <h5 className="title p-1">{elem.title || elem.name}</h5>
                    <p className="overview p-1">{overview}</p>
                    <div className="rating text-warning p-1 my-2 text-center">{ratingStars()}</div>
                    <div className="d-flex justify-content-center align-items-center">
                        <img src={`/images/flags/${flag}`}
                            className="rounded mx-auto d-block flag"
                            alt={elem.original_language} />
                    </div>

                </div>
            </div>
        </>
    )
}