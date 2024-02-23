import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import { Col, Container, Row } from "react-bootstrap";
import CardMovie from "../CardMovie/CardMovie";

const SearchMovie = () => {
    const { slug: keySearch } = useParams();
    const apiSearch = useFetch(` https://api.themoviedb.org/3/search/movie?api_key=e9e9d8da18ae29fc430845952232787c&query=${keySearch}&page=1`);

    return (
        <Container>
            <div className="headline">
                <h3>ONLINE STREAMING</h3>
                <h2>Search Movie : {keySearch}</h2>
            </div>
            <Row>
                {apiSearch.results &&
                    apiSearch.results.map((item) => (
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
        </Container>
    );
};

export default SearchMovie;
