import React from "react";
import Banner from "./Banner";
import Section from "./Section";

const Home = () => {
    const apiHome = [
        {
            id: 1,
            apiLink: "https://api.themoviedb.org/3/discover/movie?api_key=e9e9d8da18ae29fc430845952232787c&page=1",
            sectionTitle: "Now Playing Movie",
        },
        {
            id: 2,
            apiLink: "https://api.themoviedb.org/3/movie/upcoming?api_key=e9e9d8da18ae29fc430845952232787c&page=1",
            sectionTitle: "Upcoming Movie",
        },
        {
            id: 3,
            apiLink: "https://api.themoviedb.org/3/movie/top_rated?api_key=e9e9d8da18ae29fc430845952232787c&page=1",
            sectionTitle: "Top Rated Movie",
        },
    ];
    return (
        <div>
            <Banner></Banner>
            {apiHome.map((item) => (
                <Section key={item.id} apiLink={item.apiLink} sectionTitle={item.sectionTitle}></Section>
            ))}
        </div>
    );
};

export default Home;
