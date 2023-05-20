import axios from "axios";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import UpdateFav from "./UpdateFav";
// import { isTemplateLiteral } from "@babel/types";


function FavList(props) {
  const [showFav, setShowFav] = useState([]);
  const sendReq = async () => {
    const serverUrl = `${process.env.REACT_APP_SERVER_URL}getMovies`;
    const result = await axios.get(serverUrl);
    setShowFav(result.data);
  };


  useEffect(() => {
    sendReq();
  }, []);

// ---------------------------------------------------------------

const [showUpdateModal,setShowUpdateModal] = useState(false);
const [favData,setFavData] = useState({});
const handleUpdate  = (item) => {
    setShowUpdateModal(true);
    setFavData(item);
    console.log(item);
    console.log(favData);
}

const handleClose = () => {
    setShowUpdateModal(false);
}

const handleDelete = async (item) => {
    const serverUrl = `${process.env.REACT_APP_SERVER_URL}delete/${item.id}`;
    const result = await axios.delete(serverUrl);
    setShowFav(result.data);

}

const tackDataFromChaildAfterUbdate = (arr) => {
    setShowFav(arr);

}


  return (
    <>
      <Row xs={1} md={4} className="g-4">
        {showFav.map((item, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img
                variant="top"
                src={`${process.env.REACT_APP_IMEGE_URL}${item.poster_path}`}
              />
              <Card.Body>
                <Card.Title>
                  <h3>{item.title}</h3>
                </Card.Title>
                <Card.Text>
                  <p>{item.release_date}</p>
                  <p>{item.overview}</p>
                </Card.Text>
                <Button variant="success" onClick={() => {handleUpdate(item)}}>Update</Button>
                <Button variant="danger" onClick={() => {handleDelete(item)}} >Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <UpdateFav showFlag={showUpdateModal} dataFav={favData} handleClose={handleClose}  tackDataFromChaildAfterUbdate={tackDataFromChaildAfterUbdate}/>
    </>
  );
}

export default FavList;
