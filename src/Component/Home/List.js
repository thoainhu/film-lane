import React from "react";
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardMovie from "../CardMovie/CardMovie";
import useFetch from "../../useFetch";
const List = (props) => {
    const apiMovie = useFetch(props.api);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="list">
            <Container>
                <div className="headline">
                    <h3>ONLINE STREAMING</h3>
                    <h2>{props.sectionTitle}</h2>
                </div>
                <div className="slider-container">
                    <Slider {...settings}>
                        {apiMovie.results &&
                            apiMovie.results.map((item) => (
                                <CardMovie
                                    key={item}
                                    id={item.id}
                                    img={` https://image.tmdb.org/t/p/w300${item.poster_path}&page=1`}
                                    title={item.title}
                                    date={item.release_date}
                                    vote={item.vote_average}
                                ></CardMovie>
                            ))}
                    </Slider>
                </div>
            </Container>
        </div>
    );
};
export default List;
