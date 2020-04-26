import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import resume from "../images/resume.PNG";

const Resume = () => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Link onClick={() => setLgShow(true)}>
        <img
          className="resume"
          src={resume}
          style={{
            width: "50px",
            height: "50px",
            filter: "drop-shadow(12px 12px 25px rgba(0,0,0,0.5))",
            borderRadius: "5px",
          }}
          alt="Resume"
        />
      </Link>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <img src={resume} style={{ width: "100%" }} alt="Resume" />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Resume;