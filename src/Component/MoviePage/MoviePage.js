import React, { useEffect, useState } from "react";
import CardMovie from "../CardMovie/CardMovie";
import { Button, Col, Container, Row } from "react-bootstrap";
import useFetch from "../../useFetch";
import "./MoviePage.css";
const MoviePage = () => {
    const [page, setPage] = useState(1);
    const moviePage = useFetch(`https://api.themoviedb.org/3/discover/movie?api_key=e9e9d8da18ae29fc430845952232787c&page=${page}`);
    const [newMoviePage, setNewMoviePage] = useState([]);
    console.log(moviePage);
    const handleShowMore = () => {
        setPage(page + 1);
    };

    useEffect(() => {
        if (moviePage.results) {
            setNewMoviePage((prevMovies) => [...prevMovies, ...moviePage.results]);
        }
    }, [moviePage]);
    // vì moviePage thay đổi thì bên trong mới chạy, nên cái mình đnag muốn thay đổi để fecth ra là moviePage.results nên mình sẽ đặt dependeces moviePage

    return (
        <div className="movie-page">
            <Container>
                <div className="headline">
                    <h3>ONLINE STREAMING</h3>
                    <h2>List Movie</h2>
                </div>
                <Row>
                    {newMoviePage.map((item) => (
                        <Col lg={3}>
                            <CardMovie
                                key={item.id}
                                id={item.id}
                                img={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                                title={item.original_title}
                                date={item.release_date}
                                vote={item.vote_average}
                            ></CardMovie>
                        </Col>
                    ))}
                </Row>
                <Button variant="outline-warning" onClick={handleShowMore}>
                    Show more
                </Button>
            </Container>
        </div>
    );
};

export default MoviePage;
