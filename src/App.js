import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import MoviePage from "./Component/MoviePage/MoviePage";
import Header from "./Component/Header/Header";
import SearchMovie from "./Component/MoviePage/SearchMovie";
import Footer from "./Component/Footer/Footer";
import DetailMovie from "./Component/DetailMovie/DetailMovie";

function App() {
    return (
        <div className="film-lane">
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/movie-page" element={<MoviePage />}></Route>
                <Route path="/search/:slug" element={<SearchMovie />}></Route>
                <Route path="/detail-movie/:slug" element={<DetailMovie />}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
