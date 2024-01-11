import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

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

  const currentUser = useCurrentUser();

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
          <div className="d-flex justify-content-between">
            <Link to={`/schools/${id}`} className="Link">
              Read Reviews
            </Link>
            {currentUser && (
              <Link to={`/schools/${id}/add-review`} className="Link">
                Add a Review
              </Link>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default SchoolCard;
