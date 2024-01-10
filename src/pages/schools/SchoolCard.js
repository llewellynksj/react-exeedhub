import { Card } from "react-bootstrap";
import Button from "../../components/Button";

const SchoolCard = (props) => {
  const {
    id,
    school_name,
    school_level,
    street_address,
    locality_name,
    ofsted,
    overall_rating,
  } = props;

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{school_name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {school_level}
          </Card.Subtitle>
          <Card.Text>
            {street_address}, {locality_name}
          </Card.Text>
          <p>Ofsted: {ofsted}</p>
          <p>Overall Rating: {overall_rating}</p>
          <Card.Link href="#">Read Reviews</Card.Link>
          <Card.Link href="#">Add a Review</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default SchoolCard;
