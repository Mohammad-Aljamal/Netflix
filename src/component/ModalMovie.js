import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import axios from 'axios';
import { useState } from "react";

function ModalMovie(props) {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serverUrl =`${process.env.REACT_APP_SERVER_URL}addMovie`;
    const obj = {
      title: props.item.title,
      poster_path: props.item.poster_path,
      release_date: props.item.release_date,
      overview: props.item.overview,
      comment: e.target.comment.value
    }

    const result = await axios.post(serverUrl,obj);
    console.log(result.data);
  
  };


  return (
    <>
      <Modal show={props.showFlag} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.item.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={`${process.env.REACT_APP_IMEGE_URL}${props.item.poster_path}`} rounded width="50%"   />

          <h6>{props.item.release_date}</h6>
          <h6>{props.item.overview}</h6>
          

          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label><h5>comment</h5></Form.Label>
              <Form.Control
                name="comment"
                type="text"
                defaultValue=''
              />
            </Form.Group>
           
            <Form.Group>
            <Button type="submit" onClick={props.handleClose}>Add to Favorite</Button>
            </Form.Group>
          </Form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={() => {addFav(props.item)}}>
            Add to Favorite
          </Button> */}
        </Modal.Footer>
      </Modal>

    </>
  );
}

export default ModalMovie;
