import Card from "./Card";

export default function List({ section, list }) {
    return (
        <section className="container my-3">
            <h2 className="m-3">{section}</h2>
            <div className="container">
                <div className="row card-deck">
                    {list.map((elem) =>
                    (
                        <div className="col-12 col-md-6 col-lg-3 g-4" key={elem.id} >
                            <Card elem={elem} />
                        </div>
                    ))
                    }
                </div>
            </div>
        </section>
    )
}