import React from "react";
import { Modal } from "react-bootstrap";
const ModalCenter = (props) => {
    return (
        <div>
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Trailer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe
                        width="100%"
                        height="800px"
                        src={`https://www.youtube.com/embed/${props.src}?&autoplay=1`}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ModalCenter;
// git > new > terminal > bash
// git my-movie
// git init
// git add .
// git comit -m " first commit"
