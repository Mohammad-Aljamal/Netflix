import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';


function UpdateFav(props) {

    const handleSubmit = async(e) => {
        e.preventDefault();
        const serverUrl=`${process.env.REACT_APP_SERVER_URL}update/${props.dataFav.id}`;
        const obj ={
            title: e.target.title.value,
            release_date: e.target.release_date.value,
            poster_path: e.target.poster_path.value,
            overview: e.target.overview.value,
            comment: e.target.comment.value
        }
        const result = await axios.post(serverUrl,obj);
        tackDataFromChaildAfterUbdate(result.data);
        

    }
  return (
    <>
       <Modal show={props.showFlag} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Movie Name</Form.Label>
                            <Form.Control
                                name="title"
                                type="text"
                                defaultValue={props.dataFav.title}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>release_date</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="release_date"
                                    name="tags"
                                    defaultValue={props.dataFav.release_date}
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Image Path</Form.Label>
                            <Form.Control
                                name="poster_path"
                                type="text"
                                defaultValue={`${process.env.REACT_APP_IMEGE_URL}${props.dataFav.poster_path}`}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>overview</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="overview"
                                    name="toptext"
                                    defaultValue={props.dataFav.overview}
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>comment</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="comment"
                                    name="rank"
                                    defaultValue={props.dataFav.comment}
                                />
                            </InputGroup>
                        </Form.Group>
                        
                        <Button type="submit" onClick={props.handleClose}>Submit form</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
    </>
  );
}

export default UpdateFav;
