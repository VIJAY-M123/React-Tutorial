import React, { Fragment, useEffect, useState } from "react";
import MovieList from "./MovieList";

export default function Movie() {
    const [Movie, setMovie] = useState([]);

    console.log("Movie", Movie);
    console.log("Movie", typeof (Movie));

    const Handle = () => {
        fetch("https://swapi.dev/api/films/")
            .then(res => {
                return res.json();
            })
            .then(Response => {

                const Tranfrom = Response.results.map((Obj) => {
                    return {
                        id: Obj.episode_id,
                        title: Obj.title,
                        text: Obj.opening_crawl,
                    }
                })

                setMovie(Tranfrom)
            })
    }


    return (
        <div>
            <Fragment>

                <section>
                    <button onClick={Handle}>Movie List</button>
                </section>

                <section>
                    <MovieList object={Movie} />
                </section>
            </Fragment>

        </div>
    )
}