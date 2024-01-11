import { Card, Container, Row, Col } from "react-bootstrap";
import school_image from "../../assets/school.jpg";
import styles from "../../styles/School.module.css";

const School = (props) => {
  const {
    id,
    school_name,
    school_level,
    ofsted,
    overall_rating,
    street_address,
    locality_name,
  } = props;

  return (
    <Container className="overflow-hidden p-4">
      <h1>{school_name}</h1>

      <Row className="flex-column-reverse flex-md-row">
        <Col md={6}>
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title className="text-uppercase">Overview</Card.Title>
              <Card.Text>Level: {school_level}</Card.Text>
              <Card.Text>
                Address: {street_address}, {locality_name}
              </Card.Text>
              <Card.Text>
                <p>Ofsted: {ofsted}</p>
              </Card.Text>
              <Card.Text>
                <p>Overall Rating: {overall_rating}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-3 mb-md-0">
          <Card style={{ width: "100%" }}>
            <Card.Img variant="top" src={school_image} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default School;
