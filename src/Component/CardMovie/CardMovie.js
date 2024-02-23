import React from "react";
import "./CardMovie.css";
import { NavLink } from "react-router-dom";

const CardMovie = (props) => {
    return (
        <NavLink to={`/detail-movie/${props.id}`}>
            <div className="card-movie">
                <img src={props.img} alt="" />
                <h1 className="title">{props.title}</h1>
                <div className="date-n-vote">
                    <p className="date">{props.date}</p>
                    <p className="vote">
                        <i class="fa-solid fa-star"></i>
                        {props.vote}
                    </p>
                </div>
            </div>
        </NavLink>
    );
};

export default CardMovie;
