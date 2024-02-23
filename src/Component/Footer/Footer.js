import React from "react";
import { Container, NavLink } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <div className="title">
                    <img src="https://react-film-clone.vercel.app/img/logo.svg" alt="" />

                    <div className="footer-link">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/movie">Movie</NavLink>
                    </div>
                </div>
                <div className="detail">
                    © 2024 <span>Filmlane</span>. All Rights Reserved by <span>MeMe</span>
                </div>{" "}
            </Container>
        </div>
    );
};

export default Footer;
