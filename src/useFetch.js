import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [movie, setMovie] = useState([]);
    async function fetchMovie() {
        const res = await fetch(url);
        const data = await res.json();
        setMovie(data);
    }
    useEffect(() => {
        fetchMovie();
    }, [url]);
    //url that đổi thì sẽ fetch lại fetchMovie
    return movie;
};

export default useFetch;
