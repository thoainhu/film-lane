import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import ModalCenter from "./ModalCenter";
import "./DetailMovie.css";
import useFetch from "../../useFetch";
import { useParams } from "react-router-dom";
const DetailMovie = () => {
    const [modalShow, setModalShow] = useState(false);
    const { slug: keyMovieID } = useParams();
    const apiDetailMovie = useFetch(`https://api.themoviedb.org/3/movie/${keyMovieID}?api_key=e9e9d8da18ae29fc430845952232787c`);
    const genres = apiDetailMovie.genres && apiDetailMovie.genres.map((genre) => genre.name);
    const apiTrailer = useFetch(`https://api.themoviedb.org/3/movie/${keyMovieID}/videos?api_key=e9e9d8da18ae29fc430845952232787c`);
    const trailerResults = apiTrailer.results && apiTrailer.results.find((result) => result.type === "Trailer");
    return (
        <Container>
            <div className="movie">
                <img src={`https://image.tmdb.org/t/p/w300${apiDetailMovie.poster_path}`} alt="" />
                <div className="movie-detail">
                    <h4 className="title">{apiDetailMovie.title}</h4>
                    <div className="detail-a">
                        <p className="date">{apiDetailMovie.release_date}</p>
                        <p className="type">{genres && genres.join(", ")}</p>
                        <p className="duration">
                            <i className="fa-regular fa-clock"></i>
                            {apiDetailMovie.runtime} mins
                        </p>
                    </div>
                    <div className="detail-b">
                        <div className="rate">
                            <p className="number-rate">{apiDetailMovie.vote_average}%</p>
                        </div>
                        <p className="user-score">user score</p>
                        <div>
                            <Button variant="outline-light" onClick={() => setModalShow(true)}>
                                <i className="fa-solid fa-play"></i> Play trailer
                            </Button>
                            <ModalCenter show={modalShow} src={trailerResults && trailerResults.key} onHide={() => setModalShow(false)} />
                        </div>
                    </div>
                    <p className="detail-c">Can You Bury Your Past?</p>
                    <h5 className="detail-title-overview">Overview</h5>
                    <p className="detail-overview">{apiDetailMovie.overview}</p>
                </div>
            </div>
        </Container>
    );
};

export default DetailMovie;
