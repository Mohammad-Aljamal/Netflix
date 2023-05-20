import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ModalMovie from './ModalMovie';
import { useState } from 'react';

function Movie(props) {

  const [showModal,setShowModal] = useState(false);
  const [passItemToModal,setPassItemToModal] = useState ({});

  const handelShowModal = (item) =>{
    setShowModal(true);
    setPassItemToModal(item);
  }

  const handleClose = () =>{
    setShowModal(false)
  }



  return (
    <>
     <Row xs={1} md={4} className="g-4">
     {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card >
            <Card.Img variant="top" src={`${process.env.REACT_APP_IMEGE_URL}${props.movieData.poster_path}`} />
            <Card.Body>
              <Card.Title><h3>{props.movieData.title}</h3></Card.Title>
              <Card.Text>
               <p>{props.movieData.release_date}</p>
               <p>{props.movieData.overview}</p>
              </Card.Text>
              <Button variant="primary" onClick={() => {handelShowModal(props.movieData)} }>Add to the favorite list</Button>{' '}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

    <ModalMovie showFlag={showModal} item={passItemToModal} handleClose={handleClose} />
    </>
  );
}

export default Movie;
