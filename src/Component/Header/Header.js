import React, { useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
    const [keySearch, setKeySearch] = useState("");
    const navigate = useNavigate();
    const handleSearch = (e) => {
        if (e.keyCode === 13) {
            navigate(`/search/${keySearch}`);
            setKeySearch("");
            // e.target.value = "";
        }
    };
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <NavLink to="/">
                    <img src="https://react-film-clone.vercel.app/img/logo.svg" alt="" />
                </NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: "100px", width: "44%" }} navbarScroll>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/movie-page">Movie</NavLink>
                    </Nav>
                    <div className="search d-flex">
                        <input
                            type="text"
                            placeholder="Search movie"
                            value={keySearch}
                            onChange={(e) => setKeySearch(e.target.value)}
                            onKeyDown={handleSearch}
                        />
                        <Button variant="outline-link">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
